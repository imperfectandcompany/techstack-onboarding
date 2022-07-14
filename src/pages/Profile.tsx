import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonProgressBar,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { chevronDown, chevronUp, closeCircle, ellipsisHorizontal, heartOutline } from 'ionicons/icons';
import { useState } from 'react';
import { LikeButton } from '../components/LikeButton';
import ProfileData from '../store/Profile';
import styles from '../components/ExploreContainer.module.css' // Import css modules stylesheet as styles



const Profile = () => {


  const [isPostCollapsed, setCollapsed] = useState(false)

  function readMorePostHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation()
    setCollapsed(!isPostCollapsed)
  }

  function trimText(text: string) {
    const maxLength = 90
    const originalContent = text.trim()
    const content = originalContent.slice(0, maxLength)
    return (
      <>
        <div className={!isPostCollapsed ? 'text-transparent' : ''}>
          <button className="transition text-left whitespace-pre-line bg-clip-text bg-gradient-to-t from-gray-100 to-black dark:from-black dark:to-white">
            <span onClick={(e) => readMorePostHandler(e)} className=''>
              {isPostCollapsed ? originalContent : content}
            </span>
          </button>
        </div>
        {originalContent.length > maxLength ? (
          <button
            className='text-base font-medium text-black dark:text-white  capitalize transition active:opacity-50 hover:text-orange-400 focus:text-orange-500 focus:outline-none'
            onClick={(e) => readMorePostHandler(e)}
          >
            {isPostCollapsed ? <IonIcon icon={chevronUp}></IonIcon> : <IonIcon icon={chevronDown}></IonIcon>}
          </button>
        ) : null}
      </>
    )
  }


  return (

    <IonPage>
      <IonHeader className="bg-white dark:bg-black">
        <IonToolbar color='none'>
          <IonButtons slot="start" >
            <IonBackButton color='primary' />
          </IonButtons>
          <IonTitle color='dark'>
            {ProfileData.username}
          </IonTitle>
          <IonButtons slot="end">
            <IonButton color='primary'>Report</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent
        color='light'
        fullscreen={true}
        className='bg-white dark:bg-black'
      >
        <div className='ion-padding dark:bg-black bg-white'>
          <div className="flex items-center justify-between">
            {/* profile pic */}
            <IonAvatar className='w-16 h-16' >
              <img className='' src='https://images.squarespace-cdn.com/content/v1/5efab2a9e0739376a2707d36/1598810232793-6NGA9FQD03HORBVVELHC/LinkedIn-Profile-Photography'></img>
            </IonAvatar>

            <div>
              {/* username */}
              <div className="flex gap-2">
                <div className='font-bold'>
                  {ProfileData.username}
                </div>
                {/* relationship status chip */}
                <div className="rounded-md items-center font-medium flex bg-black/5 px-1 text-xs dark:bg-white/5">
                  {ProfileData.following && ProfileData.followsMe ? 'Mutual Followers' : ProfileData.followsMe ? 'Follows You' : null}
                </div>
              </div>
              {/* clout check */}
              <div className="flex gap-2">
                <div>
                  <span className='font-medium'>{ProfileData.followerCount}</span> Followers
                </div>
                <div>
                  <span className='font-medium'>{ProfileData.followingCount}</span> Following
                </div>
              </div>
            </div>
          </div>
          {/* Description */}
          {/* Name and Bio */}
          <div className='ion-padding-vertical'>
            <div className='font-semibold'>
              {ProfileData.firstName + ' ' + ProfileData.lastName}
            </div>
            <div className="flex flex-col">
              {trimText(
                ProfileData.biography
              )}
            </div>
            <div>
            </div>
          </div>
          <div>
            {/* row for interactions */}
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <div>
                  {LikeButton(5)}
                </div>
                <div>
                  <IonButton fill='clear' size='small' color='dark'>
                    <IonIcon slot="start" icon={ellipsisHorizontal} />
                  </IonButton>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <IonButton fill='outline' color='dark' size='small'>Message</IonButton>
                </div>
                <div>
                  <IonButton fill='outline' color='dark' size='small'> {ProfileData.following ? 'Unfollow' : 'Follow'}</IonButton>
                </div>
              </div>
            </div>
          </div>

          <IonList className='mb-6'>
            <IonListHeader lines='none' className='flex items-center border-b border-black/10 dark:border-white/10'>
              <IonLabel color='dark'>Recent Activity</IonLabel>
            </IonListHeader>
            <IonRow class="my-4 space-x-2 flex justify-around">
              <IonCol>
                <IonChip className='flex justify-around' color='primary'>
                  <IonLabel>Posts</IonLabel>
                  <IonIcon icon={closeCircle} />
                </IonChip>
              </IonCol>
              <IonCol>
                <IonChip className='flex justify-around' color='medium'>
                  <IonLabel>Public</IonLabel>
                </IonChip>
              </IonCol>
              <IonCol>
                <IonChip className='flex justify-around' color='medium'>
                  <IonLabel>Private</IonLabel>
                </IonChip>
              </IonCol>
              <IonCol>
                <IonChip className='flex justify-around' color='medium'>
                  <IonLabel>Comments</IonLabel>
                </IonChip>
              </IonCol>
              <IonCol>
                <IonChip className='flex justify-around' color='medium'>
                  <IonLabel>Likes</IonLabel>
                </IonChip>
              </IonCol>
            </IonRow>


            {/* in the future put this in an array and flip items on from start to last based on what is selected */}
            <IonGrid>
              <IonRow class="mt-4">
                <IonCol size='4'>
                  <IonButton fill='clear' color="medium">
                    <IonText color="dark" className="text-xl font-bold">Posts</IonText>
                  </IonButton>
                </IonCol>
                <IonCol >
                  <IonButton fill='clear' color="medium">
                    <IonText color="medium" className="font-bold">Pins</IonText>
                  </IonButton>
                </IonCol>
                <IonCol >
                  <IonButton fill='clear' color="medium">
                    <IonText color="medium" className="font-bold">Lists</IonText>
                  </IonButton>
                </IonCol>
                <IonCol >
                  <IonButton fill='clear' color="medium">
                    <IonText color="medium" className="font-bold">Shares</IonText>
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>


            <IonItem detail={true} lines='none' className={`${styles.post}`}>
              <IonLabel>
                <div className='flex space-x-2'>
                  <div>
                    <p className='text-black/80 dark:text-white/80'>joemama did a spinoff to john&lsquo;s cenas post &quot;you cannot see me&quot;</p>
                  </div>
                </div>
                <p className='dark:text-white/40 text-black/40'>6 likes 2 comments</p>
              </IonLabel>
            </IonItem>
          </IonList>



          <IonList className='mb-6'>
            <IonListHeader lines='none' className='flex items-center border-b border-black/10 dark:border-white/10'>
              <IonLabel color='dark'>Comments</IonLabel>

              <IonButton className='text-xs text-black/50 dark:text-white/50'>
                View all 204 comments
              </IonButton>
            </IonListHeader>
            <IonItem lines='none' className={`${styles.post}`}>
              <IonAvatar slot="start" className='bg-black/75 dark:bg-white/75 mr-2'>
              </IonAvatar>
              <IonLabel>
                <div className='flex space-x-2'>
                  <div>
                    <h3 className='text-black/80 dark:text-white/80'>Username</h3>
                  </div>
                  <div>
                    <p className='dark:text-white/40 text-black/40'>2 days ago</p>
                  </div>
                </div>
                <p className='text-black dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </IonLabel>
              <IonIcon icon={heartOutline} className='dark:text-white/30' slot="end" />
            </IonItem>
          </IonList>



          <IonList>
            <IonListHeader lines='none' class='mb-4'>
              <IonLabel className='text-sm font-medium uppercase' color='dark'>Connected Accounts</IonLabel>
            </IonListHeader>


<div className='flex flex-col'>
<IonItem lines='none' className={`${styles.post}`}>
              <IonCard color='light' className='dark:bg-white/5 m-2 p-3'>
                <IonCardHeader>
                  <div className='flex items-center space-x-6 justify-between mb-4'>
                    <div>
                      <IonAvatar className='dark:bg-white/10 bg-black/10 text-pink-500'>
                      <svg role="img" viewBox="0 0 24 24" fill='currentColor' xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                      </IonAvatar>
                    </div>
                    <div className=' flex flex-col'>
                      <IonCardTitle>Username</IonCardTitle>
                    </div>

                  </div>
                </IonCardHeader>
                  <div className='flex flex-row space-x-4 justify-between items-center'>
<div className='flex space-x-6'>                    <IonLabel>
                      <h3>23
                      </h3>
                      <p>Posts</p>
                    </IonLabel>
                    <IonLabel>
                      <h3>23
                      </h3>
                      <p>Posts</p>
                    </IonLabel></div>
                    <div className='text-black/20 dark:text-white/20'>
                    <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className="iconExternalLink_3J9K"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
                  </div>
                  </div>

              </IonCard>
            </IonItem> 




            <IonItem lines='none' className={`${styles.post}`}>
              <IonCard color='light' className='dark:bg-white/5 m-2 p-3'>
                <IonCardHeader>
                  <div className='flex items-center space-x-6 justify-between mb-4'>
                    <div>
                      <IonAvatar className='dark:bg-red/10 bg-black/10  text-green-500'>
                      <svg role="img" viewBox="0 0 24 24" fill='currentColor' xmlns="http://www.w3.org/2000/svg"><title>Spotify</title><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                      </IonAvatar>
                    </div>
                    <div className='flex flex-col'>
                      <IonCardTitle class='text-lg'>Listened to</IonCardTitle>
                      <IonCardSubtitle class='text-xs text-black/50 dark:text-white/20'>3h ago</IonCardSubtitle>
                    </div>

                  </div>
                </IonCardHeader>
                <IonProgressBar value={0.5} color='medium'></IonProgressBar>
                0:34
<br/>
                  <div className='mt-4 flex flex-row space-x-4 justify-between items-center'>
<div className='flex items-center space-x-4'>
  <div>
    <img className='h-8' src='https://i1.sndcdn.com/artworks-CNHNX49wY7Pw-0-t500x500.jpg'></img>
    </div>
<div className='flex space-x-6'>                    <IonLabel>
<h3>by Bjørn Riis
                      </h3>
                      <p>on A Storm is Coming</p>
                    </IonLabel>
</div>
</div>

                  </div>

              </IonCard>
            </IonItem> 





</div>



          </IonList>
        </div>
      </IonContent>
    </IonPage>)
}

export default Profile
