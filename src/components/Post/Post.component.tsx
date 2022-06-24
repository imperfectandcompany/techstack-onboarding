import { IonNote } from '@ionic/react'
import Avatar from '../Avatar'
import { LikeButton } from '../LikeButton'
import MoreOptions from '../MoreOptions'
import { postObject } from './Post.container'

type PostComponentProps = {
    post: postObject
    setPostId: (postId: number) => void;
    setMenuVisibility: (isMenuOpen: boolean) => void;
    isMenuOpen: boolean
    trimText: (text: string) => JSX.Element
    isOwner: boolean
}

const PostComponent = ({ post, setPostId, setMenuVisibility, isMenuOpen, trimText }: PostComponentProps) => {

    return (<>

        <div className='transition py-6 bg-white dark:bg-zinc-900 shadow-sm md:rounded md:px-6 md:py-2 lg:ml-44 lg:mr-44 xl:ml-96 xl:mr-96'>
            <div className='px-6 pb-6 md:px-0'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-4'>
                        <Avatar username={post.username}></Avatar>
                        <div className='flex flex-col'>
                            <div>
                                <div className='flex items-baseline'>
                                    <a
                                        className='inline-block mr-1 text-zinc-900 text-base dark:text-zinc-300'
                                        href='#'
                                    >
                                        {post.username}
                                    </a>
                                    <span className='text-xs text-zinc-500 dark:text-zinc-300'>
                                        25 minutes ago
                                    </span>
                                </div>
                            </div>
                            <p className='text-sm text-zinc-500 dark:text-zinc-300'>Software Developer</p>
                        </div>
                    </div>
                    <MoreOptions
                        setPostID={setPostId}
                        setMenuVisibility={setMenuVisibility}
                        isMenuOpen={isMenuOpen}
                        id={post.postId}
                    ></MoreOptions>
                </div>
            </div>
            <div className='px-6 md:px-0'>
                <p className='antialiased break-words text-zinc-500 dark:text-zinc-300 sm:subpixel-antialiased md:antialiased '>
                    {trimText(
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
                    )}
                </p>
                <IonNote className='flex justify-end mt-3 text-sm transition dark:text-zinc-300 text-md dark:hover:text-gray-700'>
                    School &apos;22, Studying Engineering 💻
                </IonNote>
            </div>
            <div className='px-6 pt-6 text-gray-600 md:px-0 '>
                {LikeButton(post.likes)}
                <span className='text-xs text-stone-400'>View all 32 comments</span>
            </div>
        </div>

        <div className="relative w-full flex flex-col h-full gap-6 snap-y snap-mandatory overflow-y-auto ">
            {/* isOwner is necessary to identify whether the menu is from the perspective of someone viewing the post
      or from the perspective of the owner of the post (one who created the post)
      based on  this optional value within the slideup menu component, we can present the user
      two different views. one for editing viewing insides etc and another to report, share etc.
      
      for the menu as true if the post that is called upon
      belongs to the current user accessing the menu

       This component is 'activated' through the moreOptions Component within the printPost function.
       The component is then deactivated when the user clicks the x button that calls the setMenu function.
       The same function that is activates this menu through moreOption within the printPost function.

      <SlideUpMenu
        isOwner={isOwner(postId)}
        setMenuVisibility={setMenuVisibility}
        isMenuOpen={isMenuOpen}
      ></SlideUpMenu>
       */}
        </div>
    </>

    )
}

export default PostComponent