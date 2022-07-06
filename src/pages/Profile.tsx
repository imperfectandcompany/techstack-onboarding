import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonToolbar,
} from '@ionic/react'
import {  chevronDown, chevronUp, ellipsisHorizontal} from 'ionicons/icons';
import { useState } from 'react';
import { LikeButton } from '../components/LikeButton';
import ProfileData from '../store/Profile';



const Profile = () => {
  

  const [isPostCollapsed, setCollapsed] = useState(false)

  function readMorePostHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation()
    setCollapsed(!isPostCollapsed)
  }
  
  function trimText(text: string) {
    const maxLength = 105
    const originalContent = text.trim()
    const content = originalContent.slice(0, maxLength)
    return (
      <>
        <span className='mr-1 whitespace-pre-line'>
          {isPostCollapsed ? originalContent : content}
        </span>
        {originalContent.length > maxLength ? (
          <button
            className='text-base font-medium text-blue-400 capitalize transition active:opacity-50 hover:text-blue-400 focus:text-blue-500 focus:outline-none'
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
        <IonButtons slot="start">
          <IonBackButton color='dark' />
        </IonButtons>
        <IonButtons slot="end">
          <IonButton>Report</IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent
    
      fullscreen={true}
      color='light'
    >
      <div className="flex items-center justify-evenly">
        {/* profile pic */}
        <div className="bg-gray-200 rounded-full w-16 h-16 ">
        </div>
        <div>
          {/* username */}
          <div className="flex gap-2">
            <div>
              {ProfileData.username}
            </div>
            {/* relationship status chip */}
            <div>
              {ProfileData.following && ProfileData.followsMe ? 'Mutual Followers' : ProfileData.followsMe ? 'Follows You' : null}
            </div>
          </div>
          {/* clout check */}
          <div className="flex gap-2">
            <div>
              {ProfileData.followerCount} Followers
            </div>
            <div>
              {ProfileData.followingCount} Following
            </div>
          </div>
        </div>
      </div>
      {/* Description */}



      {/* Name and Bio */}
      <div>
        <div>
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
        {/* Header titles */}
        <div className="flex justify-around">
          <div>
            Tab1
          </div>
          <div>
            Tab1
          </div>
          <div>
            Tab1
          </div>
          <div>
            Tab1
          </div>
        </div>


        {/* Filter titles */}
        <div className="flex justify-around">
          <div>
            Filter1
          </div>
          <div>
            Filter2
          </div>
          <div>
            Filter3
          </div>
          <div>
            Filter4
          </div>
        </div>
      </div>



      <IonList className=" flex flex-row justify-evenly">
        <IonButton role="button" aria-selected="true" class="ion-activatable ion-focusable hydrated label-only scrollableContainer active" aria-label="" color="light">
          <IonLabel class="sc-IonLabel-ios-h sc-IonLabel-ios-s ios hydrated">Post</IonLabel>
        </IonButton>
        <IonButton role="button" aria-selected="false" class="ion-activatable ion-focusable hydrated label-only scrollableContainer" aria-label="" color="light">
          <IonLabel class="sc-IonLabel-ios-h sc-IonLabel-ios-s ios hydrated">Pins</IonLabel>
        </IonButton>
        <IonButton role="button" aria-selected="false" class="ion-activatable ion-focusable hydrated label-only scrollableContainer" aria-label="" color="light">
          <IonLabel class="sc-IonLabel-ios-h sc-IonLabel-ios-s ios hydrated">Lists</IonLabel>
        </IonButton>
        <IonButton role="button" aria-selected="false" class="ion-activatable ion-focusable hydrated label-only scrollableContainer" aria-label="" color="light">
          <IonLabel class="sc-IonLabel-ios-h sc-IonLabel-ios-s ios hydrated">Likes</IonLabel>
        </IonButton>
      </IonList>
      <IonListHeader lines="inset" color="light">
        <IonLabel>Recent Activity</IonLabel>
      </IonListHeader>

      <IonList className="ion-margin-horizontal">

        <IonItem lines="none" color="light" detail>
          <IonLabel>
            <h1>item 1</h1>
          </IonLabel>
          <p>Just now</p>
        </IonItem>

      </IonList>



    </IonContent>
  </IonPage>)
}

export default Profile
