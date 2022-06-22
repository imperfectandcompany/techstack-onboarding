import { useCallback, useEffect } from 'react'
import './SlideUpMenu.css'
import ShareModal from './ShareModal'

interface MoreOptionsProps {
  isOwner?: boolean
  setMenuVisibility(isMenuOpen: boolean): boolean
  isMenuOpen: boolean
}

const SlideUpMenu = (props: MoreOptionsProps) => {
  // added accessibility so menu is closed if it is active and the user hits the escape key.
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      props.setMenuVisibility(false)
    }
  }, [])

  useEffect(() => {

    // if menu is not open, do not add accessibility event listener for escape key
    if (!props.isMenuOpen) {
      document.querySelector('ion-header')?.classList.remove('move-up')
      return
    }
    document.querySelector('ion-header')?.classList.add('move-up')


    document.addEventListener('keydown', escFunction)
    return () => {
      document.removeEventListener('keydown', escFunction)
    }
  }, [props.isMenuOpen])

  return (
    <div className={props.isMenuOpen === true ? 'nav-container active' : 'nav-container'}>
      <nav>
        <ul className='options-nav'>
          <li className='flex'></li>
        </ul>
        <ul className='active-nav'>
          <li>
            <a>Edit</a>
          </li>
          <li>
            <a>Insights</a>
          </li>
          <li>
            <a>Delete</a>
          </li>
          <li>
            <ShareModal menuToggleFunction={props.setMenuVisibility}></ShareModal>
          </li>
          <div
            className='menu-icon-container mx-auto '
            onClick={() => props.setMenuVisibility(!props.isMenuOpen)}
          >
            <div className='menu-icon'>
              <span className='line-1'></span>
              <span className='line-2'></span>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default SlideUpMenu
