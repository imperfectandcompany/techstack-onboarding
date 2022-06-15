import { IonContent, IonPage, ScrollDetail } from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'
import Toolbar from '../components/Toolbar/Toolbar.container'
import Menu from './Menu'
import './Signup.css'



const Timeline: React.FC = () => {
  let prevScrollpos = window.pageYOffset
  function onScroll(e: CustomEvent<ScrollDetail>) {
    const currentScrollPos = e.detail.scrollTop
    const toolbar = document.getElementById('toolbar')
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
        <ExploreContainer></ExploreContainer>
      </IonContent>
    </IonPage>
  )
}

export default Timeline
