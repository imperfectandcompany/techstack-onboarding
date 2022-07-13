import { IonAlert, IonAvatar, IonIcon, IonImg, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonToast } from '@ionic/react';
import React, {  useState } from 'react';
import Picker from 'emoji-picker-react';
import './Mood.css'
import { trashBin } from 'ionicons/icons';







const MoodComponent: React.FC = () => {    
    
    const [showMoodLoggedToast, setShowMoodLoggedToast] = useState<boolean>(false);
    const [showMoodErrorToast, setShowMoodErrorToast] = useState<boolean>(false);
    const [showInputs, setShowInputs] = useState(false);
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [mood, setMood] = useState('');

    const EmojiData = () => (
        <div>
            {!mood ? <IonImg src="/assets/empty-state.svg" /> : <div>
          <IonList>
                            <IonItemSliding>
                                <IonItem color='light'>
                                    <IonAvatar className='text-4xl mr-4'>
                                        {chosenEmoji.emoji}
                                    </IonAvatar>
                                    <IonLabel>
                                        <h3>Username</h3>
                                        <p>{mood}</p>
                                    </IonLabel>
                                </IonItem>
                                <IonItemOptions side="end">
                                    <IonItemOption
                                        color="danger"
                                        onClick={() => setChosenEmoji(null)}
                                    >
                                        <IonIcon icon={trashBin} />
                                    </IonItemOption>
                                </IonItemOptions>
                            </IonItemSliding>
                    </IonList>


                </div>
                
                
                
                
                }

        </div>
      );    

    const onEmojiClick = (event: React.MouseEvent, emojiObject: React.SetStateAction<null>) => {
      setChosenEmoji(emojiObject);
      setShowInputs(true);
    };


    return (
        <>

{!chosenEmoji &&         <Picker
        onEmojiClick={onEmojiClick}
        disableAutoFocus={true}
        searchPlaceholder='Search sumthang'
        groupNames={{
            'recently_used': 'did I really use those?!',
            'smileys_people': 'Moods'
          }}
        groupVisibility={{
            flags: false,
            'animals_nature': false,
            'food_drink': false,
            'travel_places': false,
            'activities': false,
            'objects': false,
            'symbols': false
          }}
          pickerStyle={{ width: '100%', height:'100%',border:'none' }}
      />}

      {chosenEmoji && <EmojiData chosenEmoji={chosenEmoji} />}

                <IonToast
                    duration={2000}
                    isOpen={showMoodLoggedToast}
                    message='Your mood has been logged.'
                    onDidDismiss={() => setShowMoodLoggedToast(false)}
                />
                
                <IonToast
                    duration={2000}
                    isOpen={showMoodErrorToast}
                    message='Something went wrong, please try again.'
                    onDidDismiss={() => setShowMoodErrorToast(false)}
                />                

                <IonAlert
                    isOpen={showInputs}
                    subHeader='Share a thought for your mood'
                    onDidDismiss={() => setShowInputs(false)}
                    header={'Why ' + chosenEmoji?.emoji + '?'}
                    inputs={[
                        {
                            type: 'text',
                            name: 'details',
                            placeholder: 'Write out how you are feeling...'
                        },
                    ]}
                    buttons={[
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                                setShowInputs(false);
                                setChosenEmoji(null);
                            }
                        },
                        {
                            text: 'Ok',
                            handler: data => {
                                if(data.details && chosenEmoji !== null){
                                    setMood(data.details);
                                    setShowMoodLoggedToast(true);
                                } else {
                                    setChosenEmoji(null);
                                    setShowMoodErrorToast(true); 
                                }
                            }
                        }
                    ]}
                />

        </>
    );



      
};

export default MoodComponent;