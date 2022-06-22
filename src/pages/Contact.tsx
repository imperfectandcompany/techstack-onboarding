import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { useState } from 'react'

const Contact: React.FC = () => {
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
          Thanks for reaching out, we will be in contact soon!
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
          <IonTitle>Contact Us</IonTitle>
        </IonToolbar>
      </IonHeader>
      {submitted ? (
        completed()
      ) : (
        <IonContent fullscreen={true} color='light'>
          <IonItem>
            <IonLabel position='floating' color='dark'>
              Name
            </IonLabel>
            <IonInput color='dark' type='text' required />
          </IonItem>
          <IonItem>
            <IonLabel position='floating' color='dark'>
              Email
            </IonLabel>
            <IonInput
              color='dark'
              autocomplete='email'
              clearInput={true}
              inputmode='email'
              enterkeyhint='next'
              type='email'
              required
            />
          </IonItem>
          <IonItem>
            <IonLabel position='floating' color='dark'>
              Enter Message
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

export default Contact
