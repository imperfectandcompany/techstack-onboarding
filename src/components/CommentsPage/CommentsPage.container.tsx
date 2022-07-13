import React from 'react';
import CommentsPageComponent from './CommentsPage.component';
import './CommentsPage.css'

// start of enforcing data types for comments, update in the future
export interface commentsObject {
  postId: number;
  isCommentsMenuClosed: boolean;
  setIsCommentsMenuClosed: (isCommentsMenuClosed: boolean) => void
}

interface IComments extends commentsObject {
  postId: number;
  isCommentsMenuClosed: boolean
  setIsCommentsMenuClosed: (isCommentsMenuClosed: boolean) => void
}


const CommentsPage: React.FC = ({postId, isCommentsMenuClosed, setIsCommentsMenuClosed}:IComments) => {


  return (
  <>
  <CommentsPageComponent postId={postId} isCommentsMenuClosed={isCommentsMenuClosed} setIsCommentsMenuClosed={setIsCommentsMenuClosed}></CommentsPageComponent>
  </>
  )
}

export default CommentsPage
