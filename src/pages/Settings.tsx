import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonNote,
  IonPage,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react'
import { openOutline } from 'ionicons/icons'

const Settings: React.FC = () => {
  const toggleDarkModeHandler = (value: boolean) => {
    if (value) {
      // Whenever the user explicitly chooses light mode
      localStorage.theme = 'dark'
      document.body.classList.add('dark')
    } else {
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = 'light'
      document.body.classList.remove('dark')
    }
  }

  return (
    <IonPage>
      <IonHeader class='ion-no-border'>
        <IonToolbar color='secondary'>
          <IonButtons slot='start'>
            <IonBackButton text='Back' color='primary' />
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} color='light'>
        <IonList>
          <IonListHeader lines='none' color='light'></IonListHeader>
          <IonItem detail color='secondary'>
            <IonLabel>Email</IonLabel>
            <IonNote slot='end'>johncena@gmail.com</IonNote>
          </IonItem>
          <IonItem detail lines='full' color='secondary'>
            <IonLabel>Alerts</IonLabel>
          </IonItem>
          <IonListHeader lines='none' color='light'></IonListHeader>
          <IonItem color='secondary' lines='full'>
            <IonLabel>
              <h2>Dark Mode</h2>
              <p>Currently only works on Settings</p>
            </IonLabel>
            <IonToggle
              slot='end'
              color='primary'
              checked={localStorage.theme === 'dark' ? true : false}
              onIonChange={(e) => toggleDarkModeHandler(e.detail.checked)}
            ></IonToggle>
          </IonItem>
          <IonListHeader lines='none' color='light'></IonListHeader>
          <IonItem detail color='secondary'>
            <IonLabel>Feedback</IonLabel>
          </IonItem>
          <IonItem detail color='secondary'>
            <IonLabel>Contact Us</IonLabel>
          </IonItem>
          <IonItem detail color='secondary'>
            <IonLabel>Privacy Policy</IonLabel>
          </IonItem>
          <IonItem detail color='secondary'>
            <IonLabel>Cookie Policy</IonLabel>
          </IonItem>
          <IonItem detail lines='full' color='secondary'>
            <IonLabel>Terms of Service</IonLabel>
          </IonItem>
          <IonItem lines='none' color='light'>
            <IonLabel color='medium'>
              <p>Version 1.0 / Build 1</p>
            </IonLabel>
          </IonItem>
          <IonListHeader lines='none' color='light'></IonListHeader>

          <IonItem
            color='secondary'
            button
            lines='full'
            href='https://imperfectandcompany.com'
            target='_blank'
          >
            <IonIcon color='primary' icon={openOutline} slot='start'></IonIcon>
            <IonLabel>
              Visit <strong>Imperfect and Company</strong>
            </IonLabel>
          </IonItem>
          <IonListHeader lines='none' color='light'></IonListHeader>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Settings
