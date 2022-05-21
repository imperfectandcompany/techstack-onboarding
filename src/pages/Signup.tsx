import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonNote, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { eyeOff, eye } from 'ionicons/icons';
import { useState } from 'react';
import styles from './SignIn.module.css'; // Import css modules stylesheet as styles


const Signup: React.FC = () => {


  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordfocused, setPasswordFocused] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function togglePassword(){
    setShowPassword(!showPassword);
  }
  

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
          <div className="flex flex-col ">
            <div className="mb-8 text-lg font-medium text-center text-white">We’re so excited to have you here! Creating an account is the first step.</div>
            <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput autocomplete="email" clearInput={true} inputmode="email" enterkeyhint="next"  type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} required
></IonInput>
          </IonItem>
          <IonItem className="items-end">
            <IonLabel position="floating">Password</IonLabel>
            <IonInput onIonFocus={()=>setPasswordFocused(true)} onIonBlur={()=>setPasswordFocused(false)} id="passwordEnter" class="passwordEnter" autocomplete="current-password" clearOnEdit={true} inputmode="text" enterkeyhint="go" type={showPassword ? 'text': 'password'} value={password} onIonChange={e => setPassword(e.detail.value!)} required
></IonInput>
{passwordfocused ? 
<IonIcon slot="end" className="cursor-pointer select-none animate__animated animate__fadeIn focus:select-none hover:text-gray-200 focus:text-gray-600 focus:text-opacity-50" onClick={()=>togglePassword()} icon={showPassword ? eyeOff : eye}/>
: null}
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
