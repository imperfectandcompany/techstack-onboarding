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
  IonProgressBar,
  IonRouterLink,
  IonTitle,
  IonToolbar,
  useIonToast,
} from '@ionic/react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import styles from './SignIn.module.css' // Import css modules stylesheet as styles
import { eye, eyeOff, informationCircle } from 'ionicons/icons'
import { animationBuilder } from '../App'

/*
    useState<string | undefined | null>("");
    because event.detail.value might be a string or it can be null or undefined
  */

function Signin() {
  const [email, setEmail] = useState<string | undefined | null>('')
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState<string | undefined | null>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [attempts, setAttempts] = useState(0)
  const [present, dismiss] = useIonToast()
  const [passwordfocused, setPasswordFocused] = useState<boolean>(false)

  const history = useHistory()

  function togglePassword() {
    setShowPassword(!showPassword)
  }

  // handle button click of login form
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setLoading(true)
    setLoading(false)
    history.push('/timeline')
    if (attempts >= 6) {
      setLoading(false)
      present({
        keyboardClose: true,
        translucent: true,
        duration: 1000,
        icon: informationCircle,
        cssClass: styles.toasts,
        buttons: [{ text: 'OK', handler: () => dismiss(), cssClass: styles.toasts }],
        message: 'Too many attempts, try later.',
      })
      return
    }
    setLoading(false)
  }

  return (
    <IonPage className={`${styles.bg}`}>
      <IonHeader>
        {loading ? (
          <IonProgressBar type='indeterminate'></IonProgressBar>
        ) : (
          <IonProgressBar type='indeterminate' class='invisible'></IonProgressBar>
        )}
        <IonToolbar color='none' className={`${styles.toolbar}`}>
          <IonButtons slot='start'>
            <IonBackButton text='' color='white' />
          </IonButtons>
          <IonTitle color='white'>Sign In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList className={`${styles.transparentbg}`}>
          <IonListHeader lines='full'>
            <IonLabel class='ion-text-center' color='white'>
              Welcome back!
            </IonLabel>
          </IonListHeader>
          <div className='flex flex-col'>
            <form
              id='login'
              className='flex flex-col'
              onSubmit={(e) => {
                handleLogin(e)
              }}
            >
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
              <input type='submit' hidden className={`${styles['submit-enter']}`} />

              <IonButton
                type='submit'
                size='large'
                className='flex mt-24 font-bold transition cursor-pointer select-none focus:select-none hover:text-gray-100 focus:text-opacity-50'
                color='white'
                fill='clear'
              >
                Continue
              </IonButton>
            </form>

            <IonRouterLink
              routerAnimation={animationBuilder}
              className='mt-8 text-center text-lg font-medium lg:text-2xl'
              color='white'
              routerLink='/recovery'
              routerDirection='forward'
            >
              Forgot Password
            </IonRouterLink>
          </div>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Signin
