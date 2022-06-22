import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from '@ionic/react'
import { LikeButton } from '../components/LikeButton';
import ProfileData from '../store/Profile';

const Profile: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='none'>
          <IonButtons slot="start">
            <IonBackButton color='dark' />
          </IonButtons>
          <IonButtons slot="end">
            Report
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
                {ProfileData.following && ProfileData.followsMe ? 'Mutual Followers' : ProfileData.followsMe ? 'Follows You': null}
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
          <div>
         {ProfileData.biography}
          </div>
          <div>
          </div>
        </div>
        <div>

          {/* row for interactions */}
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <div >
                {LikeButton(5)}
              </div>
              <div>
                more options
              </div>
            </div>
            <div className="flex gap-2">
              <div >
                message
              </div>
              <div>
                {ProfileData.following ? 'Unfollow': 'Follow'}
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

{/* Filter titles */}
<div>
<div>
  Recent Activity
</div>
</div>
      </div>
      </IonContent>
    </IonPage>
  )
}

export default Profile
