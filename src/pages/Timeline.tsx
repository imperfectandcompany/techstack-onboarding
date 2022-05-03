import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonMenuToggle, IonNote, IonPage, IonTitle, IonToolbar, ScrollDetail } from '@ionic/react';
import { addOutline, ellipsisHorizontal, menu } from 'ionicons/icons';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Menu from './Menu';
import './Signup.css';

const Timeline: React.FC = () => {

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLogin = () => {
    if (email) {
      console.log("flop");
    }
  }

  
  var prevScrollpos = window.pageYOffset;
  function onScroll(e: CustomEvent<ScrollDetail>) {
    var currentScrollPos = e.detail.scrollTop;
    const toolbar = document.getElementById("toolbar");
    const header = document.getElementById("header");
    if(toolbar && currentScrollPos > 80){
      if (prevScrollpos > currentScrollPos ) {
        toolbar.style.top = "0px";
      } else if(header?.classList.contains("header-collapse-condense-inactive")) {
        toolbar.style.top = "-44px";
      }
      prevScrollpos = currentScrollPos;      
    }
  }

  return (
    <IonPage>
                <Menu></Menu>
      <IonHeader >
        <IonToolbar id="toolbar" class='transition-all top-0 duration-1000'>        
                  <IonTitle>
                  <img
                  className="w-6 h-6 mx-auto"
                  src={process.env.PUBLIC_URL + '/assets/icon/icon.svg'}
                  alt="postogon logo" />
                  </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="main" fullscreen={true} color="dark" scrollEvents={true} onIonScroll={(e) => onScroll(e)} 
>
      <IonHeader collapse="condense" id="header" class="ion-no-border ">
      <IonToolbar color='dark'>
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

    <IonMenuButton menu='first' type='button' color='primary'></IonMenuButton>
    <IonMenuToggle menu='first'>
          <IonButton>Toggle Menu</IonButton>
        </IonMenuToggle>     
      <ExploreContainer></ExploreContainer>


      </IonContent>

    </IonPage>
  );
};

export default Timeline;