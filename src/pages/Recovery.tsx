import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonLabel, IonText, IonTitle, IonInput, IonProgressBar, IonButton, IonToolbar, IonRow } from '@ionic/react';
import React, { useState } from 'react';
import styles from './SignIn.module.css'; // Import css modules stylesheet as styles


const Recovery: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(1);
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [passwordStrength, setPasswordStrength] = useState<any>({strength: 'Weak', value: 0, eightChars: false, match: false})

  const resetPassword = () => {
    //Do stuff
  }

  const nextPage = () => {

    setCurrentPageIndex(currentPageIndex + 1)

  }
  const EmailInput = () => {

    return (
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
            <IonButton className="flex ion-margin-top ion-margin-horizontal t-8 font-bold" color="primary" fill="solid" onClick={nextPage}>
            <div className="text-white">Reset password</div>
           </IonButton>      
        </IonContent>
    )
  }

  const CodeConfirm = () => {
  
    const handleChange = (nextId : string) => {
      document.getElementById(nextId)?.focus()
    }
  
    return (
      <IonContent color="white">
          <img src={process.env.PUBLIC_URL + '/assets/icon/Lock.png'} className="w-64 sm:w-24 md:w-32 lg:w-36 my-8 flex mx-auto" alt="logo" />
              <p className="ion-text-center text-black font-bold mt-5 text-5xl">
              One more thing...
              </p>
              <p className="ion-text-center text-stone-500 font-medium m-6 mt-9 mb-12 text-xl">
              Protecting your account is our top priority. Please confirm your account by entering the
              authorization code sent to <span><strong>{email}</strong></span>
              </p> 
              <div className="ion-text-center">
                <input id="num1" type="number" onChange={e => handleChange('num2')} className="ion-text-center w-10 h-12 mr-8 text-stone-400 bg-stone-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"></input>
                <input id="num2" type="number" onChange={e => handleChange('num3')}className="ion-text-center w-10 h-12 mr-8 text-stone-400 bg-stone-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"></input>
                <input id="num3" type="number" onChange={e => handleChange('num4')}className="ion-text-center w-10 h-12 mr-8 text-stone-400 bg-stone-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"></input>
                <input id="num4" type="number" className="ion-text-center w-10 h-12 mr-8 text-stone-400 bg-stone-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"></input>
              </div>
            <div className="ion-margin-horizontal">
            
            <IonButton className="flex ion-margin-top ion-margin-horizontal t-8 font-bold" color="primary" fill="solid"  onClick={nextPage}>
              <div className="text-white">Verify</div>
            </IonButton>
            
            </div>
            <p className="ion-text-center text-stone-500 font-medium m-6 mt-9 mb-12 text-xl">
              It may take a minute to receive your code.
              Haven't received it? <a><strong>Resend Code</strong></a>
              </p> 
      </IonContent>
    )
  }
  

  const ResetPassword = () => { 
  
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
  
    const checkStrength = (password: string) => {
      if(strongPassword.test(password)) {
        setPasswordStrength({...passwordStrength, strength: 'Strong', value: 1, eightChars: password.length >= 8})
      } else if(mediumPassword.test(password)) {
        setPasswordStrength({...passwordStrength, strength: 'Medium', value: .55, eightChars: password.length >= 8})
      } else {
        setPasswordStrength({...passwordStrength, strength: 'Weak', value: .2, eightChars: password.length >= 8})
      }
  
      setPassword(password)
    }
  
    const verifyMatch = (newPassword: string) => {
      setPasswordStrength({...passwordStrength, match: newPassword == password})
  
      setNewPassword(newPassword)
    }
  
    return (
      <IonContent color="white">
          <p className="ion-text-center text-black font-bold mt-5 text-5xl">
              You're Valid
          </p>
          <img src={process.env.PUBLIC_URL + '/assets/icon/UnLock.png'} className="w-64 sm:w-24 md:w-32 lg:w-36 my-8 flex mx-auto" alt="logo" />
              <p className="ion-text-center text-stone-500 font-medium m-6 mt-5 text-xl">
              Your password must be different from previous used passwords.
              </p> 
            <div className="ion-margin-horizontal">
            <input
              id="pass"
              type="password"
              value={password} onChange={e => checkStrength(e.target.value!)}
              name="default"
              placeholder="Password"
              className="px-4 py-2 w-full text-stone-400 bg-stone-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
              <p className="ion-text-start text-stone-500 font-small m-2 mt-1 mb-6 text-s">
              {passwordStrength.eightChars ? 'Meets length requirement' : 'Must be at least 8 characters'}
              </p>
            <input
              id="newPass"
              type="password"
              value={newPassword} onChange={e => verifyMatch(e.target.value!)}
              name="default"
              placeholder="Password"
              className="px-4 py-2 w-full text-stone-400 bg-stone-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <p className="ion-text-start text-stone-500 font-small m-2 mt-1 mb-6 text-s" >
                {passwordStrength.match ? 'Both passwords match!' : 'Both passwords must match'}
            </p>  
  
            <IonProgressBar value={passwordStrength.value}></IonProgressBar>
            <p className="ion-text-end font-small m-2 mt-1 mb-6 text-s" >
                {passwordStrength.strength}
            </p>
            </div>
            <IonButton className="flex ion-margin-top ion-margin-horizontal t-8 font-bold" color="primary" fill="solid" onClick={nextPage}>
            <div className="text-white">Change password</div>
           </IonButton>      
        </IonContent>
    )
  }

  const ResetComplete = () => { 
    return (
      <IonContent color="white">
          <img src={process.env.PUBLIC_URL + '/assets/icon/Check.png'} className="w-64 sm:w-24 md:w-32 lg:w-36 my-8 flex mx-auto" alt="logo" />
              <p className="ion-text-center text-black font-bold mt-5 text-5xl">
              You're done.
              </p>
              <p className="ion-text-center text-stone-500 font-medium m-6 mt-9 mb-12 text-xl">
              You have successfully reset your password. Click the button to go home.
              </p> 
            <div className="ion-margin-horizontal">
            <IonButton className="flex ion-margin-top ion-margin-horizontal t-8 font-bold" color="primary" fill="solid"  routerLink="/timeline" routerDirection="root">
              <div className="text-white">Home</div>
            </IonButton>
            </div>
      </IonContent>
    )
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
        {currentPageIndex == 1 && EmailInput()}
        {currentPageIndex == 2 && CodeConfirm()}
        {currentPageIndex == 3 && ResetPassword()}
        {currentPageIndex == 4 && ResetComplete()}
      
    </IonPage>
  );
};

export default Recovery;
