import { IonAccordion, IonAccordionGroup, IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonPage, IonRouterLink, IonRouterOutlet, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import './Home.module.css';
import { menuController } from "@ionic/core/components";
import { arrowDownCircle, chevronDown, chevronForward, chevronUpCircleOutline } from 'ionicons/icons';
import { useRef } from 'react';

const Menu: React.FC = () => {





  return (
    <IonMenu side="start" contentId="main" menuId='mainmenu' type="push">


      <IonContent color="">
        <div className="sticky top-0 z-40 backdrop-blur-sm   bg-white/80 dark:bg-zinc-900/80 ">
          <div className="text-center p-6  border-b dark:border-zinc-800 sticky top-0" >

            <img
              className="h-24 w-24 rounded-full mx-auto"
              src="https://images.squarespace-cdn.com/content/v1/5efab2a9e0739376a2707d36/1598810232793-6NGA9FQD03HORBVVELHC/LinkedIn-Profile-Photography"
              alt="random person"
            />
            <p className="pt-2 text-lg font-semibold">User Name</p>
            <p className="text-sm dark:text-zinc-600 text-zinc-400">@username</p>
            <div className="mt-5">
              <IonRouterLink
                onClick={async () => await menuController.toggle()}
                routerLink='/profile'
                routerDirection='forward'
                className="border rounded-full py-2 px-4 text-xs dark:border-zinc-800 font-semibold text-zinc-600 dark:text-zinc-200"
              >
                View Profile
              </IonRouterLink>
            </div>
          </div>


        </div>

        <div className=" dark:bg-zinc-900 bg-white rounded overflow-hidden">




          <IonList>
            <IonListHeader lines='none' color="secondary">Feed</IonListHeader>
            <IonItem color="secondary">
              <IonLabel>Public</IonLabel>
              <IonCheckbox slot="end" checked={true} color="light" />
            </IonItem>
            <IonItem color="secondary">
              <IonLabel>Private</IonLabel>
              <IonCheckbox slot="end" color="light" />
            </IonItem>
          </IonList>
          <IonAccordionGroup>
            <IonAccordion value="lists" >
              <IonItem slot="header" color="secondary" lines="full">
                <IonLabel className="font-bold">Lists</IonLabel>
              </IonItem>
              <IonList slot="content" lines="full">
                <IonItem color="secondary">
                  <IonLabel>CustomList1</IonLabel>
                  <IonCheckbox slot="end" color="light" />
                </IonItem>
                <IonItem color="secondary">
                  <IonLabel>CustomList2</IonLabel>
                  <IonCheckbox slot="end" color="light" />
                </IonItem>
                <IonItem color="secondary">
                  <IonLabel>CustomList3</IonLabel>
                  <IonCheckbox slot="end" color="light" />
                </IonItem>
                <IonItem color="secondary">
                  <IonLabel>CustomList4</IonLabel>
                  <IonCheckbox slot="end" color="light" />
                </IonItem>
              </IonList>
            </IonAccordion>
          </IonAccordionGroup>

          <IonListHeader lines='none' color="light"></IonListHeader>


          <div className="border-b border-t dark:border-zinc-800 divide-y divide-zinc-100 dark:divide-zinc-800 ">
            <IonRouterLink onClick={async () => await menuController.toggle()} routerLink='/settings' routerDirection='forward' >
              <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-black flex items-center">
                <div className="text-zinc-900 dark:text-zinc-300">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex justify-between w-full items-end">
                  <div className="pl-3">
                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-300 leading-none">Find others</p>
                    <p className="text-xs text-gray-500">Follow/manage users</p>
                  </div>
                  <div>
                    <IonIcon icon={chevronForward} color="medium"></IonIcon>
                  </div>
                </div>
              </div>
            </IonRouterLink>


            <IonRouterLink onClick={async () => await menuController.toggle()} routerLink='/settings' routerDirection='forward' >
              <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-black flex items-center">
                <div className="text-zinc-900 dark:text-zinc-300">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex justify-between w-full items-end">
                  <div className="pl-3">
                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-300 leading-none">Account settings</p>
                    <p className="text-xs text-gray-500">Usage, billing, branding, teams</p>
                  </div>
                  <div>
                    <IonIcon icon={chevronForward} color="medium"></IonIcon>
                  </div>
                </div>
              </div>
            </IonRouterLink>


            <IonRouterLink onClick={async () => await menuController.toggle()} routerLink='/settings' routerDirection='forward' >
              <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-black flex items-center">
                <div className="text-zinc-900 dark:text-zinc-300">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex justify-between w-full items-end">
                  <div className="pl-3">
                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-300 leading-none">Personal settings</p>
                    <p className="text-xs text-gray-500">Username, profile name, notifications</p>
                  </div>
                  <div>
                    <IonIcon icon={chevronForward} color="medium"></IonIcon>
                  </div>
                </div>
              </div>
            </IonRouterLink>


            <IonRouterLink onClick={async () => await menuController.toggle()} routerLink='/settings' routerDirection='forward' >
              <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-black flex items-center">
                <div className="text-green-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="flex justify-between w-full items-end">
                  <div className="pl-3">
                    <p className="text-sm font-medium text-zinc-800  dark:text-zinc-300 leading-none">Apps &amp; integrations</p>
                    <p className="text-xs text-gray-500">Spotify, Instagram, Linkedin</p>
                  </div>
                  <div>
                    <IonIcon icon={chevronForward} color="medium"></IonIcon>
                  </div>
                </div>
              </div>
            </IonRouterLink>
          </div>
          <IonListHeader lines='none' color="light"></IonListHeader>
        </div>
        <div className="sticky bottom-0 z-40 mb-auto backdrop-blur-sm   bg-white/80 dark:bg-zinc-900/80 ">
            <a href="#" className="px-4 py-2  w-full hover:bg-gray-100 flex">
              <p className="text-sm font-medium text-zinc-800 dark:text-gray-400 leading-none">Update Status</p>
            </a>
            <a href="#" className="px-4 py-2  w-full hover:bg-gray-100 flex">
              <p className="text-sm font-medium text-zinc-800 dark:text-gray-400 leading-none">Update Activity</p>
            </a>
            <a href="#" className="px-4 py-2  w-full hover:bg-gray-100 flex">
              <p className="text-sm font-medium text-zinc-800 dark:text-gray-400 leading-none">Update Views</p>
            </a>
          </div>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
