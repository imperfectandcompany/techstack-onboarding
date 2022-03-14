import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonNote, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Signup.css';

const Timeline: React.FC = () => {

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLogin = () => {
    if (email) {
      console.log("flop");
    }
  }

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar   >        
                  <IonTitle>
                  <img
                  className="w-6 h-6 mx-auto"
                  src={process.env.PUBLIC_URL + '/assets/icon/icon.svg'}
                  alt="postogon logo" />
                  </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} >
      <IonHeader collapse="condense">
      <IonToolbar>
              <IonTitle  size="large" className="space-x-4">
              <IonNote color='white'>Public</IonNote><IonNote>Private</IonNote>
              </IonTitle>
            </IonToolbar>
          </IonHeader>
      <ExploreContainer></ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export default Timeline;