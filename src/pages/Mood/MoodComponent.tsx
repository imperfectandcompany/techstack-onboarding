import { IonAlert, IonToast } from '@ionic/react';
import React, {  useState } from 'react';
import Picker from 'emoji-picker-react';
import './Mood.css'







const MoodComponent: React.FC = () => {    
    
    const [showMoodLoggedToast, setShowMoodLoggedToast] = useState<boolean>(false);
    const [showInputs, setShowInputs] = useState(false);



    const [chosenEmoji, setChosenEmoji] = useState(null);

    const EmojiData = () => (
        <div>
          <strong>Selected:</strong> {chosenEmoji.emoji}
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
                                setShowMoodLoggedToast(true);
                            }
                        }
                    ]}
                />

        </>
    );



      
};

export default MoodComponent;