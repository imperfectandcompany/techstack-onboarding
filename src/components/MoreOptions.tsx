import { IonIcon } from '@ionic/react'
import { ellipsisHorizontal } from 'ionicons/icons'
import { useCallback, useEffect } from 'react'
import './MoreOptions.css'

export const disableContentScrollY = (contentEl: HTMLElement): boolean => {
  contentEl.style.setProperty('overflow', 'hidden')

  return true
}

interface MoreOptionsProps {
  isOwner?: boolean
  setPostID(postId: number): number
  setMenuVisibility(value: boolean): boolean
  isMenuOpen: boolean
  id: number
}

const MoreOptions = (props: MoreOptionsProps) => {
  // added accessibility so menu is closed if it is active and the user hits the escape key.
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      props.setMenuVisibility(false)
    }
  }, [])

  const handleMenuClick = () => {
    // before opening the menu, set the id of the post we are opening it for
    props.setPostID(props.id)
    // open menu from the parent function
    props.setMenuVisibility(!props.isMenuOpen)
  }

  const toolbar = document.querySelector('.nav-container nav');


  useEffect(() => {

    // if menu is not open, do not add accessibility event listener for escape key
    if (!props.isMenuOpen) {
      if(toolbar){
        toolbar.classList.remove('menu-move-up');
      }      
      return
    }
    if(toolbar){
      toolbar.classList.add('menu-move-up');
    }
    document.addEventListener('keydown', escFunction)
    return () => {
      document.removeEventListener('keydown', escFunction)
    }
  }, [props.isMenuOpen])

  return (
    <div
      className='menu-icon-container justify-end'
      onClick={() => props.setMenuVisibility(!props.isMenuOpen)}
    >
      <div
        className={
          props.isMenuOpen ? 'text-gray-800 opacity-60 transition' : 'text-gray-700 transition'
        }
      >
        <IonIcon slot='start' size='small' icon={ellipsisHorizontal} />
      </div>
    </div>
  )
}

export default MoreOptions
