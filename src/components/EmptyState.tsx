import { Button, ButtonCTA } from './common/ButtonCTA'
import PropTypes from 'prop-types'

// Reusable empty state component, can be used throughout the project
// consumes button.tsx and is currently consumed by ExploreContainer.tsx

// Requires you to provide a header, subtitle, and an image
// optionally accepts an array of buttons and helpFooter
// each button object passed requires style value to be either primary or secondary
// text for button is optional

// TO DO
// add a route to helper footer, turn it into an object with text and route props
// include route for button object

interface EmptyStateProps {
  header: string
  subtitle: string
  imageSrc: string
  Button?: Button[]
  helperFooter?: string
}

export const EmptyState: React.FC<EmptyStateProps> = (props) => {
  const printEmptyTimelineState = (props: EmptyStateProps) => {
    return (
      <div className='p-4 bg-white dark:bg-zinc-900 '>
        <div className='relative p-6 text-center border border-zinc-200 dark:border-zinc-800 rounded-lg'>
          <img
            src={props.imageSrc}
            className='animate__animated animate__fadeIn  w-64 sm:w-24 md:w-32 lg:w-36 my-8 flex mx-auto'
            alt='logo'
          />
          <h2 className='text-2xl text-zinc-700 dark:text-zinc-300 font-medium'>{props.header}</h2>
          <p className='mt-4 animate__animated animate__fadeIn animate__slower text-sm text-zinc-600 dark:text-zinc-300'>
            {props.subtitle}
          </p>
          <div className='mt-8 space-y-2 flex flex-col'>
            {/*
            We render out each button passed into the empty state.
            button style (buttonStyle.primary || buttonStyle.secondary enum)
            */}
            {props.Button
              ? props.Button.map((button, index) => (
                  <ButtonCTA key={index + 1} style={button.style} text={button.text}></ButtonCTA>
                ))
              : null}
          </div>

          {props.helperFooter ? (
            <div className='flex flex-col mt-8'>
              <a
                href='#'
                className='inline-flex ml-4 items-center text-xs font-normal text-zinc-500 hover:underline dark:text-gray-400'
              >
                <svg
                  className='mr-2 w-3 h-3'
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='far'
                  data-icon='question-circle'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path
                    fill='currentColor'
                    d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z'
                  ></path>
                </svg>
                {props.helperFooter}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className='space-y-2'>{printEmptyTimelineState(props)}</div>
    </div>
  )
}

EmptyState.propTypes = {
  header: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  helperFooter: PropTypes.string.isRequired,
  Button: PropTypes.array,
}

export default EmptyState
