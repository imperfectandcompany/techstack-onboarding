import { IonContent, IonPage, IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import MoodComponent from './MoodComponent';


const Mood: React.FC = () => {    


    return (
        <IonPage>
        <IonHeader class='ion-no-border'>
        <IonToolbar color='secondary'>
          <IonButtons slot='start'>
            <IonBackButton text='Back' color='primary' />
          </IonButtons>
          <IonTitle>Daily Mood</IonTitle>
        </IonToolbar>
      </IonHeader>
            <IonContent className='ion-padding'>
            <MoodComponent></MoodComponent>
            </IonContent>
        </IonPage>
    );



      
};

export default Mood;