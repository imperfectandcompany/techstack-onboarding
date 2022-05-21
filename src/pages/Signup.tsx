import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonNote, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import styles from './SignIn.module.css'; // Import css modules stylesheet as styles


const Signup: React.FC = () => {


  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  function handleSubmit(){
    console.log({email});
    console.log({password});
  }
    return (
      <IonPage className={`${styles.bg}`} >
      <IonHeader>
      <IonToolbar color="none"  className={`${styles.toolbar}`} >
          <IonButtons slot="start">
            <IonBackButton text="" color="white"/>
          </IonButtons>
          <IonTitle color="white">New Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonList className={`${styles.transparentbg}`}>
          <IonListHeader lines="full" >
          <IonLabel class="ion-text-center" color="white">
            What's good!
            </IonLabel>
          </IonListHeader>
          <div className="flex flex-col m-10">
            <div className="mb-8 text-lg font-medium text-center text-white">We’re so excited to have you here! Creating an account is the first step.</div>
            <IonItem className="flex" color="none">
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" value={email}  onIonChange={e => setEmail(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem className="flex">
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" color="white" value={password} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
            </IonItem>
            <div className="flex justify-center mt-6">
            <IonButton expand="block" size="large"
                            onClick={() => {
                              handleSubmit()
                            }}
            className="flex mt-24 font-bold transition cursor-pointer select-none focus:select-none hover:text-gray-100 focus:text-opacity-50" color="white" fill="clear">     
Continue
</IonButton>
            </div>
          </div>
        </IonList>
      </IonContent>
    </IonPage>
    );
  };

export default Signup;
