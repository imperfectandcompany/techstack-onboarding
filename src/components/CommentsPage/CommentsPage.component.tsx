import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/react'
import './CommentsPage.css'



type CommentsComponentProps = {
    postId: number;
}


const CommentsPageComponent = ({postId}: CommentsComponentProps) => {

    

    const printComments = (props: CommentsComponentProps) => {
        return (
            <>
    <IonMenu side="end" swipeGesture={false} menuId="comments" contentId="comments" className="my-custom-menu">
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Comments: PosID ({postId}))</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
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