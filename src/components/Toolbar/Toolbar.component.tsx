import { IonHeader, IonMenuToggle, IonNote } from '@ionic/react'
import SearchBar from '../SearchBar/SearchBar.container';



const ToolbarComponent = () => {

    return (
        <div className="move-this-up">
            <ul className="mobile-nav">
                <li className="flex items-center justify-between w-full">
                    <IonHeader
                        id='header'
                        className='transition-all 
                    duration-1000
                     top-0 z-40 ion-no-border backdrop-blur-sm bg-white/80 shadow-sm dark:bg-zinc-900/80
                     '
                    >
                        <div className='flex items-center shadow-sm justify-between h-16 max-w-screen-xl px-4 mx-auto'>
                            <div className='flex flex-1 w-0 '>
                                <IonMenuToggle autoHide={true} menu='start'>
                                    <button
                                        className='p-2 text-zinc-300 bg-zinc-50/40 dark:bg-zinc-800/40 dark:hover:bg-zinc-900/40 transition cursor-pointer rounded-full'
                                        type='button'
                                    >
                                        <svg
                                            className='w-5 h-5'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                            ></path>
                                        </svg>
                                    </button>
                                </IonMenuToggle>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <span className='rounded-lg text-zinc-300'>
                                    <div className='flex items-center justify-between '>
                                        <div className='flex space-x-4'>
                                            <IonNote color=''>Public</IonNote>
                                            <IonNote color='medium'>Private</IonNote>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <div className='flex justify-end flex-1 w-0'>
                                <button
                                    className='p-2 menu-search-button text-zinc-300 bg-zinc-50/40 dark:bg-zinc-800/40 dark:hover:bg-zinc-900/40 rounded-full'
                                    type='button'
                                >
                                    <svg
                                        className='w-5 h-5'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            clipRule='evenodd'
                                            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                                            fillRule='evenodd'
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </IonHeader>
                </li>
            </ul>


            <div className='searchbar-stuff transition nav-container'>
                <ul className="desktop-nav">
                <SearchBar></SearchBar>
                </ul>
            </div>

        </div>
    )
}

export default ToolbarComponent