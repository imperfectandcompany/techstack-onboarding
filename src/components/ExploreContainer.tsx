import { IonButton, IonContent, IonIcon, IonLabel, IonNote, IonPopover } from '@ionic/react';
import './ExploreContainer.css';
import { ellipsisHorizontal, ellipsisVertical, mail } from 'ionicons/icons';
import { useState } from 'react';
import MoreOptions from './MoreOptions';

interface ContainerProps { }



const ExploreContainer: React.FC<ContainerProps> = () => {







  const [isCollapsed, setCollapsed] = useState(false);

  function readMorePostHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    setCollapsed(!isCollapsed);
  }

  function trimText(text: string) {
    const maxLength = 140;
    const originalContent = text.trim();
    const content = originalContent.slice(0, maxLength);
    return (
      <>
        <span className="mr-1 whitespace-pre-line">{isCollapsed ? originalContent : content + "..."}</span>
        {originalContent.length > maxLength ?
          <button className="text-base text-blue-600 capitalize transition active:opacity-50 hover:text-blue-400 focus:text-blue-500 focus:outline-none" onClick={(e) => readMorePostHandler(e)}>
            {isCollapsed ? 'show less' : 'show more'}
          </button> : null}
      </>
    )
  }

  function trimTextDark(text: string) {
    const maxLength = 140;
    const originalContent = text.trim();
    const content = originalContent.slice(0, maxLength);
    return (
      <>
        <span className="mr-1 whitespace-pre-line">{isCollapsed ? originalContent : content + "..."}</span>
        {originalContent.length > maxLength ? <button className="text-base font-medium text-blue-400 capitalize transition active:opacity-50 hover:text-blue-400 focus:text-blue-500 focus:outline-none" onClick={(e) => readMorePostHandler(e)}>{isCollapsed ? 'show less' : 'show more'}</button> : null}
      </>
    )
  }

  const printPost = () => {


    return (
      <div className="h-auto overflow-hidden ">
        <div className="transition bg-white shadow-sm md:px-6 md:py-2 lg:ml-44 lg:mr-44 xl:ml-96 xl:mr-96">
          <div className="px-6 py-3 md:px-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src="https://codingforum.site/img/default/avatar9.jpg" className="bg-gray-300 rounded-full h-14 w-14" alt="hyperandey" />

                <div className="flex flex-col">
                  <div>
                    <div className="flex items-center">
                      <a className="inline-block mr-2 text-base font-bold text-slate-900" href="#">
                        Kristin Watson
                      </a>
                      <span className="text-sm text-slate-500">25 minutes ago</span>
                    </div>
                  </div>
                  <p className="text-slate-500 ">Software Developer</p>
                </div>
              </div>
              <div className='flex text-gray-600 transition hover:text-gray-900 hover:rounded-full hover:bg-gray-100'>
                <IonIcon slot="start" icon={ellipsisHorizontal} />
              </div>
            </div>
          </div>
          <div className="px-6 md:px-0">
            <p className="antialiased text-gray-700 break-words sm:subpixel-antialiased md:antialiased ">
              {trimText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud")}
            </p>
            <div></div>
            <IonNote className="flex justify-end mt-3 mb-3 text-sm text-gray-400 transition text-md hover:text-gray-500">School '22, Studying Engineering 💻</IonNote>
          </div>
          <div className="px-6 py-3 text-gray-600 md:px-0 ">
            <div className="flex flex-row-reverse space-x-3">
              <div className="flex items-center space-x-2 text-xs text-black">
                <svg
                  className=" fill-rose-600"
                  style={{ width: 24, height: 24 }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                </svg>
                <p className="text-lg font-bold ">1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const printDarkPost = () => {


    return (
      <div className="h-auto overflow-hidden ">
        <div className="transition bg-black shadow-sm md:rounded md:px-6 md:py-2 lg:ml-44 lg:mr-44 xl:ml-96 xl:mr-96">
          <div className="px-6 py-3 md:px-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src="https://codingforum.site/img/default/avatar9.jpg" id="trigger-button" className="bg-gray-300 rounded-full h-14 w-14" alt="hyperandey" />
           
                <IonPopover trigger="trigger-button" >
        <IonContent>

        <div className="bg-white rounded shadow">           
		   <div className="ml-2 mr-2">
                <p className="text-blue-600 ">@alizzz</p>
                <p className="mb-3 text-xs text-gray-400">Live life now, we can only learn from mistakes</p>                


					
	  <div className="flex items-center mt-4">

            <div className="mx-2">
                <p className="font-bold text-purple-900">289</p>
                <p className="text-purple-300">Posts</p>                
            </div>
            <div className="mx-2">
                <p className="font-bold text-purple-900">43.3k</p>
                <p className="text-purple-300">Followers</p>                
            </div>
            <div className="mx-2">
                <p className="font-bold text-purple-900">47%</p>
                <p className="text-purple-300">Activity</p>                
            </div>
            <div className="mx-4">
                <a href="./profile/0/" className="px-4 py-1 text-green-100 bg-green-400 rounded focus:outline-none">Profile
				</a>              
            </div>
        </div>
		            </div>
		</div>
        </IonContent>
      </IonPopover>


                <div className="flex flex-col">
                  <div>
                    <div className="flex items-baseline">
                      <a className="inline-block mr-1 text-base text-stone-300" href="#">
                        Username
                      </a>
                      <span className="text-xs text-stone-400">25 minutess ago</span>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400 ">Software Developer</p>
                </div>
              </div>
      {MoreOptions()}
            </div>
          </div>
          <div className="px-6 md:px-0">
            <p className="antialiased break-words text-stone-300 sm:subpixel-antialiased md:antialiased ">
              {trimTextDark("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud")}
            </p>
            <IonNote className="flex justify-end mt-3 text-sm transition text-stone-600 text-md hover:text-gray-700">School '22, Studying Engineering 💻</IonNote>
          </div>
          <div className="px-6 py-3 text-gray-600 md:px-0 ">
            <div className="flex flex-row-reverse space-x-3">
              <div className="flex items-center space-x-2 text-xs text-stone-100">
                <svg
                  className=" fill-rose-600"
                  style={{ width: 24, height: 24 }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                </svg>
                <p className="text-lg font-bold ">1</p>
              </div>
            </div>
            <span className="text-xs text-stone-400">View all 32 comments</span>            
          </div>
        </div>
      </div>
    )
  }

  const printOtherPost = () => {
    return (
      <>
        <article className="flex flex-col max-w-md mb-4 text-black bg-white break-inside break-inside-avoid rounded-xl bg-clip-border">
          <div className="flex items-center justify-between p-6">
            <div className="flex">
              <a className="inline-block mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-14 h-14"
                  src="https://randomuser.me/api/portraits/women/33.jpg"
                />
              </a>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <a className="inline-block mr-2 text-lg font-bold" href="#">
                    Cameron Williamson
                  </a>
                  <span>
                    <svg className="w-5 h-5 fill-blue-500" viewBox="0 0 24 24">
                      <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                  </span>
                </div>
                <div className="text-slate-500">Software Development Manager</div>
              </div>
            </div>
          </div>
          <p className="pb-6 pl-6 pr-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="p-6 bg-gradient-to-r from-cyan-500 to-blue-500">
            <h2 className="text-3xl font-extrabold text-white">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
            </h2>
          </div>
          <div className="p-6">
            <a className="inline-flex items-center" href="#">
              <span className="mr-2">
                <svg
                  className="fill-rose-600"
                  style={{ width: 24, height: 24 }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                </svg>
              </span>
              <span className="text-lg font-bold">68</span>
            </a>
          </div>
          <div className="px-6">
            <div className="relative">
              <input
                className="w-full pt-2 pb-2 pl-3 pr-20 font-medium rounded-lg h-11 bg-slate-100 placeholder:text-slate-600"
                type="text"
                placeholder="Write a comment"
              />
              <span className="absolute flex items-center -mt-3 right-3 top-2/4">
                <svg
                  className="mr-2"
                  style={{ width: 26, height: 26 }}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                  />
                </svg>
                <svg
                  className="fill-blue-500"
                  style={{ width: 24, height: 24 }}
                  viewBox="0 0 24 24"
                >
                  <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                </svg>
              </span>
            </div>
          </div>
          {/* Comments content */}
          <div className="p-6">
            {/* Comment row */}
            <div className="flex pb-4 media">
              <a className="mr-4" href="#">
                <img
                  className="w-12 h-12 rounded-full max-w-none"
                  src="https://randomuser.me/api/portraits/women/83.jpg"
                />
              </a>
              <div className="media-body">
                <div>
                  <a className="inline-block mr-2 text-base font-bold" href="#">
                    Kristin Watson
                  </a>
                  <span className="text-slate-500">25 minutes ago</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit seddo</p>
                <div className="flex items-center mt-2">
                  <a className="inline-flex items-center py-2 mr-3" href="#">
                    <span className="mr-2">
                      <svg
                        className="fill-rose-600"
                        style={{ width: 22, height: 22 }}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" />
                      </svg>
                    </span>
                    <span className="text-base font-bold">0</span>
                  </a>
                  <button className="px-4 py-2 font-medium transition rounded-lg hover:bg-slate-50">
                    Repply
                  </button>
                </div>
              </div>
            </div>
            {/* End comments row */}
            {/* comments row */}
            <div className="flex pb-4 media">
              <a className="inline-block mr-4" href="#">
                <img
                  className="w-12 h-12 rounded-full max-w-none"
                  src="https://randomuser.me/api/portraits/women/74.jpg"
                />
              </a>
              <div className="media-body">
                <div>
                  <a className="inline-block mr-2 text-base font-bold" href="#">
                    Melvin D. Goodman
                  </a>
                  <span className="text-slate-500">3 minutes ago</span>
                </div>
                <p>Dolor sit ameteiusmod consectetur adipiscing elit.</p>
                <div className="flex items-center mt-2">
                  <a className="inline-flex items-center py-2 mr-3" href="#">
                    <span className="mr-2">
                      <svg
                        className="fill-rose-600"
                        style={{ width: 22, height: 22 }}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                      </svg>
                    </span>
                    <span className="text-base font-bold">23</span>
                  </a>
                  <button className="px-4 py-2 font-medium transition rounded-lg hover:bg-slate-50">
                    Repply
                  </button>
                </div>
              </div>
            </div>
            {/* End comments row */}
            {/* comments row */}
            <div className="flex pb-4 media">
              <a className="inline-block mr-4" href="#">
                <img
                  className="w-12 h-12 rounded-full max-w-none"
                  src="https://randomuser.me/api/portraits/men/7.jpg"
                />
              </a>
              <div className="media-body">
                <div>
                  <a className="inline-block mr-2 text-base font-bold" href="#">
                    Erik Moore
                  </a>
                  <span className="text-slate-500">3 minutes ago</span>
                </div>
                <p>Dolor sit ameteiusmod consectetur adipiscing elit.</p>
                <div className="py-4">
                  <a className="flex" href="#">
                    <img
                      className="max-w-full rounded-lg"
                      src="https://images.pexels.com/photos/61381/pexels-photo-61381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    />
                  </a>
                </div>
                <div className="flex items-center mt-2">
                  <a className="inline-flex items-center py-2 mr-3" href="#">
                    <span className="mr-2">
                      <svg
                        className="fill-rose-600"
                        style={{ width: 22, height: 22 }}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                      </svg>
                    </span>
                    <span className="text-base font-bold">23</span>
                  </a>
                  <button className="px-4 py-2 font-medium transition rounded-lg hover:bg-slate-50">
                    Repply
                  </button>
                </div>
              </div>
            </div>
            {/* End comments row */}
            {/* More comments */}
            <div className="w-full">
              <a
                href="#"
                className="block w-full px-4 py-3 font-medium text-center transition ease-in-out delay-75 rounded-lg bg-slate-100 hover:bg-slate-200"
              >
                Show more comments
              </a>
            </div>
            {/* End More comments */}
          </div>
          {/* End Comments content */}
        </article>

      </>

    );
  }

  return (<div className="bg-gray-700">



    <div className="">
      {printDarkPost()}
      {printPost()}
      {printPost()}
      {printPost()}
    </div>
  </div>
  );
};

export default ExploreContainer;