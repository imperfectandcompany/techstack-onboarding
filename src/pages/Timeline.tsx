import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonNote, IonPage, IonTitle, IonToolbar, ScrollDetail } from '@ionic/react';
import { addOutline, ellipsisHorizontal } from 'ionicons/icons';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Signup.css';

const Timeline: React.FC = () => {

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLogin = () => {
    if (email) {
      console.log("flop");
    }
  }

  var mobile = window.matchMedia( "(max-width: 640px)" );
  var prevScrollpos = window.pageYOffset;
  function onScroll(e: CustomEvent<ScrollDetail>) {
    const html = document.documentElement;
    const scrollPx = html.scrollTop;
    const winHeightPx = html.scrollHeight - html.clientHeight;
    const scrolled = (scrollPx / winHeightPx) * 100;

    var currentScrollPos = e.detail.scrollTop;
    console.log(e.detail.scrollTop);
    const toolbar = document.getElementById("toolbar");
    if(toolbar){
      if (prevScrollpos > currentScrollPos) {
        toolbar.style.top = "0px";	
      } else {
        toolbar.style.top = "-44px";
      }
      prevScrollpos = currentScrollPos;      
    }
  }


  

  return (
    <IonPage>
      <IonHeader id="toolbar" class='transition-all	'>
        <IonToolbar>        
                  <IonTitle>
                  <img
                  className="w-6 h-6 mx-auto"
                  src={process.env.PUBLIC_URL + '/assets/icon/icon.svg'}
                  alt="postogon logo" />
                  </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} color="dark" scrollEvents={true} onIonScroll={(e) => onScroll(e)} 
>
      <IonHeader collapse="condense" class="ion-no-border ">
      <IonToolbar  color='dark'>
      <IonTitle  size="large" className="flex items-center ">
<div className="flex items-center justify-between ">
<div className='flex space-x-4'>
<IonNote color=''>Public</IonNote>
              <IonNote color='medium'>Private</IonNote>
</div>
<IonIcon size='large' class="" icon={addOutline}></IonIcon>
</div>
              </IonTitle>
            </IonToolbar>
          </IonHeader>
      <ExploreContainer></ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export default Timeline;