import React,{   useState } from 'react';
import CommentsPageComponent from './CommentsPage.component';
import './CommentsPage.css'

// start of enforcing data types for comments, update in the future
export interface commentsObject {
  postId: number
}


const CommentsPage: React.FC = (props: commentsObject) => {


  const [isCommentsPageOpen, setCommentsPageOpen] = useState(false);


const [text, setText] = useState<string>('');


  return (
  <>
  <CommentsPageComponent postId={props.postId} ></CommentsPageComponent>
  </>
  )
}

export default CommentsPage
