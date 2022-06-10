import { IonButton, IonContent, IonIcon, IonLabel, IonNote, IonPopover } from '@ionic/react';
import './ExploreContainer.css';
import { ellipsisHorizontal, ellipsisVertical, mail } from 'ionicons/icons';
import { useState } from 'react';
import MoreOptions from './MoreOptions';
import { LikeButton } from './LikeButton';
import Avatar from './Avatar';
import { Interface } from 'readline';
import EmptyState from './EmptyState';
import { buttonStyle } from './common/ButtonCTA';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {

  //start of enforcing data types for posts, update in the future
  interface postObject {
    username?: string;
    isOwner: boolean;
    post?: string;
  }

  //this data is passed to the post component
  const arrayOfPosts: postObject[] = [
    {
      username: "john",
      isOwner: true
    },
    {
      username: "joe",
      isOwner: false
    },
  ]

//this data is passed to the emptyState Component.
  const EmptyStateProps = {
    header: "It's pretty quiet here, ngl.",
    subtitle: "Created posts will appear here, try creating one!",
    imageSrc: process.env.PUBLIC_URL + '/assets/icon/emptyfeedstate.svg',
    Button: [
      {
        style: buttonStyle.primary,
        text: "Find Others"
      },
      {
        style: buttonStyle.secondary,
        text: "Create a Post"
      },        
    ],
    helperFooter:"How can I find others I know?"
  }

  const [isPostCollapsed, setCollapsed] = useState(false);

  function readMorePostHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    setCollapsed(!isPostCollapsed);
  }

  function trimText(text: string) {
    const maxLength = 140;
    const originalContent = text.trim();
    const content = originalContent.slice(0, maxLength);
    return (
      <>
        <span className="mr-1 whitespace-pre-line">{isPostCollapsed ? originalContent : content + "..."}</span>
        {originalContent.length > maxLength ? <button className="text-base font-medium text-blue-400 capitalize transition active:opacity-50 hover:text-blue-400 focus:text-blue-500 focus:outline-none" onClick={(e) => readMorePostHandler(e)}>{isPostCollapsed ? 'show less' : 'show more'}</button> : null}
      </>
    )
  }

  //this prints out the post with all the data.
  const printPost = (props: postObject) => {
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
                        {props.username}
                      </a>
                      <span className="text-xs text-zinc-500 dark:text-zinc-300">25 minutes ago</span>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-300">Software Developer</p>
                </div>
              </div>
              <MoreOptions isOwner={props.isOwner}></MoreOptions>
            </div>
          </div>
          <div className="px-6 md:px-0">
            <p className="antialiased break-words text-zinc-500 dark:text-zinc-300 sm:subpixel-antialiased md:antialiased ">
              {trimText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud")}
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

  return (
    <div>
      <div className="space-y-2">
        {EmptyState(EmptyStateProps)}
        {arrayOfPosts.map((post) => printPost(post))}
      </div>
    </div>
  );
};

export default ExploreContainer;