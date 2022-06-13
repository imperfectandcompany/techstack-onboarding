import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonMenuToggle,
  IonNote,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToggle,
  IonToolbar,
  ScrollDetail,
} from '@ionic/react'
import { useState } from 'react'

const Feedback: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false)

  const completed = () => {
    return (
      <IonContent fullscreen={true} color='light'>
        <img
          src={process.env.PUBLIC_URL + '/assets/icon/Check.png'}
          className='w-64 sm:w-24 md:w-32 lg:w-36 my-8 flex mx-auto'
          alt='logo'
        />
        <p className='ion-text-center dark font-bold mt-5 text-5xl'>Submitted!</p>
        <p className='ion-text-center text-stone-500 font-medium m-6 mt-9 mb-12 text-xl'>
          You have successfully submitted feedback. Thanks for your input!
        </p>
        <div className='ion-margin-horizontal'>
          <IonButton
            className='flex ion-margin-top ion-margin-horizontal t-8 font-bold'
            color='primary'
            fill='solid'
            routerLink='/settings'
            routerDirection='back'
          >
            Done
          </IonButton>
        </div>
      </IonContent>
    )
  }

  return (
    <IonPage>
      <IonHeader class='ion-no-border'>
        <IonToolbar color='secondary'>
          <IonButtons slot='start'>
            <IonBackButton text='Back' color='primary' />
          </IonButtons>
          <IonTitle>Feedback</IonTitle>
        </IonToolbar>
      </IonHeader>
      {submitted ? (
        completed()
      ) : (
        <IonContent fullscreen={true} color='secondary'>
          <IonItem>
            <IonLabel position='floating' color='dark'>
              Select a Reason
            </IonLabel>
            <IonSelect className='dark' color='secondary'>
              <IonSelectOption>Report a bug</IonSelectOption>
              <IonSelectOption>Suggestion</IonSelectOption>
              <IonSelectOption>Other</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position='floating' color='dark'>
              Enter Feedback
            </IonLabel>
            <IonTextarea color='dark' required></IonTextarea>
          </IonItem>
          <IonButton
            className='flex ion-margin-top ion-margin-horizontal t-8 font-bold'
            color='primary'
            fill='solid'
            onClick={() => setSubmitted(true)}
          >
            Submit
          </IonButton>
        </IonContent>
      )}
    </IonPage>
  )
}

export default Feedback
