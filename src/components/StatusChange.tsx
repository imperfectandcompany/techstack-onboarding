import { IonButton, IonContent, IonIcon, IonModal, IonPopover } from '@ionic/react'
import { checkmarkOutline } from 'ionicons/icons'
import { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import styles from './Avatar.module.css' // Import css modules stylesheet as styles

interface ContainerProps {}

const StatusChange = (props: any) => {
  const [isOpen, setIsOpen] = useState(false)
  const [viewIndex, setViewIndex] = useState(0)

  const handleStatusClick = () => {
    setIsOpen(!isOpen)
  }

  //swipable tab implementation
  const [tabIndex, setTabIndex] = useState(0)
  const handleTabChange = (value: number) => {
    setTabIndex(value)
  }

  const handleChangeIndex = (index: number) => {
    setTabIndex(index)
  }

  const printSheetDark = () => {
    return (
      <div>
        <div className='flex text-zinc-300 justify-center items-center'>
          <nav className='flex sm:flex-row text-center'>
            <div
              className={
                tabIndex == 0
                  ? 'border-zinc-500 border-b-2 text-zinc-500'
                  : 'text-zinc-600 transition'
              }
            >
              <button
                onClick={(e) => handleTabChange(0)}
                className='uppercase border py-4 px-6  hover:text-blue-500 border-b-2 font-medium border-blue-500'
              >
                Status
              </button>
            </div>
            <div
              className={
                tabIndex == 1
                  ? 'border-zinc-500 border-b-2 text-zinc-500'
                  : 'text-zinc-600 transition'
              }
            >
              <button
                onClick={(e) => handleTabChange(1)}
                className='uppercase border py-4 px-6  hover:text-blue-500 border-b-2 font-medium border-blue-500'
              >
                Activity
              </button>
            </div>
            <div
              className={
                tabIndex == 2
                  ? 'border-zinc-500 border-b-2 text-zinc-500'
                  : 'text-zinc-600 transition'
              }
            >
              <button
                onClick={(e) => handleTabChange(2)}
                className='uppercase border py-4 px-6  hover:text-blue-500 border-b-2 font-medium border-blue-500'
              >
                Views
              </button>
            </div>
          </nav>
        </div>
        <div className=' text-zinc-900'>
          <SwipeableViews
            className='text-zinc-300'
            index={tabIndex}
            onChangeIndex={handleChangeIndex}
          >
            <div className='flex text-zinc-300 bg-zinc-900'>
              <div className='w-full'>
                <div className='mt-5  flex flex-col  text-sm'>
                  <div className='flex justify-between border-t border-zinc-800 text-zinc-600 py-4 pl-6 pr-3 hover:bg-gray-500 transition duration-150'>
                    <div>
                      <a className='text-white'>
                        <img
                          src='https://miro.medium.com/max/512/1*nZ9VwHTLxAfNCuCjYAkajg.png'
                          alt=''
                          className='rounded-full h-6 shadow-md inline-block mr-2'
                        ></img>{' '}
                        Online
                      </a>
                    </div>
                  </div>
                  <div className='flex justify-between border-t border-zinc-800 text-zinc-600 py-4 pl-6 pr-3 hover:bg-gray-500 transition duration-150'>
                    <div>
                      <a className='text-white'>
                        <img
                          src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Location_dot_grey.svg/1200px-Location_dot_grey.svg.png'
                          alt=''
                          className='rounded-full h-6 shadow-md inline-block mr-2'
                        ></img>{' '}
                        Offline
                      </a>
                    </div>
                  </div>
                  <div className='flex justify-between border-t border-zinc-800 text-zinc-600 py-4 pl-6 pr-3 hover:bg-gray-500 transition duration-150'>
                    <div>
                      <a className='text-white'>
                        <img
                          src='https://www.seekpng.com/png/full/785-7852330_yellow-dot-png-transparent-circle-orange-png.png'
                          alt=''
                          className='rounded-full h-6 shadow-md inline-block mr-2'
                        ></img>{' '}
                        Away
                      </a>
                    </div>
                  </div>
                  <div className='flex justify-between border-t border-zinc-800 text-zinc-600 py-4 pl-6 pr-3 hover:bg-gray-500 transition duration-150'>
                    <div>
                      <a className='text-white'>
                        <img
                          src='https://www.mysafetysign.com/img/lg/I/do-not-enter-iso-sign-is-1067.png'
                          alt=''
                          className='rounded-full h-6 shadow-md inline-block mr-2'
                        ></img>{' '}
                        Do Not Disturb
                      </a>
                    </div>
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
                        ></img>{' '}
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
                        ></img>{' '}
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
                        ></img>{' '}
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
                        ></img>{' '}
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
                        ></img>{' '}
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
                        Each post is shown in it's entirety
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
        onIonModalWillDismiss={() => setIsOpen(false)}
      >
        <IonContent color='zinc' forceOverscroll={true} class={`${styles['modal-content']}`}>
          {printSheetDark()}
        </IonContent>
      </IonModal>
      <div onClick={() => handleStatusClick()}>{props.children}</div>
    </div>
  )
}

export default StatusChange
