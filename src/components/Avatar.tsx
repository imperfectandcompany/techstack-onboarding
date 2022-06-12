import { IonButton, IonContent, IonIcon, IonModal, IonPopover } from "@ionic/react";
import { close, closeCircle, closeCircleOutline, ellipsisHorizontal } from "ionicons/icons";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import styles from './Avatar.module.css'; // Import css modules stylesheet as styles

interface AvatarProps{
    username:string;
}

const Avatar = (props:AvatarProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleAvatarClick = () => {
        setIsOpen(!isOpen);
    }

    //swipable tab implementation
    const [tabIndex, setTabIndex] = useState(0);
    const handleTabChange = (value: number) => {
        setTabIndex(value);
    }

    const handleChangeIndex = (index: number) => {
        setTabIndex(
            index,
        );
    };

    const printSheetDark = () => {
        return (
            <div>
                <div className="flex text-zinc-300 justify-center items-center">
                    <nav className="flex sm:flex-row text-center">
                        <div className={tabIndex == 0 ? "border-zinc-500 border-b-2 text-zinc-500" : "text-zinc-600 transition"}>
                            <button onClick={(e) => handleTabChange(0)} className="uppercase border py-4 px-6  hover:text-blue-500 border-b-2 font-medium border-blue-500">
                                Profile
                            </button>
                        </div>
                        <div className={tabIndex == 1 ? "border-zinc-500 border-b-2 text-zinc-500" : "text-zinc-600 transition"}>
                            <button onClick={(e) => handleTabChange(1)} className="uppercase border py-4 px-6  hover:text-blue-500 border-b-2 font-medium border-blue-500">
                                Activity
                            </button>
                        </div>
                        <div className={tabIndex == 2 ? "border-zinc-500 border-b-2 text-zinc-500" : "text-zinc-600 transition"}>
                            <button onClick={(e) => handleTabChange(2)} className="uppercase border py-4 px-6  hover:text-blue-500 border-b-2 font-medium border-blue-500">
                                About
                            </button>
                        </div>
                    </nav>
                </div>
                <div className=" text-zinc-900">
                    <SwipeableViews className="text-zinc-300" index={tabIndex} onChangeIndex={handleChangeIndex}>
                        <div className="flex text-zinc-300 justify-center items-center">



                            <div className="flex w-full p-6 bg-zinc-900">
                                <div className="flex w-5/6">
                                    <div className="flex justify-start">
                                        <div className="flex">
                                            <div className="flex flex-row">
                                                <div className="w-10 h-10 font-bold text-center transition text-white bg-gray-700 bg-center border-4 border-gray-500 rounded-full cursor-pointer select-none hover:bg-gray-400">
                                                    <div className="my-1">?</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex ml-3">
                                            <div className="flex flex-col">
                                                <div className="flex flex-row items-baseline">
                                                    <h1 className="text-xl font-bold flex">{props.username}</h1>
                                                    <h2 className="ml-1 text-xs text-gray-400 transition hover:text-gray-500">@daiyaan</h2>
                                                </div>


                                                <div className="flex flex-col">
                                                    <div className="flex text-xs">
                                                        <div className="flex flex-row space-x-4">
                                                            <div><span className="font-bold mr-1">13</span>Followers</div>
                                                            <div><span className="font-bold mr-1">14</span>Following</div>
                                                        </div>
                                                    </div>
                                                    <div className="text-zinc-600 text-sm antialiased break-words sm:subpixel-antialiased md:antialiased mt-3">
                                                        <p className="text-xs text-zinc-300 font-semibold transition hover:text-gray-700">Daiyaan Ijaz</p>
                                                        <p className="text-xs text-zinc-300 transition hover:text-zinc-600">Live life now, we can only learn from mistakes</p>
                                                        <a href="" className="text-xs text-blue-400 transition hover:text-blue-500">https://www.linkedin.com/in/daiyaanijaz/</a>
                                                    </div>

                                                </div>
                                                <div className="my-5 mt-24 px-6">
                                                    <a href="#" className="text-zinc-300 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-zinc-800 hover:bg-black hover:text-white">Lock <span className="font-bold">Daiyaan</span></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="flex w-1/6 justify-end ">
                                    <div className="flex flex-col items-baseline">
                                        <div className="flex flex-row">

                                            <a href="../login" className="text-zinc-500 font-bold focus:outline-none">Follow</a>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                        <div className="flex text-zinc-300 bg-zinc-900">
                            <div className="w-full">
                                <div className="mt-5  flex flex-col  text-sm">
                                    <div className="flex justify-between border-t border-zinc-800 text-zinc-600 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150">
                                        <div>
                                            <a href="#" >
                                                <img src="https://codingforum.site/img/default/avatar9.jpg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2">
                                                </img>  Changed their profile picture
                                            </a></div>
                                        <div><span className="text-gray-500 text-xs">24 min ago</span></div>
                                    </div>
                                    <div className="flex justify-between border-t border-zinc-800 text-zinc-600 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150">
                                        <div>
                                            <a href="#" >
                                                <img src="https://codingforum.site/img/default/avatar9.jpg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2">
                                                </img>  Created a new post
                                            </a></div>
                                        <div><span className="text-gray-500 text-xs">42 min ago</span></div>
                                    </div>
                                    <div className="flex justify-between border-t border-zinc-800 text-zinc-600 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150">
                                        <div>
                                            <a href="#" >
                                                <img src="https://codingforum.site/img/default/avatar9.jpg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2">
                                                </img>  Updated his status
                                            </a></div>
                                        <div><span className="text-gray-500 text-xs">49 min ago</span></div>
                                    </div>
                                    <div className="flex justify-between border-t border-zinc-800 text-zinc-600 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150">
                                        <div>
                                            <a href="#" >
                                                <img src="https://codingforum.site/img/default/avatar9.jpg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2">
                                                </img>  Changed his signature
                                            </a></div>
                                        <div><span className="text-gray-500 text-xs">1 day ago</span></div>
                                    </div>
                                    <div className="flex justify-between border-t border-zinc-800 text-zinc-600 py-4 pl-6 pr-3 hover:bg-gray-100 transition duration-150">
                                        <div>
                                            <a href="#" >
                                                <img src="https://codingforum.site/img/default/avatar9.jpg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2">
                                                </img>  Followed @anotheruser
                                            </a></div>
                                        <div><span className="text-gray-500 text-xs">5 days ago</span></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex text-zinc-300 items-center mx-4">

                            <div className="text-zinc-600 text-sm mx-8 antialiased break-words sm:subpixel-antialiased md:antialiased mt-3">
                                <p className="text-xs text-zinc-300 font-semibold transition hover:text-gray-700">About</p>
                                <p className="text-xs text-zinc-300 transition hover:text-zinc-600">Joined: Sep 22, 2020</p>
                                <p className="text-xs text-zinc-300 transition hover:text-zinc-600">Likes: 1313</p>
                                <p className="text-xs text-zinc-300 transition hover:text-zinc-600">Location: United States</p>
                                <a href="" className="text-xs text-blue-400 transition hover:text-blue-500">Report User</a>
                            </div>

                        </div>
                    </SwipeableViews>
                </div >
            </div >
        )
    }


    return (
        <div>
            <IonModal
                handle={false}
                isOpen={isOpen}
                canDismiss={true}
                breakpoints={[0, 0.50]}
                initialBreakpoint={0.50}
                className={`${styles.modal}`}
                onIonModalWillDismiss={() => setIsOpen(false)}
            >
                <IonContent color="zinc" forceOverscroll={true} class={`${styles['modal-content']}`}>
                    {printSheetDark()}
                </IonContent>
            </IonModal>
            <div className={isOpen ? "text-gray-900 transition" : "text-gray-700 transition"}>
                <img src="https://codingforum.site/img/default/avatar9.jpg" onClick={() => handleAvatarClick()} id="trigger-button" className="bg-gray-300 cursor-pointer rounded-full h-12 w-12" alt="profile_picture" />
            </div>
        </div>
    );
};

export default Avatar;