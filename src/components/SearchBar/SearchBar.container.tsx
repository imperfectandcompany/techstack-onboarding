import { useState } from 'react';
import { useParams } from 'react-router';
import SearchBarComponent from './SearchBar.component';
import './SearchBar.css'



const SearchBar: React.FC = () => {


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
  const nav = document.querySelector('.nav-container');
  const nav2 = document.querySelector('ion-header');
  const cancelBtn = document.querySelector('.mobile-search-container .cancel-btn');

  
if(searchBar && nav2 && desktopNav && navContainer){
  document.querySelector('.menu-search-button')?.addEventListener('click', () => {
    nav2.classList.add('move-up')
      navContainer.classList.add('active');
  document.querySelector('.search-bar')?.classList.add('active');
  })
}

if(cancelBtn && searchBar && nav2 && desktopNav){
  cancelBtn.addEventListener('click', () => {
    nav2.classList.remove('move-up')
      navContainer?.classList.remove('active');
      document.querySelector('.search-bar')?.classList.remove('active');
  })
}




const [text, setText] = useState<string>();


  return (
  <SearchBarComponent setText={setText} text={text}></SearchBarComponent>
  )
}

export default SearchBar
