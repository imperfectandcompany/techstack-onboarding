import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonLabel, IonText, IonTitle, IonInput, IonItem, IonButton, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Recovery.css';

const Recovery: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [emailSent, setEmailSent] = useState<boolean>(false);

  const resetPassword = () => {
    //Do stuff
    setEmailSent(true)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
      <IonBackButton defaultHref="/" />
    </IonButtons>          
          <IonTitle>Recovery</IonTitle>
        </IonToolbar>
      </IonHeader>
        {!emailSent ? 
        <IonContent>
          <IonText color="white"> 
            <p className="ion-text-center p-5">
            Enter your email address to recover your account.
            </p>
          </IonText>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput value={email} onIonChange={e => setEmail(e.detail.value!)}></IonInput>
          </IonItem>
          <IonButton className="flex font-bold"  onClick={resetPassword}>
          Reset password
         </IonButton>      
      </IonContent>
        : 
      <IonContent>
        <IonText color="white"> 
          <p className="ion-text-center p-5 mt-10 mb-10">
          Instructions for resetting your password have been sent to <span className="underline">{email}</span>
          </p>
        </IonText>
        <IonButton className="flex font-bold" routerLink="/signin" routerDirection="root">
          Login
         </IonButton>              
    </IonContent>}
      
    </IonPage>
  );
};

export default Recovery;
