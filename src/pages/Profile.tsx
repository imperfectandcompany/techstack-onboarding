import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
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


<div className='flex flex-row'>

<IonItem lines='none' className={`${styles.post}`}>
              <IonCard color='light' className='dark:bg-white/5 m-2 p-3'>
                <IonCardHeader>
                  <div className='flex items-center space-x-6 justify-between mb-4'>
                    <div>
                      <IonAvatar className='dark:bg-white/10 bg-black/10'>
                        <img src='https://images.squarespace-cdn.com/content/v1/5efab2a9e0739376a2707d36/1598810232793-6NGA9FQD03HORBVVELHC/LinkedIn-Profile-Photography'/>
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
</div>



          </IonList>
        </div>
      </IonContent>
    </IonPage>)
}

export default Profile
