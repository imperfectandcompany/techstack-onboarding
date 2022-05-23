import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonMenuToggle, IonNote, IonPage, IonTitle, IonToolbar, ScrollDetail } from '@ionic/react';
import { addOutline, ellipsisHorizontal, menu } from 'ionicons/icons';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Menu from './Menu';
import './Signup.css';

const Profile: React.FC = () => {


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
                <IonHeader>
      <IonToolbar color="none" >
          <IonButtons slot="start">
            <IonBackButton text="" color="white"/>
          </IonButtons>
          <IonTitle color="white">New Account</IonTitle>
        </IonToolbar>
      </IonHeader>                
      <IonContent fullscreen={true} color="dark" scrollEvents={true} onIonScroll={(e) => onScroll(e)} 
>
ddd
      </IonContent>
    </IonPage>
  );
};

export default Profile;