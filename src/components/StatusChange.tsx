import { IonContent, IonIcon, IonModal } from '@ionic/react'
import { checkmarkOutline } from 'ionicons/icons'
import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import styles from './Avatar.module.css' // Import css modules stylesheet as styles
import { status, getEveryStatusObject, getStatusObject } from '../constants/StatusContainer'

interface TabbedViewProps {
  children?: React.ReactElement[] | React.ReactElement
}

const objects = getEveryStatusObject()

const yeet = getStatusObject(status.away)

const StatusChange = (props: TabbedViewProps) => {
  const [currentStatus, setCurrentStatus] = useState(status.online.id)
  const [isOpen, setIsOpen] = useState(false)
  const [viewIndex, setViewIndex] = useState(0)

  const handleStatusClick = () => {
    setIsOpen(!isOpen)
  }

  const handleDismiss = () => {
    //  set is open to default
    setIsOpen(false)
    //  set index to 0 (default tab)
    return handleTabChange(0)
  }

  // swipable tab implementation
  const [tabIndex, setTabIndex] = useState(0)
  const handleTabChange = (value: number) => {
    setTabIndex(value)
  }

  const handleChangeIndex = (index: number) => {
    setTabIndex(index)
  }

  const printSheet = () => {
    return (
      <div>
        <div className='flex text-zinc-300 justify-center items-center'>
          <nav className='flex sm:flex-row text-center'>
            <div
              className={
                tabIndex == 0
                  ? 'border-zinc-300 dark:border-zinc-500 border-b-2 dark:text-white text-black'
                  : 'text-zinc-600 transition'
              }
            >
              <button
                onClick={(e) => handleTabChange(0)}
                className='uppercase border py-4 px-6 transition active:text-orange-500 dark:active:text-zinc-600 dark:active:bg-zinc-800 border-b-2 font-medium'
              >
                Status
              </button>
            </div>

            <div
              className={
                tabIndex == 1
                  ? 'border-zinc-300 dark:border-zinc-500 border-b-2 dark:text-white text-black'
                  : 'text-zinc-600 transition'
              }
            >
              <button
                onClick={(e) => handleTabChange(1)}
                className='uppercase border py-4 px-6 transition active:text-orange-500 dark:active:text-zinc-600 dark:active:bg-zinc-800 border-b-2 font-medium'
              >
                Activity
              </button>
            </div>

            <div
              className={
                tabIndex == 2
                  ? 'border-zinc-300 dark:border-zinc-500 border-b-2 dark:text-white text-black'
                  : 'text-zinc-600 transition'
              }
            >
              <button
                onClick={(e) => handleTabChange(2)}
                className='uppercase border py-4 px-6 transition active:text-orange-500 dark:active:text-zinc-600 dark:active:bg-zinc-800 border-b-2 font-medium'
              >
                Views
              </button>
            </div>
          </nav>
        </div>
        <div>
          <SwipeableViews
            className='text-zinc-300'
            index={tabIndex}
            onChangeIndex={handleChangeIndex}
          >
            <div className='flex  bg-zinc-200 dark:bg-zinc-900'>
              <div className='w-full '>
                <div className='mt-5  flex flex-col text-sm bg-white dark:bg-zinc-900'>
                <div onClick={() => setCurrentStatus(status.online.id)} className={'flex active:text-white dark:active:text-white border-gray-200 dark:border-zinc-800 border-y text-zinc-900 dark:text-zinc-300 items-center justify-between py-4 p-6  dark:active:'+status.online.bgColor + '   active:'+status.online.bgColor + '  hover:bg-zinc-100 dark:hover:bg-zinc-800 transition duration-150'}>
                    <div className="flex items-center ">
                    <div className={'mr-2 shadow-sm ' + status.online.bgColor + ' h-6 w-6 flex flex-row rounded-full'}>
                      </div>
                      <div>{status.online.title}</div>
                    </div>
                    {currentStatus === status.online.id ? <div className={'text-'+status.online.color+'-600 font-medium'}>Selected</div> : null}
                  </div>

                  <div onClick={() => setCurrentStatus(status.invisible.id)} className={'flex active:text-white dark:active:text-white border-gray-200 dark:border-zinc-800 border-y text-zinc-900 dark:text-zinc-300 items-center justify-between py-4 p-6 dark:active:bg-' + status.invisible.color + '-600 active:bg-' + status.invisible.color + '-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition duration-150'}>
                    <div className="flex items-center ">
                    <div className={'mr-2 shadow-sm ' + status.invisible.bgColor + ' h-6 w-6 flex flex-row rounded-full'}>
                      </div>
                      <div>{status.invisible.title}</div>
                    </div>
                    {currentStatus === status.invisible.id ? <div className={status.invisible.textColor +' font-medium'}>Selected</div> : null}
                  </div>

                  <div onClick={() => setCurrentStatus(status.away.id)} className={'flex active:text-white dark:active:text-white border-gray-200 dark:border-zinc-800 border-y text-zinc-900 dark:text-zinc-300 items-center justify-between py-4 p-6 dark:active:bg-' + status.away.color + '-600 active:bg-' + status.away.color + '-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition duration-150'}>
                    <div className="flex items-center ">
                    <div className={'mr-2 shadow-sm ' + status.away.bgColor + ' h-6 w-6 flex flex-row rounded-full'}>
                      </div>
                      <div>{status.away.title}</div>
                    </div>
                    {currentStatus === status.away.id ? <div className={'text-'+status.away.color+'-600 font-medium'}>Selected</div> : null}
                  </div>

                  <div onClick={() => setCurrentStatus(status.dnd.id)} className={'flex active:text-white dark:active:text-white border-gray-200 dark:border-zinc-800 border-y text-zinc-900 dark:text-zinc-300 items-center justify-between py-4 p-6 dark:active:bg-' + status.dnd.color + '-600 active:bg-' + status.dnd.color + '-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition duration-150'}>
                    <div className="flex items-center ">
                      <div className={'mr-2 shadow-sm ' + status.dnd.bgColor + ' h-6 w-6 flex flex-row rounded-full'}>
                      </div>
                      <div>{status.dnd.title}</div>
                    </div>
                    {currentStatus === status.dnd.id ? <div className={'text-'+status.dnd.color+'-600 font-medium'}>Selected</div> : null}
                  </div>
                </div>
              </div>
            </div>

            <div className='flex text-zinc-300 bg-zinc-900'>
              <div className='w-full'>
                <div className='mt-5  flex flex-col  text-sm'>
                  <div className='flex justify-between border-zinc-800 text-zinc-600 py-4 pl-6 pr-3'>
                    <div className='text-black bg-white w-full mr-4 p-3 rounded-lg hover:bg-gray-400 transition duration-150'>
                      Update Activity
                    </div>
                  </div>
                  <div className='flex justify-between border-t border-zinc-800 text-zinc-600 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150'>
                    <div>
                      <a href='#'>
                        <img
                          src='https://codingforum.site/img/default/avatar9.jpg'
                          alt=''
                          className='rounded-full h-6 shadow-md inline-block mr-2'
                        ></img>
                        Changed their profile picture
                      </a>
                    </div>
                    <div>
                      <span className='text-gray-500 text-xs'>24 min ago</span>
                    </div>
                  </div>
                  <div className='flex justify-between border-t border-zinc-800 text-zinc-600 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150'>
                    <div>
                      <a href='#'>
                        <img
                          src='https://codingforum.site/img/default/avatar9.jpg'
                          alt=''
                          className='rounded-full h-6 shadow-md inline-block mr-2'
                        ></img>
                        Created a new post
                      </a>
                    </div>
                    <div>
                      <span className='text-gray-500 text-xs'>42 min ago</span>
                    </div>
                  </div>
                  <div className='flex justify-between border-t border-zinc-800 text-zinc-600 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150'>
                    <div>
                      <a href='#'>
                        <img
                          src='https://codingforum.site/img/default/avatar9.jpg'
                          alt=''
                          className='rounded-full h-6 shadow-md inline-block mr-2'
                        ></img>
                        Updated his status
                      </a>
                    </div>
                    <div>
                      <span className='text-gray-500 text-xs'>49 min ago</span>
                    </div>
                  </div>
                  <div className='flex justify-between border-t border-zinc-800 text-zinc-600 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150'>
                    <div>
                      <a href='#'>
                        <img
                          src='https://codingforum.site/img/default/avatar9.jpg'
                          alt=''
                          className='rounded-full h-6 shadow-md inline-block mr-2'
                        ></img>
                        Changed his signature
                      </a>
                    </div>
                    <div>
                      <span className='text-gray-500 text-xs'>1 day ago</span>
                    </div>
                  </div>
                  <div className='flex justify-between border-t border-zinc-800 text-zinc-600 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150'>
                    <div>
                      <a href='#'>
                        <img
                          src='https://codingforum.site/img/default/avatar9.jpg'
                          alt=''
                          className='rounded-full h-6 shadow-md inline-block mr-2'
                        ></img>
                        Followed @anotheruser
                      </a>
                    </div>
                    <div>
                      <span className='text-gray-500 text-xs'>5 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex text-zinc-300 bg-zinc-900'>
              <div className='w-full'>
                <div className='mt-5  flex flex-col  text-sm'>
                  <div
                    className='flex justify-between border-t border-b border-zinc-800 text-zinc-600 py-4 pl-3 pr-3 hover:bg-gray-500 transition duration-150'
                    onClick={() => setViewIndex(0)}
                  >
                    <div>
                      <a className='text-white'>
                        <IonIcon
                          size='small'
                          color={viewIndex == 0 ? 'light' : 'bg-zinc-900'}
                          className='mr-2'
                          icon={checkmarkOutline}
                        ></IonIcon>
                        Normal
                      </a>
                    </div>
                    <div>
                      <span className='text-gray-100 text-xs'>Traditional Postogon Layout</span>
                    </div>
                  </div>
                  <div
                    className='flex justify-between border-t border-b  border-zinc-800 text-zinc-600 py-4 pl-3 pr-3 hover:bg-gray-500 transition duration-150'
                    onClick={() => setViewIndex(1)}
                  >
                    <div>
                      <a className='text-white'>
                        <IonIcon
                          size='small'
                          color={viewIndex == 1 ? 'light' : 'bg-zinc-900'}
                          className='mr-2'
                          icon={checkmarkOutline}
                        ></IonIcon>
                        Cozy
                      </a>
                    </div>
                    <div>
                      <span className='text-gray-100 text-xs'>Posts are condensed for brevity</span>
                    </div>
                  </div>
                  <div
                    className='flex justify-between border-t border-b border-zinc-800 text-zinc-600 py-4 pl-3 pr-3 hover:bg-gray-500 transition duration-150'
                    onClick={() => setViewIndex(2)}
                  >
                    <div>
                      <a className='text-white'>
                        <IonIcon
                          size='small'
                          color={viewIndex == 2 ? 'light' : 'bg-zinc-900'}
                          className='mr-2'
                          icon={checkmarkOutline}
                        ></IonIcon>
                        Expanded
                      </a>
                    </div>
                    <div>
                      <span className='text-gray-100 text-xs'>
                        Each post is shown in it&apos;s entirety
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwipeableViews>
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
        breakpoints={[0, 0.5]}
        initialBreakpoint={0.5}
        className={`${styles.modal}`}
        onIonModalDidDismiss={() => handleDismiss()}
      >
        <IonContent color='light' forceOverscroll={true} class={`${styles['modal-content']}`}>
          {printSheet()}
        </IonContent>
      </IonModal>
      <div onClick={() => handleStatusClick()}>{props.children}</div>
    </div>
  )
}

export default StatusChange
