import React,{  useState } from 'react';
import { useParams } from 'react-router';
import SearchBarComponent from './SearchBar.component';
import './SearchBar.css'



const SearchBar: React.FC = () => {


  const [isMobileMenuOpen, setMobileMenu] = useState(false);

  const { name } = useParams<{ name: string; }>();

  const desktopNav = document.querySelector('.desktop-nav');
  const overlay = document.querySelector('.overlay');


  // Mobile Version
    overlay?.classList.add('show');

  const navContainer = document.querySelector('.nav-container');
  const searchBar = document.querySelector('.mobile-search-container .search-bar');
  const nav = document.querySelector('.nav-container');
  const nav2 = document.querySelector('ion-header');
  const cancelBtn = document.querySelector('.mobile-search-container .cancel-btn');
  const inputRef = React.useRef<HTMLInputElement>(null);

  
if(searchBar && nav2 && desktopNav && navContainer){
  document.querySelector('.menu-search-button')?.addEventListener('click', () => {
    nav2.classList.add('move-up')
    if (inputRef.current) {
      inputRef.current.setFocus(), 100;
    }
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
  <SearchBarComponent setText={setText} inputRef={inputRef} text={text}></SearchBarComponent>
  )
}

export default SearchBar
