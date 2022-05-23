import { IonButton, IonContent, IonHeader, IonItem, IonList, IonMenu, IonPage, IonRouterLink, IonRouterOutlet, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.module.css';
import { menuController } from "@ionic/core/components";

const Menu: React.FC = () => {
  return (
    <IonMenu side="start"  contentId="main" type="push">
      <IonContent>
      <div className="flex flex-col justify-between h-screen bg-zinc-900 text-zinc-300">
  <div className="p-4">
  <div className="mb-4">
      <div className="flex items-center justify-between w-full">
        <a className="flex items-center w-full px-4 py-2 transition duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-zinc-800 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
            <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
          </svg>
          <span className="ml-3 font-bold">Home</span>
        </a>
      </div>
    </div>
    <div className="flex flex-col mb-4">
      <div className="flex items-center justify-between w-full">
        <a className="flex items-center w-full px-4 py-2 transition duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-zinc-800 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
          </svg>
          <span className="ml-3 font-bold">Feed</span>
        </a>
        <button className="h-full px-4 py-2 ml-4 transition duration-300 ease-in-out cursor-pointer hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </button>
      </div>
      <ul className="w-full pl-6 mt-2 ml-6 text-sm border-l-2 border-zinc-800">
        <li className="mb-4 transition duration-300 ease-in-out hover:text-white">
          <a href="#">Public</a>
        </li>
        <li className="mb-4 transition duration-300 ease-in-out hover:text-white">
          <a href="#">Private</a>
        </li>
        <li className="transition duration-300 ease-in-out hover:text-white">
          <a href="#" className="flex items-center">
            Lists
            <span className="flex items-center justify-center w-8 h-8 ml-4 text-xs rounded-full bg-zinc-800">78</span>
          </a>
        </li>
      </ul>
    </div>
    <div className="mb-4">
      <div className="flex items-center justify-between w-full">
        <a className="flex items-center w-full px-4 py-2 transition duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-zinc-800 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-archive-fill" viewBox="0 0 16 16">
            <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
          </svg>
          <span className="ml-3 font-bold">Archive</span>
        </a>
      </div>
    </div>
  </div>
  <div className="flex items-center p-4 border-t-2 border-zinc-700">
    <img src="https://codingforum.site/img/default/avatar9.jpg" alt="" className="object-cover w-12 h-12 rounded-full" />
    <IonRouterLink color="white" onClick={async () => await menuController.toggle()} routerLink="/profile" routerDirection='forward' className="ml-2 text-sm font-semibold">Kristen Watson</IonRouterLink>
    <button className="ml-auto cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
      </svg>
    </button>
  </div>
</div>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
