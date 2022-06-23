import { buttonStyle } from '../common/ButtonCTA'
import EmptyState from '../EmptyState'

const PostEmptyState = () => {

    // this data is passed to the emptyState Component.
    const EmptyStateProps = {
      header: 'It\'s pretty quiet here, ngl.',
      subtitle: 'Created posts will appear here, try creating one!',
      imageSrc: process.env.PUBLIC_URL + '/assets/icon/emptyfeedstate.svg',
      Button: [
        {
          style: buttonStyle.primary,
          text: 'Find Others',
        },
        {
          style: buttonStyle.secondary,
          text: 'Create a Post',
        },
      ],
      helperFooter: 'How can I find others I know?',
    }

    
return EmptyState(EmptyStateProps)
}

export default PostEmptyState