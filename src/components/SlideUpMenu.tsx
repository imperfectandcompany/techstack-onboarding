import { useCallback, useEffect } from 'react'
import './SlideUpMenu.css'
import ShareModal from './ShareModal'

export const disableContentScrollY = (contentEl: HTMLElement): boolean => {
  contentEl.style.setProperty('overflow', 'hidden')

  return true
}

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
      return
    }

    document.addEventListener('keydown', escFunction)
    return () => {
      document.removeEventListener('keydown', escFunction)
    }
  }, [props.isMenuOpen])

  return (
    <div className={props.isMenuOpen === true ? 'nav-container active dark' : 'nav-container'}>
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
            <ShareModal optionalParentfunction={props.setMenuVisibility}></ShareModal>
          </li>
          <div
            className='menu-icon-container mx-auto '
            onClick={() => props.setMenuVisibility(!props.isMenuOpen)}
          >
            <div className='menu-icon  mb-80 '>
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
