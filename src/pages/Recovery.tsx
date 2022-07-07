import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonProgressBar,
  IonButton,
  IonToolbar,
  IonRouterLink,
} from '@ionic/react'
import React, { useRef, useState } from 'react'
import { animationBuilder, pageTransition } from '../App'
import styles from './SignIn.module.css' // Import css modules stylesheet as styles
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory({forceRefresh:true})

interface passwordStrength {
  strength: string
  value: number
  eightChars: boolean
  match: boolean
}

const Recovery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [passwordStrength, setPasswordStrength] = useState<passwordStrength>({
    strength: 'Weak',
    value: 0,
    eightChars: false,
    match: false,
  })

  const emailRef = useRef(null)
  const codeRef = useRef(null)
  const resetRef = useRef(null)
  const resetCompleteRef = useRef(null)

  const pageMap = [
    emailRef,
    codeRef,
    resetRef,
    resetCompleteRef
  ]
  
  const resetPassword = () => {
    // Do stuff
  }

  const nextPage = async (
    enteringElement: { current: Element | Node | Element[] | Node[] | NodeList },
    leavingElement: { current: Element | Node | Element[] | Node[] | NodeList },
  ) => {
    await pageTransition({
      enteringEl: enteringElement.current,
      leavingEl: leavingElement.current,
      direction: 'forward',
    }).play()
    setCurrentPage(currentPage + 1)
  }

  const getPreviousPage = async (e: React.MouseEvent) => {

    if (currentPage > 0) {

      e.preventDefault()
      
      await pageTransition({
        enteringEl: pageMap[currentPage - 1].current,
        leavingEl: pageMap[currentPage].current,
        direction: 'backward',
      }).play()

      setCurrentPage(currentPage - 1)
    }
  }



  const EmailInput = () => {
    return (
      <IonContent ref={emailRef} color='secondary'>
        <img
          src={process.env.PUBLIC_URL + '/assets/icon/recovery.png'}
          className='w-64 sm:w-24 md:w-32 lg:w-36 my-8 flex mx-auto rounded-lg'
          alt='logo'
        />
        <p className='ion-text-center text-black dark:text-white font-bold mt-5 text-5xl'>
          It happens to everyone.
        </p>
        <p className='ion-text-center text-stone-500 font-medium m-6 mt-5 text-xl'>
          Lost access to your account? We can send you a code to reset your password through one of
          your linked devices.
        </p>
        <div className='ion-margin-horizontal'>
          <input
            id='default'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name='default'
            placeholder='Email or username'
            className='px-4 py-2 w-full text-stone-400 bg-stone-50 dark:bg-zinc-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600'
          />
        </div>
        <IonButton
          className='flex ion-margin-top ion-margin-horizontal t-8 font-bold'
          color='primary'
          fill='solid'
          onClick={() => nextPage(codeRef, emailRef)}
        >
          <div className='text-white'>Reset password</div>
        </IonButton>
      </IonContent>
    )
  }

  const CodeConfirm = () => {
    const handleChange = (nextId: string) => {
      document.getElementById(nextId)?.focus()
    }

    return (
      <IonContent ref={codeRef} color='secondary' style={{ display: 'none' }}>
        <img
          src={process.env.PUBLIC_URL + '/assets/icon/Lock.png'}
          className='w-64 sm:w-24 md:w-32 lg:w-36 my-8 flex mx-auto rounded-lg'
          alt='logo'
        />
        <p className='ion-text-center text-black dark:text-white font-bold mt-5 text-5xl'>One more thing...</p>
        <p className='ion-text-center text-stone-500 font-medium m-6 mt-9 mb-12 text-xl'>
          Protecting your account is our top priority. Please confirm your account by entering the
          authorization code sent to{' '}
          <span>
            <strong>{email}</strong>
          </span>
        </p>
        <div className='ion-text-center'>
          <input
            id='num1'
            type='number'
            onChange={(e) => handleChange('num2')}
            className='ion-text-center w-10 h-12 mr-8 text-stone-400 bg-stone-50 dark:bg-zinc-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600'
          ></input>
          <input
            id='num2'
            type='number'
            onChange={(e) => handleChange('num3')}
            className='ion-text-center w-10 h-12 mr-8 text-stone-400 bg-stone-50 rounded-lg dark:bg-zinc-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600'
          ></input>
          <input
            id='num3'
            type='number'
            onChange={(e) => handleChange('num4')}
            className='ion-text-center w-10 h-12 mr-8 text-stone-400 bg-stone-50 rounded-lg border dark:bg-zinc-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600'
          ></input>
          <input
            id='num4'
            type='number'
            className='ion-text-center w-10 h-12 mr-8 text-stone-400 bg-stone-50 rounded-lg border dark:bg-zinc-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600'
          ></input>
        </div>
        <div className='ion-margin-horizontal'>
          <IonButton
            className='flex ion-margin-top ion-margin-horizontal t-8 font-bold'
            color='primary'
            fill='solid'
            onClick={() => nextPage(resetRef, codeRef)}
          >
            <div className='text-white'>Verify</div>
          </IonButton>
        </div>
        <p className='ion-text-center text-stone-500 font-medium m-6 mt-9 mb-12 text-xl'>
          It may take a minute to receive your code. Haven&apos;t received it?{' '}
          <a>
            <strong>Resend Code</strong>
          </a>
        </p>
      </IonContent>
    )
  }

  const ResetPassword = () => {
    const strongPassword = new RegExp(
      '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})',
    )
    const mediumPassword = new RegExp(
      '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))',
    )

    const checkStrength = (password: string) => {

      setPassword(password)

      if (strongPassword.test(password)) {
        setPasswordStrength({
          ...passwordStrength,
          strength: 'Strong',
          value: 1,
          eightChars: password.length >= 8,
        })
      } else if (mediumPassword.test(password)) {
        setPasswordStrength({
          ...passwordStrength,
          strength: 'Medium',
          value: 0.55,
          eightChars: password.length >= 8,
        })
      } else {
        setPasswordStrength({
          ...passwordStrength,
          strength: 'Weak',
          value: 0.2,
          eightChars: password.length >= 8,
        })
      }

      if (password.length < 1) {
        setPasswordStrength({
          ...passwordStrength,
          value: 0
        })
      }

    }

    const verifyMatch = (newPassword: string) => {
      setPasswordStrength({ ...passwordStrength, match: newPassword == password })

      setNewPassword(newPassword)
    }

    return (
      <IonContent color='secondary' ref={resetRef} style={{ display: 'none' }}>
        <p className='ion-text-center text-black dark:text-white font-bold mt-5 text-5xl'>You&apos;re Valid</p>
        <img
          src={process.env.PUBLIC_URL + '/assets/icon/UnLock.png'}
          className='w-64 sm:w-24 md:w-32 lg:w-36 my-8 flex mx-auto rounded-lg'
          alt='logo'
        />

        <p className='ion-text-center text-stone-500 font-medium m-6 mt-5 text-xl'>
          Your password must be different from previous used passwords.
        </p>
        <div className='ion-margin-horizontal'>
          <input
            id='pass'
            type='password'
            value={password}
            onChange={(e) => checkStrength(e.target.value)}
            name='default'
            placeholder='Password'
            className='px-4 py-2 w-full text-stone-400 bg-stone-50 rounded-lg border dark:bg-zinc-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600'
          />
          <p className='ion-text-start text-stone-500 font-small m-2 mt-1 mb-6 text-s'>
            {passwordStrength.eightChars
              ? 'Meets length requirement'
              : 'Must be at least 8 characters'}
          </p>
          <input
            id='newPass'
            type='password'
            value={newPassword}
            onChange={(e) => verifyMatch(e.target.value)}
            name='default'
            placeholder='Password'
            className='px-4 py-2 w-full text-stone-400 bg-stone-50 rounded-lg border dark:bg-zinc-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600'
          />
          <p className='ion-text-start text-stone-500 font-small m-2 mt-1 mb-6 text-s'>
            {passwordStrength.match ? 'Both passwords match!' : 'Both passwords must match'}
          </p>

          <IonProgressBar value={passwordStrength.value}></IonProgressBar>
          <p className='ion-text-end font-small m-2 mt-1 mb-6 text-s'>
            {passwordStrength.strength}
          </p>
        </div>
        <IonButton
          className='flex ion-margin-top ion-margin-horizontal t-8 font-bold'
          color='primary'
          fill='solid'
          onClick={() => nextPage(resetCompleteRef, resetRef)}
        >
          <div className='text-white'>Change password</div>
        </IonButton>
      </IonContent>
    )
  }

  const ResetComplete = () => {
    return (
      <IonContent color='secondary' ref={resetCompleteRef} style={{ display: 'none' }}>
        <img
          src={process.env.PUBLIC_URL + '/assets/icon/Check.png'}
          className='w-64 sm:w-24 md:w-32 lg:w-36 my-8 flex mx-auto rounded-lg'
          alt='logo'
        />
        <p className='ion-text-center text-black dark:text-white font-bold mt-5 text-5xl'>You&apos;re done.</p>
        <p className='ion-text-center text-stone-500 font-medium m-6 mt-9 mb-12 text-xl'>
          You have successfully reset your password. Click the button to go home.
        </p>
        <div className='ion-margin-horizontal'>
          <IonRouterLink
            routerAnimation={animationBuilder}
            routerLink='/timeline'
            routerDirection='forward'
            onClick={()=>history.push('timeline')}
          >
            <IonButton
              className='flex ion-margin-top ion-margin-horizontal t-8 font-bold'
              color='primary'
              fill='solid'
            >
              <div className='text-white'>Home</div>
            </IonButton>
          </IonRouterLink>
        </div>
      </IonContent>
    )
  }

  const customBackButton = () => {

    return (
      <div onClick={(e) => getPreviousPage(e)}>
        {currentPage === 0 ? <IonBackButton defaultHref='/' /> : <IonBackButton disabled={true} />}
      </div>
    )
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='secondary' className={`${styles.toolbar}`}>
          <IonButtons slot='start'>
            {customBackButton()}
          </IonButtons>
          <IonTitle>Recovery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color='secondary'>
        {EmailInput()}
        {CodeConfirm()}
        {ResetPassword()}
        {ResetComplete()}
      </IonContent>
    </IonPage>
  )
}

export default Recovery
