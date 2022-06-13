import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet, setupIonicReact, createAnimation } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import Home from './pages/Home'
import 'tw-elements'
import 'animate.css/animate.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Recovery from './pages/Recovery'
import Timeline from './pages/Timeline'
import Menu from './pages/Menu'
import Profile from './pages/Profile'
import Settings from './pages/Setttings'
import Feedback from './pages/Feedback'
import Contact from './pages/Contact'

export function pageTransition(
  baseEl: null,
  opts: {
    enteringEl: Element | Node | Element[] | Node[] | NodeList
    leavingEl: Element | Node | Element[] | Node[] | NodeList
    direction: string
  },
) {
  const DURATION = 300

  const rootTransition = createAnimation().duration(DURATION).easing('cubic-bezier(0.3,0,0.66,1)')

  const enteringPage = createAnimation().addElement(opts.enteringEl).beforeClearStyles(['display'])

  const leavingPage = createAnimation().addElement(opts.leavingEl).beforeStyles({ display: 'none' })

  if (opts.direction === 'forward') {
    enteringPage.fromTo('transform', 'translateX(100%)', 'translateX(0)')
    leavingPage.fromTo('opacity', '1', '0.25')
  } else {
    leavingPage.fromTo('transform', 'translateX(0)', 'translateX(100%)')
    enteringPage.fromTo('opacity', '0.25', '1')
  }

  rootTransition.addAnimation(enteringPage)
  rootTransition.addAnimation(leavingPage)
  return rootTransition
}

export const animationBuilder = (
  baseEl: Element | Node | Element[] | Node[] | NodeList,
  opts: {
    enteringEl: Element | Node | Element[] | Node[] | NodeList
    leavingEl: Element | Node | Element[] | Node[] | NodeList
  },
) => {
  const enteringAnimation = createAnimation()
    .addElement(opts.enteringEl)
    .fromTo('opacity', 0, 1)
    .duration(250)

  const leavingAnimation = createAnimation()
    .addElement(opts.leavingEl)
    .fromTo('opacity', 1, 0)
    .duration(250)

  const animation = createAnimation().addAnimation(enteringAnimation).addAnimation(leavingAnimation)

  return animation
}

setupIonicReact()

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.body.classList.add('dark')
} else {
  document.body.classList.remove('dark')
}

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/signin'>
          <Signin />
        </Route>
        <Route exact path='/recovery'>
          <Recovery />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/settings'>
          <Settings />
        </Route>
        <Route exact path='/feedback'>
          <Feedback />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/timeline'>
          <Timeline />
          <Menu></Menu>
        </Route>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App
