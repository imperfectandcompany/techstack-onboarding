import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react'
import { LikeButton } from '../LikeButton';
import './CommentsPage.css'



type CommentsComponentProps = {
    postId: number;
}


const CommentsPageComponent = ({ postId }: CommentsComponentProps) => {



    const printComments = (props: CommentsComponentProps) => {
        return (
            <>
                <IonMenu side="end" swipeGesture={false} menuId="comments" contentId="comments" className="my-custom-menu">
                    <IonHeader>
                        <IonToolbar color="light">
                            <IonTitle>Comments: PosID ({postId}))</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <div className="pt-6">
                            <div className="media flex pb-4">
                                <a className="mx-4" href="#">
                                    <img className="rounded-full max-w-none w-12 h-12" src="data:image/jpeg;base64,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" />
                                </a>
                                <div className="media-body">
                                    <div>
                                        <a className="inline-block text-base font-bold mr-2" href="#">John Cena</a>
                                        <span className="text-slate-500 dark:text-slate-300 text-sm">2m ago</span>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                                        eiusmod.
                                    </p>
                                    <div className="mt-2 flex items-center">
                                    {LikeButton(8)}
                                        <button className="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                                            Reply
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="media flex pb-4">
                                <a className="inline-block mx-4" href="#">
                                    <img className="rounded-full max-w-none w-12 h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg" />
                                </a>
                                <div className="media-body">
                                    <div>
                                        <a className="inline-block text-base font-bold mr-2" href="#">Barack Obama</a>
                                        <span className="text-slate-500 dark:text-slate-300 text-sm">3m ago</span>
                                    </div>
                                    <p>
                                        Dolor sit ameteiusmod Dolor sit ameteiusmod
                                        😍😍✌🤪consectetur adipiscing elitconsectetur adipiscing
                                        elit.
                                    </p>
                                    <div className="mt-2 flex items-center">
                                    {LikeButton(2)}
                                        <button className="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                                            Reply
                                        </button>
                                    </div>
                                    <div className="mt-4">
                                        <div className="media flex pb-4">
                                            <a className="mr-4" href="#">
                                                <img className="rounded-full max-w-none w-10 h-10"
                                                    src="https://media.resources.festicket.com/www/artists/PlayboiCarti.jpeg" />
                                            </a>
                                            <div className="media-body">
                                                <div>
                                                    <a className="inline-block text-base font-bold mr-2" href="#">Playboi Carti</a>
                                                    <span className="text-slate-500 dark:text-slate-300 text-xs">5m ago</span>
                                                </div>
                                                <p>Dolor sit ameteiusmod csssonsectetur.</p>
                                                <div className="mt-2 flex items-center">
{LikeButton(6)}
                                                    <button className="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                                                        Reply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                    </IonContent>
                                </IonMenu>
                            </>
                            )
    }
                            return (<>
                                {printComments()}
                            </>)
}

                            export default CommentsPageComponent