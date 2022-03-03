import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Texta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ExploreContainer></ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export default Home;
