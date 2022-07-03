import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonList, IonModal, IonTitle, IonToolbar } from '@ionic/react'
import React, { CSSProperties, useState } from 'react'
import styles from './Avatar.module.css' // Import css modules stylesheet as styles
import { likes } from '../constants/LikeContainer'
import './LikeModal.css'
import { chevronDown } from 'ionicons/icons'



const LikeModal = () => {


  
  const [isOpen, setIsOpen] = useState(false)
  const [newLike, setNewLike] = useState(false)

  const handleDismiss = () => {
    //  set is open to default
    setIsOpen(false)
    // reset new post animation
    setNewLike(false)
  }

  const handleLikeButtonClick = () => {
    setIsOpen(!isOpen)

    // Eventually set trigger here to listen for new likes
    setTimeout(() => setNewLike(true), 3000)
  }

  const newPost = () => {
    return (
      <div
        key='new'
        className='newItem flex justify-between border-t dark:border-zinc-800 text-zinc-600 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150'
      >
        <div className=''>
          <a href='#'>
            <img
              src='https://codingforum.site/img/default/avatar9.jpg'
              alt=''
              className='rounded-full h-6 shadow-md inline-block mr-2'
            ></img>
            zeke77
          </a>
        </div>
        <div className='newLike'>
          <div className='flex h-4 flex-row-reverse space-x-3'>
            <div className='flex items-center  text-xs dark:text-stone-100'>
              <button className='like liked'>
                <span
                  className='like-icon like-icon-state'
                  aria-label='state'
                  x-text='state'
                  aria-live='polite'
                ></span>
              </button>
              <div className='text-stone-700 dark:text-stone-300'>
                <span className='text-lg font-bold transition'>1</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className='text-gray-500 text-xs'>3 seconds ago</span>
        </div>
      </div>
    )
  }

  const printSheet = () => {
    return (
      <IonList>
         <div className=' text-zinc-300'>
        <div className='w-full'>
          <div className='mt-5  flex flex-col  text-sm'>
          {newLike ? newPost() : <></>}
            {likes.map((like, index) => (
              <div
                key={like.user}
                style={{ '--animation-order': index } as CSSProperties}
                className='listItem flex justify-between border-t  dark:border-zinc-800 text-zinc-600 py-4 pl-6 pr-3 hover:dark:bg-gray-100 hover:bg-gray-200 transition duration-150'
              >
                <div>
                  <a href='#'>
                    <img
                      src={like.avatar}
                      alt=''
                      className='rounded-full h-6 shadow-md inline-block mr-2'
                    ></img>
                    {like.user}
                  </a>
                </div>
                <div>
                  <span className='text-gray-500 text-xs'>{like.timeSince}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </IonList>
    )
  }

  return (
    <div>
      <IonModal
        isOpen={isOpen}
        swipeToClose={true}
        canDismiss={true}
        className={`${styles.modal}`}
        onIonModalDidDismiss={() => handleDismiss()}
      >
           <IonHeader collapse='condense'>
        <IonToolbar className={`${styles['modal-toolbar']}`}>
          <IonButtons
            slot='start'
            className='cursor-pointer focus:cursor-default'
            onClick={() => handleDismiss()}
          >
            <IonButton
              expand='block'
              size='large'
              onClick={() => handleDismiss()}
              className='transition cursor-pointer select-none focus:select-none hover:text-gray-100 focus:text-opacity-50'
              color='primary'
              fill='clear'
            >
              <IonIcon slot='icon-only' color='dark' icon={chevronDown} />
            </IonButton>
          </IonButtons>
          <IonTitle color='dark'>Likes</IonTitle>
        </IonToolbar>
      </IonHeader>        
        <IonContent color='light' forceOverscroll={true} class={`${styles['modal-content']}`}>
      {printSheet()}
        </IonContent>
      </IonModal>
      <div onClick={() => handleLikeButtonClick()}>
        <div className='flex justify-end mt-2 mb-2'>
          <span className='text-xs text-stone-400'>
            Liked by lance53, airis, hanz99, and 39 others
          </span>
        </div>
      </div>
    </div>
  )
}

export default LikeModal
