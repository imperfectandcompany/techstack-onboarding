import { IonContent, IonItem, IonList, IonPage, ScrollDetail } from '@ionic/react'
import Post, { postObject } from '../components/Post/Post.container'
import Toolbar from '../components/Toolbar/Toolbar.container'
import Menu from './Menu'
import './Timeline.css'
import React, { useState } from 'react'
import PostEmptyState from '../components/Post/Post.emptyState'
import SlideUpMenu from '../components/SlideUpMenu'





const Timeline: React.FC = () => {

  let prevScrollpos = window.pageYOffset
  function onScroll(e: CustomEvent<ScrollDetail>) {
    const currentScrollPos = e.detail.scrollTop
    const header = document.getElementById('header')
    if (header && currentScrollPos > 80) {
      if (prevScrollpos > currentScrollPos) {
        header.style.top = '0px'
      } else {
        header.style.top = '-70px'
      }
      prevScrollpos = currentScrollPos
    }
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
      likes: 6,
    },
    {
      postId: 4,
      username: 'another',
      isOwner: false,
      likes: 9,
    },
    {
      postId: 5,
      username: 'another',
      isOwner: false,
      likes: 2,
    },
  ]


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
  const isOwner = (postID: number | undefined) => {
    // declare variables
    const currentUid = getUid()
    if(postID){
          // get the userID of the post the user is accessing,
    // set before the menu through the individual post component
    const posterUid = getPostUid(postID)
    // getUid returns the uid of the current user and matches to see if it equals the Uid of the poster
    return currentUid === posterUid
    } else {
      return undefined;
    }
  }
  const [isMenuOpen, setMenuVisibility] = useState(false)

  const [postId, setPostId] = useState<number | undefined>()

  return (
    <IonPage id='main'>
      <Menu></Menu>
      <Toolbar></Toolbar>
      <IonContent
        id='main'
        fullscreen={true}
        color='light'
        class='bg-red-500'
        scrollEvents={true}
        onIonScroll={(e) => onScroll(e)}
      >
        <div className="flex flex-col gap-2">
          {/* Renders EmptyPostState Container if posts aren't available */}
          {arrayOfPosts.length > 0 ?
            null
            :
            <div className="flex flex-col">
              <PostEmptyState></PostEmptyState>
            </div>
          }
          <div>
            <IonList class='gap-2 flex flex-col' lines='none'>
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

      
              {arrayOfPosts.map((item) => (
                <IonItem key={item.postId} className=" snap-start flex items-center justify-center post"  lines="none">
                  <Post postId={item.postId} username={item.username} isOwner={item.isOwner} likes={0} setPostId={setPostId} setMenuVisibility={setMenuVisibility} isMenuOpen={isMenuOpen}></Post>
                </IonItem>))}
            </IonList>
            <SlideUpMenu
                isOwner={isOwner(postId)}
                setMenuVisibility={setMenuVisibility}
                isMenuOpen={isMenuOpen}
            ></SlideUpMenu>
          </div>
        </div>

      </IonContent>
    </IonPage>
  )
}

export default Timeline
