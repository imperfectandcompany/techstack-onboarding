import React, { useState } from 'react';
import PostComponent from './Post.component';

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

// start of enforcing data types for posts, update in the future
export interface postObject {
  postId: number
  username: string
  isOwner: boolean
  post?: string
  likes: number
}

export interface postFunctions {
  postId: number
  username: string
  isOwner: boolean
  post?: string
  likes: number
}


interface IPost extends postObject, postFunctions {
  setPostId: (postId: number) => void
  setMenuVisibility: (isMenuOpen: boolean) => void
  isMenuOpen: boolean
}



const Post = (props: IPost) => {
  /* allows us to trim content of the post if it exceeds 140 characters. 
  The remaining content is stored in a temporary variable that is revealed if the user clicks 'show more'. */
  const trimText = (text: string) => {
    // configurable by us to define the max length until the read more button appears.
    const maxLength = 140
    // cleans up the string
    const originalContent = text.trim()
    // original content returns up to the maxLength characters defined above.
    const content = originalContent.slice(0, maxLength)
    // lets us know whether the post is collapsed or not.
    const [isPostCollapsed, setCollapsed] = useState(false)
    //  stopPropagation is reuqired so we don't accidentally click into the item/card if we decide to implement that later...
    function readMorePostHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.stopPropagation()
      setCollapsed(!isPostCollapsed)
    }
    return (
      <>
        <span className='mr-1 whitespace-pre-line'>
          {isPostCollapsed ? originalContent : content + '...'}
        </span>
        { originalContent.length > maxLength && ( <button
            className='text-base font-medium text-blue-400 capitalize transition active:opacity-50 hover:text-blue-400 focus:text-blue-500 focus:outline-none'
            onClick={(e) => readMorePostHandler(e)}
          >
            {isPostCollapsed ? 'show less' : 'show more'}
          </button> ) }        
      </>
    )
  }



  // this is set by the child const (printPost when the more options button is clicked)
  // this is necessary to be set on click prior to the SlideUpMenu popping up.
  // lets us know which post a user is opening the menu up for


  return (
    <div>
      <PostComponent post={props} setPostId={props.setPostId} setMenuVisibility={props.setMenuVisibility} isMenuOpen={props.isMenuOpen}
        trimText={trimText} isOwner={props.isOwner}/>
    </div>
  )
}

export default Post
