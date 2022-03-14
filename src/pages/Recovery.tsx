import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Recovery.css';

const Recovery: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
      <IonBackButton defaultHref="/" />
    </IonButtons>          
          <IonTitle>Recovery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
                    
      </IonContent>
    </IonPage>
  );
};

export default Recovery;
