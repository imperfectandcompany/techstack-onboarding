import {
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterLink,
  IonRow,
  IonText,
} from '@ionic/react'
import { mail } from 'ionicons/icons'
import { useState } from 'react'
import { animationBuilder } from '../App'
import PolicyContainer from '../components/PolicyContainer/PolicyContainer'
import * as PolicyConstants from '../constants/PolicyContainer'
import styles from './Home.module.css' // Import css modules stylesheet as styles

const Home: React.FC = () => {
  const [showPolicy, setShowPolicy] = useState(false)
  const [CurrentSection, setCurrentSection] = useState<PolicyConstants.Sections[]>([])
  const [CurrentTitle, setCurrentTitle] = useState('')
  const [CurrentSubTitle, setCurrentSubTitle] = useState('')

  return (
    <IonPage className={`${styles.bg}`}>
      <IonContent fullscreen={true}>
        <IonHeader>
          <IonGrid>
            <IonRow class='ion-margin-top space-x-4 text-3xl font-bold ion-justify-content-center ion-align-items-center mb-14 sm:text-6xl md:text-8xl lg:text-8xl'>
              <img
                src={process.env.PUBLIC_URL + '/assets/icon/icon.svg'}
                className='w-12 sm:w-24 md:w-32 lg:w-36'
                alt='logo'
              />
              <div className='text-white'>Postogon</div>
            </IonRow>
          </IonGrid>
        </IonHeader>
        <PolicyContainer
          showPolicy={showPolicy}
          setShowPolicy={setShowPolicy}
          Sections={CurrentSection}
          Title={CurrentTitle}
          Subtitle={CurrentSubTitle}
        />
        <div className='p-6'>
          <div className='flex flex-col justify-center'>
            <h1 className='inline-block mt-12 mb-20 text-3xl font-bold tracking-wider text-center text-white align-top animate__animated animate__pulse lg:text-6xl md:mt-24'>
              Be yourself here and relax.
            </h1>
            <div className='ion-margin-bottom flex flex-col  justify-center'>
              <IonButton
                className='flex font-bold'
                color='white'
                fill='outline'
                routerLink='/signin'
                routerDirection='forward'
              >
                <IonIcon slot='start' icon={mail} />
                Sign in with email
              </IonButton>
              <IonButton
                className='flex font-bold'
                color='white'
                fill='clear'
                routerLink='/signup'
                routerDirection='forward'
              >
                New account
              </IonButton>
            </div>
            <div className='mt-32'>
              <IonLabel className='ion-margin-top animate__animated animate__fadeInUp'>
                <IonText color='white'>
                  <p className='ion-text-center'>
                    By continuing, you agree to our{' '}
                    <button
                      className='underline transition cursor-pointer select-none focus:select-none hover:text-gray-100 focus:text-opacity-50'
                      onClick={() => {
                        setShowPolicy(true)
                        setCurrentSection(PolicyConstants.policy.tos.Sections)
                        setCurrentTitle(PolicyConstants.policy.tos.Title)
                        setCurrentSubTitle(PolicyConstants.policy.tos.Subtitle)
                      }}
                    >
                      Terms of Service
                    </button>
                    . We commit to protecting your data, read more about our{' '}
                    <button
                      className='underline transition cursor-pointer select-none focus:select-none hover:text-gray-100 focus:text-opacity-50'
                      onClick={() => {
                        setShowPolicy(true)
                        setCurrentSection(PolicyConstants.policy.cookie.Sections)
                        setCurrentSubTitle(PolicyConstants.policy.cookie.Subtitle)
                        setCurrentTitle(PolicyConstants.policy.cookie.Title)
                      }}
                    >
                      Cookie Policy
                    </button>{' '}
                    and{' '}
                    <button
                      className='underline transition cursor-pointer select-none focus:select-none hover:text-gray-100 focus:text-opacity-50'
                      onClick={() => {
                        setShowPolicy(true)
                        setCurrentSection(PolicyConstants.policy.privacy.Sections)
                        setCurrentSubTitle(PolicyConstants.policy.privacy.Subtitle)
                        setCurrentTitle(PolicyConstants.policy.privacy.Title)
                      }}
                    >
                      Privacy Policy
                    </button>
                    .
                  </p>
                </IonText>
              </IonLabel>
              <div className='animate__animated animate__fadeInUpBig ion-text-center mt-3'>
                <IonRouterLink
                  routerAnimation={animationBuilder}
                  className='font-semibold lg:text-2xl'
                  color='white'
                  routerLink='/recovery'
                  routerDirection='forward'
                >
                  Trouble getting in?
                </IonRouterLink>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Home
