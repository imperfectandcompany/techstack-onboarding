import {  IonHeader, IonMenuToggle, IonNote } from '@ionic/react'
import { useState } from 'react';
import { useParams } from 'react-router';
import './Toolbar.css'

const Toolbar: React.FC = () => {


    const [isMobileMenuOpen, setMobileMenu] = useState(false);

    const { name } = useParams<{ name: string; }>();
  
    const searchButton = document.querySelector('nav .desktop-nav .link-search');
    const closeButton = document.querySelector('.search-container .link-close');
    const desktopNav = document.querySelector('.desktop-nav');
    const searchContainer = document.querySelector('.search-container');
    const overlay = document.querySelector('.overlay');
  
  
    // Mobile Version
      overlay?.classList.add('show');

    const navContainer = document.querySelector('.nav-container');
    const searchBar = document.querySelector('.mobile-search-container .search-bar');
    const nav = document.querySelector('ion-header');
    const nav2 = document.querySelector('.nav-container nav');
    const searchInput = document.querySelector('.mobile-search-container input');
    const cancelBtn = document.querySelector('.mobile-search-container .cancel-btn');
  if(searchInput && searchBar && nav && desktopNav && navContainer){
    document.querySelector('.menu-search-button')?.addEventListener('click', () => {
        navContainer.classList.add('active');
        nav2?.classList.add('move-up');
    })
  }
  if(cancelBtn && searchBar && nav && desktopNav){
    cancelBtn.addEventListener('click', () => {
        navContainer?.classList.remove('active');
        nav2?.classList.remove('move-up');
    })
  }

    
  const printHeader = () => {
    return (

<>

      <div className="nav-container">
<nav>
<ul className="mobile-nav">
                <li className="flex items-center justify-between w-full">

                <IonHeader
        class='ion-no-border'
        id='header'
        className='transition-all 
    duration-1000
     top-0 z-40 backdrop-blur-sm bg-white/80 shadow-sm dark:bg-zinc-900/80
    '
      >
      <div className='flex items-center shadow-sm justify-between h-16 max-w-screen-xl px-4 mx-auto'>
        <div className='flex flex-1 w-0 lg:hidden'>
          <IonMenuToggle autoHide={true}>
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
        <div className='flex justify-end flex-1 w-0 lg:hidden'>
          <button
            className='p-2  menu-search-button text-zinc-300 bg-zinc-50/40 dark:bg-zinc-800/40 dark:hover:bg-zinc-900/40 rounded-full'
            type='button'
            onClick={() => document.querySelector('.search-bar')?.classList.add('active')}
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

    
            <ul className="desktop-nav">
                
            </ul>
        </nav>
      <div className="mobile-search-container ">
            <div className="link-search"></div>
            <div className="search-bar">
                <form action="">
                    <input type="text" placeholder="Search users, posts, lists"/>
                </form>
            </div>
            <span className="cancel-btn">Cancel</span>

            <div className="search-results">
                <h2>Search Results</h2>
                <ul>
                    <li>
                        <a href="#">Item One</a>
                    </li>
                    <li>
                    <a href="#">Item One</a>
                    </li>
                    <li>
                    <a href="#">Item One</a>
                    </li>
                    <li>
                    <a href="#">Item One</a>
                    </li>
                    <li>
                    <a href="#">Item One</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        <div className="overlay"></div>

</>
    )
  }
      return(<>
        {printHeader()}
        </>)
}

export default Toolbar
