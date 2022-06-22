import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  ScrollDetail,
} from '@ionic/react'


interface profileProps {
  username:string
  followsMe:boolean
  following:boolean
  followerCount:number
  followingCount:number
  firstName:string
  lastName:string
}

const profileData:profileProps = ()=> [
{
  username:'',
  followsMe:true,
  following:false,
  followerCount:4,
  followingCount:6,
  firstName:'joe',
  lastName:'mama'
}
]

const Profile: React.FC = () => {
  let prevScrollpos = window.pageYOffset
  function onScroll(e: CustomEvent<ScrollDetail>) {
    const currentScrollPos = e.detail.scrollTop
    const toolbar = document.getElementById('toolbar')
    const header = document.getElementById('header')
    if (toolbar && currentScrollPos > 80) {
      if (prevScrollpos > currentScrollPos) {
        toolbar.style.top = '0px'
      } else if (header?.classList.contains('header-collapse-condense-inactive')) {
        toolbar.style.top = '-44px'
      }
      prevScrollpos = currentScrollPos
    }
  }

const uatww = profileData.firstName;
  

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
        scrollEvents={true}
        onIonScroll={(e) => onScroll(e)}
      >
        <div className="flex items-center justify-evenly">
          {/* profile pic */}
          <div className="bg-gray-200 rounded-full w-16 h-16 ">
          </div>
          <div>
            {/* username */}
            <div className="flex gap-2">
              <div>
                Username
              </div>
              {/* relationship status chip */}
              <div>
                Follows You
              </div>
            </div>
            {/* clout check */}
            <div className="flex gap-2">
              <div>
                12 Followers
              </div>
              <div>
                12 Following
              </div>
            </div>
          </div>
        </div>
        {/* Description */}



    {/* Name and Bio */}
        <div>
          <div>
            Joe Mama
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div>
          </div>
        </div>
        <div>

          {/* row for interactions */}
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div >
                heart
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
                follow
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
