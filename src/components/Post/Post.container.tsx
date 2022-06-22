import React, { useState } from 'react';
import PostComponent from './Post.component';


// start of enforcing data types for posts, update in the future
export interface postObject {
  postId: number
  username: string
  isOwner: boolean
  post?: string
  likes: number
}

const Post = (props: postObject) => {
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

  // this is set by the child const (printPost when the more options button is clicked)
  // this is necessary to be set on click prior to the SlideUpMenu popping up.
  // lets us know which post a user is opening the menu up for
  const [postId, setPostId] = useState<number>()


  const [isMenuOpen, setMenuVisibility] = useState(false)

  return (
    <div>
      <PostComponent post={props} setPostId={setPostId} setMenuVisibility={setMenuVisibility} isMenuOpen={isMenuOpen}
        trimText={trimText} />
    </div>
  )
}

export default Post
