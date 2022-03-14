import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Postogon</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonButton className="flex font-bold" routerLink="/signin" routerDirection="forward" >
                Sign in with email
            </IonButton>
            <IonButton className="flex font-bold" routerLink="/signup" routerDirection="forward" >
                New account
            </IonButton>     
                          <IonText color="white">
                <p className="ion-text-center">
                  By continuing, you agree to our <button className="underline transition cursor-pointer select-none focus:select-none hover:text-gray-100 focus:text-opacity-50">Terms of Service</button>.
                  We commit to protecting your data, read more about our <span className="underline">Privacy Policy</span> and <span className="underline">Cookies Policy</span>.
                </p>
              </IonText>
              <IonButton className="flex font-bold" routerLink="/recovery" routerDirection="forward" >
                Troubling getting in?
            </IonButton>                       
      </IonContent>
    </IonPage>
  );
};

export default Home;
