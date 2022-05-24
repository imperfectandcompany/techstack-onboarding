import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonMenuToggle, IonNote, IonPage, IonTitle, IonToolbar, ScrollDetail } from '@ionic/react';
import { addOutline, ellipsisHorizontal, menu } from 'ionicons/icons';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Menu from './Menu';
import './Signup.css';

const Timeline: React.FC = () => {

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLogin = () => {
    if (email) {
      console.log("flop");
    }
  }

  const printHeader = () => {
    return(
      <div
      className="flex items-center shadow-sm bg-gray-50 justify-between h-16 max-w-screen-xl px-4 mx-auto"
    >
      <div className="flex flex-1 w-0 lg:hidden">
        <button className="p-2 text-gray-600 bg-gray-100 rounded-full" type="button">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <span className="w-20 h-10 bg-gray-200 rounded-lg"></span>
      </div>
      <div className="flex justify-end flex-1 w-0 lg:hidden">
        <button className="p-2 text-gray-500 bg-gray-100 rounded-full" type="button">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    )
  }

  const printHeaderDark = () => {
    return(
      <div
      className="flex items-center shadow-sm bg-zinc-900 justify-between h-16 max-w-screen-xl px-4 mx-auto"
    >
      <div className="flex flex-1 w-0 lg:hidden">
        <button className="p-2 text-zinc-300 bg-zinc-800 rounded-full" type="button">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <span className="rounded-lg text-zinc-300"><div className="flex items-center justify-between ">
<div className='flex space-x-4'>
<IonNote color=''>Public</IonNote>
              <IonNote color='medium'>Private</IonNote>
</div>
</div></span>
      </div>
      <div className="flex justify-end flex-1 w-0 lg:hidden">
        <button className="p-2 text-zinc-300 bg-zinc-800 rounded-full" type="button">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    )
  }  

  var prevScrollpos = window.pageYOffset;
  function onScroll(e: CustomEvent<ScrollDetail>) {
    var currentScrollPos = e.detail.scrollTop;
    const toolbar = document.getElementById("toolbar");
    const header = document.getElementById("header");
    if(toolbar && currentScrollPos > 80){
      if (prevScrollpos > currentScrollPos ) {
        toolbar.style.top = "0px";
      } else if(header?.classList.contains("header-collapse-condense-inactive")) {
        toolbar.style.top = "-44px";
      }
      prevScrollpos = currentScrollPos;      
    }
  }

  return (
    <IonPage>
      <IonContent id="main" fullscreen={true} color="primary" scrollEvents={true} onIonScroll={(e) => onScroll(e)} 
>
      <IonHeader collapse="condense"  class="ion-no-border ">
      <IonToolbar color='zinc'>
      {printHeaderDark()}
            </IonToolbar>
          </IonHeader>
    <IonMenuButton menu='first' type='button' color='primary'></IonMenuButton>
    <IonMenuToggle menu='first'>
          <IonButton>Toggle Menu</IonButton>
        </IonMenuToggle>     
      <ExploreContainer></ExploreContainer>


      </IonContent>

    </IonPage>
  );
};

export default Timeline;