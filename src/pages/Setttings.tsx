import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonMenuButton, IonMenuToggle, IonNote, IonPage, IonTitle, IonToggle, IonToolbar, ScrollDetail } from '@ionic/react';
import { openOutline } from 'ionicons/icons';

const Settings: React.FC = () => {


  document.body.classList.toggle("dark");

  const toggleDarkModeHandler = (value:boolean) => {
    document.body.classList.toggle("dark");
  };

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
    <IonContent fullscreen={true} color="secondary" >
        <IonList>
        <IonListHeader color="secondary"></IonListHeader>
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
          <IonListHeader color="secondary" lines='none'></IonListHeader>
          <IonItem color='secondary' lines="full">
            <IonLabel>
              <h2>Dark Mode</h2>
              <p>Currently only works on Settings</p>
            </IonLabel>
            <IonToggle slot="end" color="primary"
              onIonChange={e => toggleDarkModeHandler(e.detail.checked)}            
            ></IonToggle>
          </IonItem>
          <IonListHeader color="secondary" lines='none'></IonListHeader>
          <IonItem detail  color='secondary'>
            <IonLabel>
              Feedback
            </IonLabel>
          </IonItem>
          <IonItem detail  color='secondary'>
            <IonLabel>
              Contact Us
            </IonLabel>
          </IonItem>
          <IonItem detail  color='secondary'>
            <IonLabel>
              Privacy Policy
            </IonLabel>
          </IonItem>
          <IonItem detail  color='secondary'>
            <IonLabel>
              Cookie Policy
            </IonLabel>
          </IonItem>
          <IonItem detail lines="full"  color='secondary'>
            <IonLabel>
              Terms of Service
            </IonLabel>
          </IonItem>
          <IonItem lines="none" color="secondary">
            <IonLabel color="medium">
              <p>Version 1.0 / Build 1</p>
            </IonLabel>
          </IonItem>
          <IonListHeader color="secondary" lines='none'></IonListHeader>

          <IonItem color='secondary' button lines="full" href="https://imperfectandcompany.com" target="_blank">
            <IonIcon color="primary" icon={openOutline} slot="start"></IonIcon>
            <IonLabel>
              Visit <strong>Imperfect and Company</strong>
            </IonLabel>
          </IonItem>
          <IonListHeader color="secondary" lines='none'></IonListHeader>
        </IonList>


      </IonContent></IonPage>
  );
};

export default Settings;