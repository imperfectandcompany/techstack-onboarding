import { IonButton, IonContent, IonIcon, IonLabel, IonNote, IonPopover } from '@ionic/react';
import { ellipsisHorizontal, ellipsisVertical, mail } from 'ionicons/icons';
import { useState } from 'react';
import MoreOptions from '../MoreOptions';
import { LikeButton } from '../LikeButton';
import Avatar from '../Avatar';
import { Interface } from 'readline';

export enum buttonStyle {
  primary,
  secondary
}

export type Button = {
  style: buttonStyle,
  text: string
};

const PrimaryStyle = "flex animate__animated animate__fadeInLeft justify-center items-center text-center py-3 font-medium dark:text-zinc-300 bg-zinc-50 text-zinc-900 dark:bg-zinc-800 rounded-lg";
const SecondaryStyle = "flex border-2 animate__animated animate__fadeInRight justify-center items-center text-center py-3 text-black-400 font-medium dark:text-zinc-400 dark:border-zinc-800 rounded-lg hover:bg-blue-500";

export const ButtonCTA: React.FC<Button> = (props) => {

  return(
    <a
      href=""
      className={props.style === buttonStyle.primary ? PrimaryStyle : SecondaryStyle}
    >
      {props.text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="flex-shrink-0 w-4 h-4 ml-3"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  )
};

export default ButtonCTA;