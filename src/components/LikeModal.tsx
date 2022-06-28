import { IonContent, IonModal } from '@ionic/react'
import React, { CSSProperties, useState } from 'react'
import styles from './Avatar.module.css' // Import css modules stylesheet as styles
import { likes } from '../constants/LikeContainer'
import './LikeModal.css'


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
            <div key='new'
                    className='newItem flex justify-between border-t border-zinc-800 text-zinc-600 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150'>
                        <div className=''>
                          <a href='#'>
                            <img
                              src={likes[0].avatar}
                              alt=''
                              className='rounded-full h-6 shadow-md inline-block mr-2'
                            ></img>
                            zeke77
                          </a>
                        </div>
                        <div className='newLike'>
                        <div className='flex h-4 flex-row-reverse space-x-3'>
        <div className='flex items-center  text-xs dark:text-stone-100'>
          <button
            className={ 'like liked'   }
          >
            <span
              className='like-icon like-icon-state'
              aria-label='state'
              x-text='state'
              aria-live='polite'
            >
            </span>
          </button>
          <div
            className={'text-stone-700 dark:text-stone-300'
              
            }
          >
            <span className='text-lg font-bold transition'>{1}</span>
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
            <div className='flex text-zinc-300'>
              <div className='w-full'>
                <div className='flex justify-center text-lg mt-2 dark:text-white text-black'>
                    Likes
                </div>
                <div className='mt-5  flex flex-col  text-sm'>
                    {newLike ? newPost() : <></>}
                    {likes.map((like, index) => (
                    <div key={like.user}
                    style={{ '--animation-order': index } as CSSProperties}
                    className='listItem flex justify-between border-t border-zinc-800 text-zinc-600 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150'>
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
        )
    }      

    return (
        <div>
          <IonModal
            handle={false}
            isOpen={isOpen}
            canDismiss={true}
            breakpoints={[0, .9]}
            initialBreakpoint={0.5}
            className={`${styles.modal}`}
            onIonModalDidDismiss={() => handleDismiss()}
          >
            <IonContent color='light' forceOverscroll={true} class={`${styles['modal-content']}`}>
              {printSheet()}
            </IonContent>
          </IonModal>
          <div onClick={() => handleLikeButtonClick()}>
                <div className='flex justify-end mt-2 mb-2'>
                    <span className='text-xs text-stone-400'>Liked by lance53, airis, hanz99, and 39 others</span>
                </div>
          </div>
        </div>
      )
}
    
export default LikeModal