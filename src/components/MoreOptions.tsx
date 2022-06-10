import { IonButton, IonContent, IonIcon, IonItem, IonLabel, IonList, IonModal, IonPopover } from "@ionic/react";
import { close, closeCircle, closeCircleOutline, ellipsisHorizontal } from "ionicons/icons";
import { useCallback, useEffect, useState } from "react";
import './MoreOptions.css';

interface MoreOptionsProps {
  isOwner:boolean;
}

const MoreOptions = (props:MoreOptionsProps) => {
  const [isMenuOpen, setMenu] = useState(false);

  //added accessibility so menu is closed if it is active and the user hits the escape key.
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {   
      setMenu(false); 
    }
  }, []);

  useEffect(() => {
    //if menu is not open, do not add accessibility event listener for escape key
    if (!isMenuOpen) {
      return;
    }

    document.addEventListener("keydown", escFunction);
    return () => {
        document.removeEventListener("keydown", escFunction);
    };
  }, [isMenuOpen]);


  return (
    <div className={isMenuOpen===true ? "nav-container active ":"nav-container "}>
    <nav>
        <ul className="options-nav">
            <li className="flex">
                <div className="menu-icon-container justify-end z-1-" onClick={() => setMenu(!isMenuOpen)} >
                <div className={isMenuOpen ? "text-gray-800 opacity-60 transition" : "text-gray-700 transition"}>
        <IonIcon slot="start" size='small' icon={ellipsisHorizontal} />
      </div>
                </div>
            </li>
        </ul>
        <ul className="active-nav">
            <li>
                <a>Edit</a>
            </li>
            <li>
                <a>Insights</a>
            </li>
            <li>
                <a>Delete</a>
            </li>
            <li>
                <a>Share</a>
            </li>
            <div className="menu-icon-container mx-auto mt-36" onClick={() => setMenu(!isMenuOpen)} >
                        <div className="menu-icon">
                            <span className="line-1"></span>
                            <span className="line-2"></span>
                        </div>
                    </div>
        </ul>
    </nav>
</div>
  );
};

export default MoreOptions;