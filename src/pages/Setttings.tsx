import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonMenuButton, IonMenuToggle, IonNote, IonPage, IonTitle, IonToggle, IonToolbar, ScrollDetail } from '@ionic/react';
import { openOutline } from 'ionicons/icons';
import { useState } from 'react';
import PolicyContainer from '../components/PolicyContainer/PolicyContainer';
import * as PolicyConstants from '../constants/PolicyContainer';


const Settings: React.FC = () => {
  
  const toggleDarkModeHandler = (value:boolean) => {
    if(value){
    // Whenever the user explicitly chooses light mode
      localStorage.theme = 'dark'
      document.body.classList.add('dark')      
    }else {
    // Whenever the user explicitly chooses dark mode
      localStorage.theme = 'light'
      document.body.classList.remove('dark')       
    }
  };

  const [showPolicy, setShowPolicy] = useState(false);
  const [CurrentSection, setCurrentSection] = useState<PolicyConstants.Sections[]>([])
  const [CurrentTitle, setCurrentTitle] = useState("");
  const [CurrentSubTitle, setCurrentSubTitle] = useState("");

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
      <IonToolbar color="secondary">
      <IonButtons slot="start" >
            <IonBackButton text="Back" color="primary"/>
          </IonButtons>        
        <IonTitle>
          Settings
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <PolicyContainer showPolicy={showPolicy} setShowPolicy={setShowPolicy} Sections={CurrentSection} Title={CurrentTitle} Subtitle={CurrentSubTitle} loggedIn={true}/>
    <IonContent fullscreen={true} color="light" >
        <IonList>
        <IonListHeader lines='none' color="light"></IonListHeader>
          <IonItem detail color='secondary' >
            <IonLabel>
              Email
            </IonLabel>
            <IonNote slot="end">johncena@gmail.com</IonNote>
          </IonItem>
          <IonItem detail lines="full"  color='secondary'>
            <IonLabel>
              Alerts
            </IonLabel>
          </IonItem>
          <IonListHeader lines='none' color="light"></IonListHeader>
          <IonItem color='secondary' lines="full">
            <IonLabel>
              <h2>Dark Mode</h2>
              <p>Currently only works on Settings</p>
            </IonLabel>
            <IonToggle slot="end" color="primary" checked={localStorage.theme === "dark" ? true : false}
              onIonChange={e => toggleDarkModeHandler(e.detail.checked)}            
            ></IonToggle>
          </IonItem>
          <IonListHeader lines='none' color="light"></IonListHeader>
          <IonItem detail  color='secondary' routerLink="/feedback" routerDirection="forward">
            <IonLabel>
              Feedback
            </IonLabel>
          </IonItem>
          <IonItem detail  color='secondary' routerLink="/contact" routerDirection="forward">
            <IonLabel>
              Contact Us
            </IonLabel>
          </IonItem>
          <IonItem detail  color='secondary'>
            <IonLabel onClick={() => {setShowPolicy(true); setCurrentSection(PolicyConstants.policy.privacy.Sections); setCurrentSubTitle(PolicyConstants.policy.privacy.Subtitle); setCurrentTitle(PolicyConstants.policy.privacy.Title)}}>
              Privacy Policy
            </IonLabel>
          </IonItem>
          <IonItem detail  color='secondary'>
            <IonLabel onClick={() => {setShowPolicy(true); setCurrentSection(PolicyConstants.policy.cookie.Sections); setCurrentSubTitle(PolicyConstants.policy.cookie.Subtitle); setCurrentTitle(PolicyConstants.policy.cookie.Title)}}>
              Cookie Policy
            </IonLabel>
          </IonItem>
          <IonItem detail lines="full"  color='secondary'>
            <IonLabel onClick={() => {setShowPolicy(true); setCurrentSection(PolicyConstants.policy.tos.Sections); setCurrentTitle(PolicyConstants.policy.tos.Title); setCurrentSubTitle(PolicyConstants.policy.tos.Subtitle)}}>
              Terms of Service
            </IonLabel>
          </IonItem>
          <IonItem lines="none" color="light">
            <IonLabel color="medium">
              <p>Version 1.0 / Build 1</p>
            </IonLabel>
          </IonItem>
          <IonListHeader lines='none' color="light"></IonListHeader>

          <IonItem color='secondary' button lines="full" href="https://imperfectandcompany.com" target="_blank">
            <IonIcon color="primary" icon={openOutline} slot="start"></IonIcon>
            <IonLabel>
              Visit <strong>Imperfect and Company</strong>
            </IonLabel>
          </IonItem>
          <IonListHeader lines='none' color="light"></IonListHeader>
        </IonList>


      </IonContent></IonPage>
  );
};

export default Settings;