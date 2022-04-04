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
            <button className="text-xs text-stone-400"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> View all 32 comments</button>
            <div className="fixed top-0 bottom-0 right-0 flex flex-col invisible max-w-full text-gray-700 transition duration-300 ease-in-out bg-white border-none shadow-sm outline-none offcanvas offcanvas-end bg-clip-padding w-96" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="z-0 flex items-center justify-between p-4 bg-stone-100 offcanvas-header">
    <h5 className="mb-0 font-semibold leading-normal offcanvas-title" id="offcanvasRightLabel">3 Comments</h5>
    <button type="button" className="box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    <button type="button" className="box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>(console.log("clicked"))}></button>
  
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
      <div className="h-auto overflow-hidden ">
        <div className="transition bg-black shadow-sm md:rounded md:px-6 md:py-2 lg:ml-44 lg:mr-44 xl:ml-96 xl:mr-96">
          <div className="px-6 py-3 md:px-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src="https://codingforum.site/img/default/avatar9.jpg" id="trigger-button" className="bg-gray-300 rounded-full h-14 w-14" alt="hyperandey" />

                <IonPopover trigger="trigger-button" arrow={false} alignment="center" side="right">
                  <IonContent class="max-w-2xl mx-auto">
<div className="max-w-2xl mx-auto">



                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
		<div className="flex justify-end px-4 pt-4">
			<button id="dropdownButton" data-dropdown-toggle="dropdown" className="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
</button>

			<div id="dropdown"
				className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
				<ul className="py-1" aria-labelledby="dropdownButton">
					<li>
						<a href="#"
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
					</li>
					<li>
						<a href="#"
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export
							Data</a>
					</li>
					<li>
						<a href="#"
							className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
					</li>
				</ul>
			</div>
		</div>
		<div className="flex flex-col items-center pb-10">
			<img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
			<h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h3>
			<span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
			<div className="flex mt-4 space-x-3 lg:mt-6">
				<a href="#"
					className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
					friend</a>
				<a href="#"
					className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">Message</a>
			</div>
		</div>
	</div></div>
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

  return (<div className="bg-gray-700">
<div className="flex space-x-2">
  <div>
    <a className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
      Link with href
    </a>
    <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      Button with data-bs-target
    </button>

    <div className="fixed top-0 bottom-0 left-0 flex flex-col invisible max-w-full text-gray-700 transition duration-300 ease-in-out bg-white border-none shadow-sm outline-none offcanvas offcanvas-start bg-clip-padding w-96" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="flex items-center justify-between p-4 offcanvas-header">
        <h5 className="mb-0 font-semibold leading-normal offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
        <button type="button" className="box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>(console.log("clicked"))}></button>
      </div>
      <div className="flex-grow p-4 overflow-y-auto offcanvas-body">
        <div>
          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
        </div>
        <div className="relative mt-4 dropdown">
          <button className="dropdown-toggle inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
            Dropdown button
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
            </svg>
          </button>
          <ul className="absolute z-50 hidden float-left py-2 m-0 mt-1 text-base text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding" aria-labelledby="dropdownMenuButton">
            <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100" href="#">Action</a></li>
            <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100" href="#">Another action</a></li>
            <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


    <div className="">
      {printPost()}
      {printPost()}
      {printPost()}
      {printPost()}
    </div>
  </div>
  );
};

export default ExploreContainer;