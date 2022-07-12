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
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { eyeOff, eye, at } from 'ionicons/icons'
import { MutableRefObject, useRef, useState } from 'react'
import { animationBuilder, pageTransition } from '../App'
import styles from './SignIn.module.css' // Import css modules stylesheet as styles

const Signup: React.FC = () => {
  /*
    useState<string | undefined | null>("");
    because event.detail.value might be a string or it can be null or undefined
  */

  const [email, setEmail] = useState<string | undefined | null>('')
  const [password, setPassword] = useState<string | undefined | null>('')
  const [passwordfocused, setPasswordFocused] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [confirmPassword, setConfirmPassword] = useState<string | undefined | null>('')
  const [confirmPasswordfocused, setConfirmPasswordFocused] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
  const [userName, setUserName] = useState<string | undefined | null>('')
  const [number, setNumber] = useState<number | undefined | null>()

  function togglePassword() {
    setShowPassword(!showPassword)
  }

  function toggleConfirmPassword() {
    setShowConfirmPassword(!showConfirmPassword)
  }

  function handleSubmit() {
    console.log({ email })
    console.log({ password })
  }

  const nextPage = async (
    enteringElement: MutableRefObject<null>,
    leavingElement: MutableRefObject<null>,
  ) => {
    await pageTransition({
      enteringEl: enteringElement.current,
      leavingEl: leavingElement.current,
      direction: 'forward',
    }).play()
  }

  const signUpRef = useRef(null)
  const photoUploadRef = useRef(null)
  const userNameRef = useRef(null)
  const numberRef = useRef(null)

  const signUp = () => {
    return (
      <IonContent fullscreen ref={signUpRef}>
        <IonList className={`${styles.transparentbg}`}>
          <IonListHeader lines='full'>
            <IonLabel class='ion-text-center' color='white'>
              What&apos;s good!
            </IonLabel>
          </IonListHeader>
          <div className='flex flex-col '>
            <div className='mb-8 text-lg font-medium text-center text-white'>
              We’re so excited to have you here! Creating an account is the first step.
            </div>
            <IonItem>
              <IonLabel position='floating'>Email</IonLabel>
              <IonInput
                autocomplete='email'
                clearInput={true}
                inputmode='email'
                enterkeyhint='next'
                type='email'
                value={email}
                onIonChange={(e) => setEmail(e.detail.value)}
                required
              ></IonInput>
            </IonItem>
            <IonItem className='items-end'>
              <IonLabel position='floating'>Password</IonLabel>
              <IonInput
                onIonFocus={() => setPasswordFocused(true)}
                onIonBlur={() => setPasswordFocused(false)}
                id='passwordEnter'
                class='passwordEnter'
                autocomplete='current-password'
                clearOnEdit={true}
                inputmode='text'
                enterkeyhint='go'
                type={showPassword ? 'text' : 'password'}
                value={password}
                onIonChange={(e) => setPassword(e.detail.value)}
                required
              ></IonInput>
              {passwordfocused ? (
                <IonIcon
                  slot='end'
                  className='cursor-pointer select-none animate__animated animate__fadeIn focus:select-none hover:text-gray-200 focus:text-gray-600 focus:text-opacity-50'
                  onClick={() => togglePassword()}
                  icon={showPassword ? eyeOff : eye}
                />
              ) : null}
            </IonItem>
            <IonItem className='items-end'>
              <IonLabel position='floating'>Confirm Password</IonLabel>
              <IonInput
                onIonFocus={() => setConfirmPasswordFocused(true)}
                onIonBlur={() => setConfirmPasswordFocused(false)}
                id='confirmPasswordEnter'
                class='passwordEnter'
                autocomplete='current-password'
                clearOnEdit={true}
                inputmode='text'
                enterkeyhint='go'
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onIonChange={(e) => setConfirmPassword(e.detail.value)}
                required
              ></IonInput>
              {confirmPasswordfocused ? (
                <IonIcon
                  slot='end'
                  className='cursor-pointer select-none animate__animated animate__fadeIn focus:select-none hover:text-gray-200 focus:text-gray-600 focus:text-opacity-50'
                  onClick={() => toggleConfirmPassword()}
                  icon={showPassword ? eyeOff : eye}
                />
              ) : null}
            </IonItem>
            <div className='flex justify-center mt-6'>
              <IonButton
                expand='block'
                size='large'
                onClick={() => {
                  nextPage(photoUploadRef, signUpRef)
                }}
                className='flex mt-24 font-bold transition cursor-pointer select-none focus:select-none hover:text-gray-100 focus:text-opacity-50'
                color='white'
                fill='clear'
              >
                Continue
              </IonButton>
            </div>
          </div>
        </IonList>
      </IonContent>
    )
  }

  const photoUpload = () => {
    return (
      <IonContent fullscreen ref={photoUploadRef} style={{ display: 'none' }}>
        <p className='ion-text-center text-white font-bold m-8 pt-10 text-5xl'>Welcome!</p>
        <p className='ion-text-center text-white font-medium m-6 mt-5 text-md'>
          We need a little information from you to help other people get to know you. Let&apos;s
          start by picking a profile picture.
        </p>
        <img
          src={process.env.PUBLIC_URL + '/assets/icon/PhotoUpload.png'}
          className='w-64 sm:w-24 md:w-32 lg:w-36 my-8 flex mx-auto'
          alt='logo'
        />
        <div className='ion-margin-horizontal'></div>
        <IonButton
          className='flex ion-margin-top ion-margin-horizontal t-8 font-bold'
          color='dark'
          fill='outline'
        >
          <div className='text-white'>Upload Photo</div>
        </IonButton>
        <div className='flex justify-center mt-6'>
          <IonButton
            expand='block'
            size='large'
            onClick={() => {
              nextPage(userNameRef, photoUploadRef)
            }}
            className='flex mt-24 font-bold transition cursor-pointer select-none focus:select-none hover:text-gray-100 focus:text-opacity-50'
            color='white'
            fill='clear'
          >
            Continue
          </IonButton>
        </div>
      </IonContent>
    )
  }

  const userNameComponent = () => {
    return (
      <IonContent ref={userNameRef} style={{ display: 'none' }}>
        <p className='ion-text-center text-white font-bold m-8 pt-10 text-5xl'>Make it yours</p>
        <p className='ion-text-center text-white font-medium m-6 mt-5 text-md'>
          This one is mandatory. Pick a username. We&apos;ll leave the creativity to you.
        </p>
        <div className='ion-margin-horizontal'></div>
        <IonItem className='items-end'>
          <IonLabel position='floating'>UserName</IonLabel>
          <IonIcon
            slot='start'
            className='cursor-pointer select-none animate__animated animate__fadeIn focus:select-none hover:text-gray-200 focus:text-gray-600 focus:text-opacity-50'
            icon={at}
          />
          <IonInput
            id='userNameEnter'
            class='passwordEnter'
            clearOnEdit={true}
            inputmode='text'
            enterkeyhint='go'
            type='text'
            value={userName}
            onIonChange={(e) => setUserName(e.detail.value)}
            required
          ></IonInput>
        </IonItem>
        <p className='ion-text-end font-small m-6 text-s'>Taken</p>
        <div className='flex justify-center mt-6'>
          <IonButton
            expand='block'
            size='large'
            onClick={() => {
              nextPage(numberRef, userNameRef)
            }}
            className='flex mt-24 font-bold transition cursor-pointer select-none focus:select-none hover:text-gray-100 focus:text-opacity-50'
            color='white'
            fill='clear'
          >
            Continue
          </IonButton>
        </div>
      </IonContent>
    )
  }

  const numberEntry = () => {
    return (
      <IonContent ref={numberRef} style={{ display: 'none' }}>
        <p className='ion-text-center text-white font-bold m-8 pt-10 text-5xl'>My number is</p>

        <IonItem className='items-end'>
          <IonLabel position='floating'>Phone Number</IonLabel>
          <IonInput
            id='numberEntry'
            class='passwordEnter'
            clearOnEdit={true}
            inputmode='text'
            enterkeyhint='go'
            type='number'
            value={number}
            onIonChange={(e) => setNumber(e.detail.value)}
            required
          ></IonInput>
        </IonItem>

        <div className='ion-margin-horizontal'>
          <p className='ion-text-center text-white font-medium m-6 mt-10 pt-12 text-sm'>
            When you tap Continue, We will send a text with a verification code. Message and data
            rates may apply. The verified phone number can be used to login.{' '}
            <a className='underline'>Learn what happens when your number changes.</a>
          </p>
        </div>
        <div className='flex justify-center mt-6'>
          <IonRouterLink
            routerAnimation={animationBuilder}
            routerLink='/timeline'
            routerDirection='forward'
          >
            <IonButton
              expand='block'
              size='large'
              onClick={() => {
                handleSubmit()
              }}
              className='flex mt-24 font-bold transition cursor-pointer select-none focus:select-none hover:text-gray-100 focus:text-opacity-50'
              color='white'
              fill='clear'
            >
              Continue
            </IonButton>
          </IonRouterLink>
        </div>
      </IonContent>
    )
  }

  return (
    <IonPage className={`${styles.bg}`}>
      <IonHeader>
        <IonToolbar color='none' className={`${styles.toolbar}`}>
          <IonButtons slot='start'>
            <IonBackButton text='' color='white' />
          </IonButtons>
          <IonTitle color='white'>New Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {signUp()}
        {photoUpload()}
        {userNameComponent()}
        {numberEntry()}
      </IonContent>
    </IonPage>
  )
}

export default Signup
