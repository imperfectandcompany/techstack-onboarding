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
export const history = createBrowserHistory({ forceRefresh: true })

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

    function handleSubmit() {
      const submitBtn = document.getElementById('submitButton') as HTMLButtonElement
      //  check to see if email is a value that exists
      if (email) {
        //  ensure we can find the submitButton
        if (submitBtn != null) {
          //  check if the submit btn is disabled
          if (submitBtn.disabled) {
            console.log('disabled')
            return;
          } else {
            console.log('not disabled yay')
            submitBtn.click();
          }
        }
      }
    }


    return (
      <IonContent ref={emailRef} color='secondary'>
        <object
          data={process.env.PUBLIC_URL + '/assets/icon/recovery.svg'}
          className='w-64 sm:w-24 md:w-32 lg:w-36 my-8 flex mx-auto rounded-lg'
        />
        <p className='ion-text-center text-black dark:text-white font-bold mt-5 text-5xl'>
          It happens to everyone.
        </p>
        <p className='ion-text-center text-zinc-500 dark:text-stone-500 font-medium m-6 mt-6  mb-10 text-'>
          Lost access to your account? We can send you a code to reset your password through one of
          your linked devices.
        </p>
        <div className='ion-margin-horizontal'>
          <input
            id='default'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' ? handleSubmit() : null}
            name='default'
            placeholder='Email or username'
            className='px-4 py-2 w-full transition text-zinc-500  focus:text-zinc-600 dark:text-zinc-500 placeholder-zinc-400 focus:placeholder-zinc-500 dark:placeholder-zinc-500 dark:focus:placeholder-zinc-400  dark:focus:text-zinc-400 bg-stone-50 rounded-lg border dark:bg-zinc-800 dark:border-black  border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600'
          />
        </div>
        <IonButton
          className='flex ion-margin-top transition ion-margin-horizontal t-8 font-bold'
          color='primary'
          disabled={!email}
          fill='solid'
          id='submitButton'
          onClick={() => nextPage(codeRef, emailRef)}
        >
          <div className='text-white'>Reset password</div>
        </IonButton>
      </IonContent>
    )
  }

  const CodeConfirm = () => {

    const [previousId, setPreviousId] = useState('num1');
    const [currentId, setCurrentId] = useState('num1');

    function isNumeric(value: string) {
      return /^-?\d+$/.test(value);
    }

    const handleChange = (nextId: string, event: {
      target: any; key: string;
    }) => {
      if (event.key === 'Backspace') {
        console.log('backspace')
      } else if (isNumeric(event.key)) {
        document.getElementById(nextId)?.focus()
      }
    }


    return (
      <IonContent ref={codeRef} color='secondary' style={{ display: 'none' }}>
        <object
          data={process.env.PUBLIC_URL + '/assets/icon/lock.svg'}
          className='w-48 h-36 sm:w-24 md:w-32 lg:w-36 my-8 flex mx-auto rounded-lg'
        />
        <p className='ion-text-center text-black dark:text-white font-bold mt-5 text-4xl'>
          One more thing...
        </p>
        <p className='ion-text-center text-stone-500 font-medium m-6  mb-12 text-lg'>
          Protecting your account is our top priority. Please confirm your account by entering the
          authorization code sent to{' '}
          <span>
            <strong>{email}</strong>
          </span>.
        </p>
        <div className=' flex justify-center '>
          <input
            id='num1'
            type='number'
            onKeyDown={(e) => handleChange('num2', e)}
            className='ion-text-center w-10 h-12 mr-8 transition text-zinc-500  focus:text-zinc-600 dark:text-zinc-500 placeholder-zinc-400 focus:placeholder-zinc-500 dark:placeholder-zinc-500 dark:focus:placeholder-zinc-400  dark:focus:text-zinc-400 bg-stone-50 rounded-lg border dark:bg-zinc-800 dark:border-black  border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600'
          ></input>
          <input
            id='num2'
            type='number'
            onKeyDown={(e) => handleChange('num3', e)}
            className='ion-text-center w-10 h-12 mr-8 transition text-zinc-500  focus:text-zinc-600 dark:text-zinc-500 placeholder-zinc-400 focus:placeholder-zinc-500 dark:placeholder-zinc-500 dark:focus:placeholder-zinc-400  dark:focus:text-zinc-400 bg-stone-50 rounded-lg border dark:bg-zinc-800 dark:border-black  border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600'
          ></input>
          <input
            id='num3'
            type='number'
            onKeyDown={(e) => handleChange('num4', e)}
            className='ion-text-center w-10 h-12 mr-8 transition text-zinc-500  focus:text-zinc-600 dark:text-zinc-500 placeholder-zinc-400 focus:placeholder-zinc-500 dark:placeholder-zinc-500 dark:focus:placeholder-zinc-400  dark:focus:text-zinc-400 bg-stone-50 rounded-lg border dark:bg-zinc-800 dark:border-black  border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600'
          ></input>
          <input
            id='num4'
            type='number'
            className='ion-text-center w-10 h-12 transition text-zinc-500  focus:text-zinc-600 dark:text-zinc-500 placeholder-zinc-400 focus:placeholder-zinc-500 dark:placeholder-zinc-500 dark:focus:placeholder-zinc-400  dark:focus:text-zinc-400 bg-stone-50 rounded-lg border dark:bg-zinc-800 dark:border-black  border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600'
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
        <p className='ion-text-center text-stone-500 font-medium m-6 mt-9 mb-12 text-md'>
          It may take a minute to receive your code. <span className='mt-6'>
            Haven&apos;t received it?{' '}
            <a className='text-orange-500 '>
              <strong>Resend Code</strong>
            </a>
          </span>
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
        <div>
          <object
            data={process.env.PUBLIC_URL + '/assets/icon/unlock.svg'}
            className='w-48 h-36 sm:w-24 md:w-32 lg:w-36 my-8 flex mx-auto rounded-lg'
          />
          <blockquote className="ion-text-center text-black dark:text-white font-bold mt-5 text-5xl">
            You&apos;re
            <span className={password === newPassword && passwordStrength.strength === 'Strong' ? 'ml-3 transition before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-600 dark:before:bg-orange-500 relative inline-block' : 'ml-3 transition before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-500/10 relative inline-block'}>
              <span className={password === newPassword && passwordStrength.strength === 'Strong' ? 'relative text-white dark:text-black' : 'relative text-black dark:text-white'}>
                Valid
              </span>
            </span>
          </blockquote>
          <p className='ion-text-center text-stone-500
   font-medium m-6 mt-5 text-lg'>
            Your password must be different from previous used passwords.
          </p>
          <div className='ion-margin-horizontal mt-10'>
            <input
              id='pass'
              type='password'
              value={password}
              onChange={(e) => checkStrength(e.target.value)}
              name='default'
              placeholder='Password'
              className='px-4 py-2 w-full transition text-zinc-700 focus:text-zinc-600 placeholder-zinc-600 focus:placeholder-zinc-500 bg-stone-50 rounded-lg border dark:bg-zinc-800 dark:border-black  border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600'
            />
            <p className='ion-text-start text-zinc-600 font-small m-2 mt-1 mb-6 text-s'>
              {password && passwordStrength.eightChars
                ? 'Meets length requirement!'
                : 'Must be at least 8 characters'}
            </p>
            <input
              id='newPass'
              type='password'
              value={newPassword}
              onChange={(e) => verifyMatch(e.target.value)}
              name='default'
              placeholder='Confirm Password'
              className='px-4 py-2  w-full transition text-zinc-700 focus:text-zinc-600 placeholder-zinc-600 focus:placeholder-zinc-500 bg-stone-50 rounded-lg border dark:bg-zinc-800 dark:border-black  border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600'
            />

            <p className='ion-text-start whitespace-pre transition text-zinc-600 font-small m-2 mt-1 mb-6 text-s'>
              {!password ? 'Initial password must exist' : !newPassword ? 'Confirmation password required' : passwordStrength.match && newPassword === password ? 'Both passwords match and meet strength' : newPassword === password ? 'Both passwords match but do not meet required strength' : 'Both passwords must match'}
            </p>

            <IonProgressBar value={passwordStrength.value}></IonProgressBar>
            <p className='ion-text-end font-small m-2 mt-1 mb-6 text-s dark:text-zinc-700'>
              {passwordStrength.strength}
            </p>
          </div>
          <IonButton
            className={password === newPassword && passwordStrength.strength === 'Strong' ? 'flex ion-margin-horizontal font-bold' : 'flex ion-margin-horizontal font-bold'}
            color='primary'
            fill='solid'
            disabled={password !== newPassword || passwordStrength.strength !== 'Strong'}
            onClick={() => nextPage(resetCompleteRef, resetRef)}
          >
            <div className="text-white">Change password</div>
          </IonButton>
        </div>
      </IonContent>
    )
  }

  const ResetComplete = () => {
    return (
      <IonContent color='secondary' ref={resetCompleteRef} style={{ display: 'none' }}>
        <div className="h-full flex flex-col justify-center">
          <div className="mb-16">
            <object
              data={process.env.PUBLIC_URL + '/assets/icon/checkmark.svg'}
              className='w-64 h-48 sm:w-24 md:w-32 lg:w-36 flex mx-auto rounded-lg'
            />
            <p className='ion-text-center text-black dark:text-white font-bold mt-5 text-5xl'>You&apos;re done.</p>
          </div>
          <p className='ion-text-center text-zinc-500 dark:text-white/25 font-medium px-6 mb-12 text-xl'>
            You have successfully reset your password. Click the button to go home.
          </p>
          <div className='ion-margin-horizontal'>
            <IonRouterLink
              routerAnimation={animationBuilder}
              routerLink='/timeline'
              routerDirection='forward'
              onClick={() => history.push('timeline')}
            >
              <IonButton
                className='flex ion-margin-top ion-margin-horizontal t-8 font-bold'
                color='primary'
                fill='solid'
              >
                <div className='text-white'>Get in</div>
              </IonButton>
            </IonRouterLink>
          </div>
        </div>
      </IonContent>
    )
  }

  const customBackButton = () => {

    return (
      <div onClick={(e) => getPreviousPage(e)}>
        {currentPage === 0 ? <IonBackButton defaultHref='/' color='primary' /> : <IonBackButton disabled={true} color='primary' />}
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
