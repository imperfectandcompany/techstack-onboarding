import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import styles from './PolicyContainer.module.css' // Import css modules stylesheet as styles
import { chevronDown } from 'ionicons/icons'
import { ReactChild, ReactFragment, ReactPortal } from 'react'

interface Sections {
  heading: String
  description: String
}

function PolicyContainer({
  setShowPolicy,
  showPolicy,
  Sections,
  Title,
  Subtitle,
  loggedIn = false,
}: any) {
  const listSections = Sections.map((section: Sections, index: number) => (
    <div key={'listItem' + index + 1} className='space-y-2 text-white'>
      <div className='text-xl font-semibold md:text-xlg lg:text-3xl'>
        <IonText>
          <h1>{section.heading}</h1>
        </IonText>
      </div>
      <div className='text-sm md:text-md lg:text-lg'>
        <IonText>
          <p>{section.description}</p>
        </IonText>
      </div>
    </div>
  ))

  const loggedInListofSections = Sections.map((section: Sections, index: number) => (
    <div key={'listItem' + index + 1} className='space-y-2'>
      <div className='text-xl font-semibold md:text-xlg lg:text-3xl'>
        <IonText color='dark'>
          <h1>{section.heading}</h1>
        </IonText>
      </div>
      <div className='text-sm md:text-md lg:text-lg'>
        <IonText color='dark'>
          <p>{section.description}</p>
        </IonText>
      </div>
    </div>
  ))

  return loggedIn ? (
    <IonModal
      isOpen={showPolicy}
      swipeToClose={true}
      canDismiss={true}
      color='secondary'
      onDidDismiss={() => setShowPolicy(false)}
    >
      <IonHeader collapse='condense'>
        <IonToolbar className={`${styles['modal-toolbar']}`}>
          <IonButtons
            slot='start'
            className='cursor-pointer focus:cursor-default'
            onClick={() => setShowPolicy(false)}
          >
            <IonButton
              expand='block'
              size='large'
              onClick={() => setShowPolicy(false)}
              className='transition cursor-pointer select-none focus:select-none hover:text-gray-100 focus:text-opacity-50'
              color='primary'
              fill='clear'
            >
              <IonIcon slot='icon-only' color='dark' icon={chevronDown} />
            </IonButton>
          </IonButtons>
          <IonTitle color='dark'>{Title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent forceOverscroll={true} class={`${styles['modal-content']}`}>
        <div className='flex flex-col p-6 mb-24 space-y-6 leading-relaxed tracking-wide text-left dark'>
          <div>
            <p className='mb-6 text-base text-center md:text-xl lg:text-2xl'>{Subtitle}</p>
          </div>
          {loggedInListofSections}
        </div>
      </IonContent>
    </IonModal>
  ) : (
    <IonModal
      isOpen={showPolicy}
      swipeToClose={true}
      canDismiss={true}
      className={`${styles.modal}`}
      onDidDismiss={() => setShowPolicy(false)}
    >
      <IonHeader collapse='condense'>
        <IonToolbar className={`${styles['modal-toolbar']}`}>
          <IonButtons
            slot='start'
            className='cursor-pointer focus:cursor-default'
            onClick={() => setShowPolicy(false)}
          >
            <IonButton
              expand='block'
              size='large'
              onClick={() => setShowPolicy(false)}
              className='transition cursor-pointer select-none focus:select-none hover:text-gray-100 focus:text-opacity-50'
              color='white'
              fill='clear'
            >
              <IonIcon slot='icon-only' color='white' icon={chevronDown} />
            </IonButton>
          </IonButtons>
          <IonTitle color='white'>{Title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent forceOverscroll={true} class={`${styles['modal-content']}`}>
        <div className='flex flex-col p-6 mb-24 space-y-6 leading-relaxed tracking-wide text-left text-white'>
          <div>
            <p className='mb-6 text-base text-center md:text-xl lg:text-2xl'>{Subtitle}</p>
          </div>
          {listSections}
        </div>
      </IonContent>
    </IonModal>
  )
}

export default PolicyContainer
