import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonLabel, IonText, IonTitle, IonInput, IonItem, IonButton, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import styles from './SignIn.module.css'; // Import css modules stylesheet as styles


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
        <IonToolbar color="white" className={`${styles.toolbar}`} >
        <IonButtons slot="start">
      <IonBackButton defaultHref="/" />
    </IonButtons>          
          <IonTitle>Recovery</IonTitle>
        </IonToolbar>
      </IonHeader>
        {!emailSent ? 
        <IonContent color="white">
        <img src={process.env.PUBLIC_URL + '/assets/icon/recovery.png'} className="w-64 sm:w-24 md:w-32 lg:w-36 my-8 flex mx-auto" alt="logo" />
            <p className="ion-text-center text-black font-bold mt-5 text-5xl">
            It happens to everyone.
            </p>
            <p className="ion-text-center text-stone-500 font-medium m-6 mt-5 text-xl">
            Lost access to your account? We can send you a code to reset your password through one of your linked devices.
            </p> 
          <div className="ion-margin-horizontal">
                     <input
      id="default"
      type="text"
      value={email} onChange={e => setEmail(e.target.value!)}
      name="default"
      placeholder="Email or username"
      className="px-4 py-2 w-full text-stone-400 bg-stone-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
    />           
          </div>
          <IonButton className="flex ion-margin-top ion-margin-horizontal t-8 font-bold" color="primary" fill="solid" onClick={resetPassword}>
          <div className="text-white">Reset password</div>
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
