import { IonButton, IonContent, IonIcon, IonLabel, IonNote, IonPopover } from '@ionic/react';
import './ExploreContainer.css';
import { ellipsisHorizontal, ellipsisVertical, mail } from 'ionicons/icons';
import { useState } from 'react';
import MoreOptions from './MoreOptions';
import { LikeButton } from './LikeButton';
import Avatar from './Avatar';

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
    const trimmedContent = originalContent.slice(maxLength, originalContent.length);
    return (
      <>
        <span className="block mr-1"><span className="whitespace-pre-line">{content}{isCollapsed ? "" : "..."}</span><span className="whitespace-pre-line collapse collapse-horizontal" id="collapseWidthExample">{trimmedContent}</span></span>
        {originalContent.length > maxLength ?
          <button className="text-base font-bold transition text-stone-600 active:opacity-50 hover:text-stone-400 focus:text-stone-500 focus:outline-none" onClick={(e) => readMorePostHandler(e)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
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

  const printEmptyStateLight = () => {
    return (
      <div className="p-4">
        <div className="relative p-6 bg-white text-center border border-gray-200 rounded-lg">
          <img src={process.env.PUBLIC_URL + '/assets/icon/emptyfeedstate.svg'} className="w-64 sm:w-24 md:w-32 lg:w-36 my-8 flex mx-auto" alt="logo" />
          <h2 className="text-2xl text-black font-medium">
            It's pretty quiet here, ngl.
          </h2>
          <p className="mt-4 text-sm text-gray-500">
            Created posts will appear here, try creating one!
          </p>
          <a
            href=""
            className="inline-flex items-center px-5 py-3 mt-8 font-medium text-white bg-orange-600 rounded-lg hover:bg-blue-500"
          >
            Create a post
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-shrink-0 w-4 h-4 ml-3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <div className="flex flex-col text-white">
            ssadfewfwefew
          </div>
        </div>
      </div>
    )
  }

  const printEmptyStateDark = () => {
    return (
      <div className="p-4 bg-zinc-900 ">
        <div className="relative p-6 text-center border border-zinc-800 rounded-lg">
          <img src={process.env.PUBLIC_URL + '/assets/icon/emptyfeedstate.svg'} className="w-64 sm:w-24 md:w-32 lg:w-36 my-8 flex mx-auto" alt="logo" />
          <h2 className="text-2xl text-zinc-300 font-medium">
            It's pretty quiet here, ngl.
          </h2>
          <p className="mt-4 text-sm text-zinc-300">
            Created posts will appear here, try creating one!
          </p>
          <div>
            <a
              href=""
              className="inline-flex items-center px-7 py-3 mt-8 font-medium text-zinc-400 bg-zinc-800 rounded-lg hover:bg-blue-500"
            >
              Find others
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-4 h-4 ml-3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>          
          <div>
            <a
              href=""
              className="inline-flex items-center border-2 px-5 py-3 mt-4 mb-8 font-medium text-zinc-400 border-zinc-800 rounded-lg hover:bg-blue-500"
            >
              Create a post
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-4 h-4 ml-3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="flex flex-col mt-6 mb-4">
            <a href="#" className="inline-flex ml-4 items-center text-xs font-normal text-zinc-500 hover:underline dark:text-gray-400">
              <svg className="mr-2 w-3 h-3" aria-hidden="true" focusable="false" data-prefix="far" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path></svg>
              How can I find others I know?</a>
          </div>
        </div>
      </div>
    )
  }

  const printPost = () => {
    return (
      <div className="h-auto overflow-hidden p-6">
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
              {MoreOptions()}
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
            <button className="text-xs text-stone-400" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> View all 32 comments</button>
            <div className="fixed top-0 bottom-0 right-0 flex flex-col invisible max-w-full text-gray-700 transition duration-300 ease-in-out bg-white border-none shadow-sm outline-none offcanvas offcanvas-end bg-clip-padding w-96" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div className="z-0 flex items-center justify-between p-4 bg-stone-100 offcanvas-header">
                <h5 className="mb-0 font-semibold leading-normal offcanvas-title" id="offcanvasRightLabel">3 Comments</h5>
                <button type="button" className="box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                <button type="button" className="box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => (console.log("clicked"))}></button>

              </div>

              <div className="flex-grow p-4 overflow-y-auto offcanvas-body">

                {printOtherPost()}


              </div>
            </div>
            {/* More comments */}
            <div className="w-full">
            </div>
            {/* End More comments */}
          </div>
        </div>
      </div>
    )
  }

  const printDarkPost = () => {
    return (
      <div className="h-auto overflow-hidden">
        <div className="transition py-6 bg-white dark:bg-zinc-900 shadow-sm md:rounded md:px-6 md:py-2 lg:ml-44 lg:mr-44 xl:ml-96 xl:mr-96">
          <div className="px-6 pb-6 md:px-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {Avatar()}
                <div className="flex flex-col">
                  <div>
                    <div className="flex items-baseline">
                      <a className="inline-block mr-1 text-zinc-900 text-base dark:text-zinc-300" href="#">
                        Username
                      </a>
                      <span className="text-xs text-zinc-500 dark:text-zinc-300">25 minutes ago</span>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-300">Software Developer</p>
                </div>
              </div>
              {MoreOptions()}
            </div>
          </div>
          <div className="px-6 md:px-0">
            <p className="antialiased break-words text-zinc-500 dark:text-zinc-300 sm:subpixel-antialiased md:antialiased ">
              {trimTextDark("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud")}
            </p>
            <IonNote className="flex justify-end mt-3 text-sm transition dark:text-zinc-300 text-md dark:hover:text-gray-700">School '22, Studying Engineering 💻</IonNote>
          </div>
          <div className="px-6 pt-6 text-gray-600 md:px-0 ">
            {LikeButton(4)}

            <span className="text-xs text-stone-400">View all 32 comments</span>
          </div>

        </div>
      </div>
    )
  }

  const printOtherPost = () => {
    return (
      <>
        <article className="flex flex-col max-w-md mb-4 text-black bg-white break-inside break-inside-avoid bg-clip-border">

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
                    Barack Obama
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
                    Reply
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
                    John Cena
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
                    Reply
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
                    Joe Mama
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
                    Reply
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
  return (<div>
    <div className="space-y-4">
      {printEmptyStateDark()}
      {printDarkPost()}
      {printDarkPost()}
    </div>
  </div>
  );
};

export default ExploreContainer;