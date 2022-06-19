import { IonItem, IonList, IonNote } from '@ionic/react'
import { useState } from 'react'
import MoreOptions from './MoreOptions'
import { LikeButton } from './LikeButton'
import Avatar from './Avatar'
import EmptyState from './EmptyState'
import { buttonStyle } from './common/ButtonCTA'
import styles from './ExploreContainer.module.css' // Import css modules stylesheet as styles
import PropTypes from 'prop-types'
import SlideUpMenu from './SlideUpMenu'


// all data here will be moved to a global centralized store in another
// branch / feature

/*
DATA FLOW <-- READ FOR UBIQUTIOUS LANGUAGE THROUGHOUGHT THIS COMPONENT
_________
Parent component (this compenent!) defines a function with a settable value [isMenuOpen, setMenu()]
The function and value is passed as a prop [isMenuOpen, setMenu()] to the child components (MoreOptions, SlideUpMenu!)
The child components then invokes the prop [setMenu()]
The parent function is then called and changes the value [isMenuOpen]
Then the parent component is re-rendered along with its children (prop isMenuOpen is re-rendered in the child components as well)
*/

const ExploreContainer: React.FC = () => {
  // start of enforcing data types for posts, update in the future
  interface postObject {
    postId: number
    username: string
    isOwner: boolean
    post?: string
    likes: number
  }

  // required for prop validation
  // visit https://thewebdev.info/2021/09/19/how-to-fix-the-react-eslint-error-missing-in-props-validation-when-developing-a-react-app/

  ExploreContainer.propTypes = {
    postId: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    isOwner: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
  }

  // this data is passed to the post component
  const arrayOfPosts: postObject[] = [
    {
      postId: 1,
      username: 'john',
      isOwner: true,
      likes: 7,
    },
    {
      postId: 2,
      username: 'joe',
      isOwner: true,
      likes: 5,
    },
    {
      postId: 3,
      username: 'jannet',
      isOwner: true,
      likes: 9,
    },
  ]

  // this data is passed to the emptyState Component.
  const EmptyStateProps = {
    header: 'It\'s pretty quiet here, ngl.',
    subtitle: 'Created posts will appear here, try creating one!',
    imageSrc: process.env.PUBLIC_URL + '/assets/icon/emptyfeedstate.svg',
    Button: [
      {
        style: buttonStyle.primary,
        text: 'Find Others',
      },
      {
        style: buttonStyle.secondary,
        text: 'Create a Post',
      },
    ],
    helperFooter: 'How can I find others I know?',
  }

  const [isPostCollapsed, setCollapsed] = useState(false)

  function readMorePostHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation()
    setCollapsed(!isPostCollapsed)
  }

  function trimText(text: string) {
    const maxLength = 140
    const originalContent = text.trim()
    const content = originalContent.slice(0, maxLength)
    return (
      <>
        <span className='mr-1 whitespace-pre-line'>
          {isPostCollapsed ? originalContent : content + '...'}
        </span>
        {originalContent.length > maxLength ? (
          <button
            className='text-base font-medium text-blue-400 capitalize transition active:opacity-50 hover:text-blue-400 focus:text-blue-500 focus:outline-none'
            onClick={(e) => readMorePostHandler(e)}
          >
            {isPostCollapsed ? 'show less' : 'show more'}
          </button>
        ) : null}
      </>
    )
  }

  const [isMenuOpen, setMenuVisibility] = useState(false)

  // this prints out the post with all the data.
  const printPost = (props: postObject) => {
    return (
      // key is necessary for each item in the list
      <IonItem key={props.postId} className={`${styles.post}`}>
        <div className='transition py-6 bg-white dark:bg-zinc-900 shadow-sm md:rounded md:px-6 md:py-2 lg:ml-44 lg:mr-44 xl:ml-96 xl:mr-96'>
          <div className='px-6 pb-6 md:px-0'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-4'>
                <Avatar username={props.username}></Avatar>
                <div className='flex flex-col'>
                  <div>
                    <div className='flex items-baseline'>
                      <a
                        className='inline-block mr-1 text-zinc-900 text-base dark:text-zinc-300'
                        href='#'
                      >
                        {props.username}
                      </a>
                      <span className='text-xs text-zinc-500 dark:text-zinc-300'>
                        25 minutes ago
                      </span>
                    </div>
                  </div>
                  <p className='text-sm text-zinc-500 dark:text-zinc-300'>Software Developer</p>
                </div>
              </div>
              <MoreOptions
                setPostID={setPostId}
                setMenuVisibility={setMenuVisibility}
                isMenuOpen={isMenuOpen}
                id={props.postId}
              ></MoreOptions>
            </div>
          </div>
          <div className='px-6 md:px-0'>
            <p className='antialiased break-words text-zinc-500 dark:text-zinc-300 sm:subpixel-antialiased md:antialiased '>
              {trimText(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
              )}
            </p>
            <IonNote className='flex justify-end mt-3 text-sm transition dark:text-zinc-300 text-md dark:hover:text-gray-700'>
              School &apos;22, Studying Engineering 💻
            </IonNote>
          </div>
          <div className='px-6 pt-6 text-gray-600 md:px-0 '>
            {LikeButton(props.likes)}
            <span className='text-xs text-stone-400'>View all 32 comments</span>
          </div>
        </div>
      </IonItem>
    )
  }

  // this is set by the child const (printPost when the more options button is clicked)
  // this is necessary to be set on click prior to the SlideUpMenu popping up.
  // lets us know which post a user is opening the menu up for
  const [postId, setPostId] = useState(1)

  // dummy functions, move to utilities for production when tied to backend
  // returns the user's iD
  const getUid = () => {
    return 1
  }
  // get userId of the post
  const getPostUid = (postID: number) => {
    // async function to backend api that returns the uid belonging to post id
    return 1
  }
  // checks to see if user is owner of the post
  const isOwner = (postID: number) => {
    // declare variables
    const currentUid = getUid()
    // get the userID of the post the user is accessing,
    // set before the menu through the individual post component
    const posterUid = getPostUid(postID)
    // getUid returns the uid of the current user and matches to see if it equals the Uid of the poster
    return currentUid === posterUid
  }

  return (
    <div className='space-y-2'>
      {/* 
      Prints out each post available to the user
      Contains multiple components: Avatar, likeButton, moreOptions

      //Avatar Component, currently only passed name of the poster -> data structure is a seperate feature

      likeButton passes the current like count of the post at the time of viewing
      increments by one onClick within likeButton Component.

      moreOptions passes a setMenu function and isMenuOpen function from the parent
      component (this), moreOptions is the child component. 
      
      To phrase it another way,
      there is no data stored inside moreOptions to identify if it is open or not
      the function that sets this data that is called from within the child component
      (moreOptions) is set from within THIS component, which is the parent component.
      This is done because it is also used for the SlideUpMenu which holds those same
      parameters and works in sync

      */}
      {EmptyState(EmptyStateProps)}
      <IonList class='h-auto overflow-auto space-y-2 bg-transparent' lines='none'>
        {arrayOfPosts.map((post) => printPost(post))}
      </IonList>
      {/* isOwner is necessary to identify whether the menu is from the perspective of someone viewing the post
      or from the perspective of the owner of the post (one who created the post)
      based on  this optional value within the slideup menu component, we can present the user
      two different views. one for editing viewing insides etc and another to report, share etc.
      
      for the menu as true if the post that is called upon
      belongs to the current user accessing the menu

       This component is 'activated' through the moreOptions Component within the printPost function.
       The component is then deactivated when the user clicks the x button that calls the setMenu function.
       The same function that is activates this menu through moreOption within the printPost function.

      <SlideUpMenu
        isOwner={isOwner(postId)}
        setMenuVisibility={setMenuVisibility}
        isMenuOpen={isMenuOpen}
      ></SlideUpMenu>


       */}
      <SlideUpMenu
        isOwner={isOwner(postId)}
        setMenuVisibility={setMenuVisibility}
        isMenuOpen={isMenuOpen}
      ></SlideUpMenu>
    </div>
  )
}

export default ExploreContainer
