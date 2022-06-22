import {  IonSearchbar } from '@ionic/react'
import { Ref } from 'react'
import './SearchBar.css'



interface SearchBarProps {
    setText(text: string): void
    text: string
    inputRef: Ref<HTMLInputElement>
}



const SearchBarComponent = (props: SearchBarProps) => {

    

    const printSearch = () => {
        return (
            <>
      <div className="mobile-search-container">
            <div className="search-bar">
                <form action="">
                    <IonSearchbar searchIcon={''} ref={(ref) => props.inputRef.current = ref}  onIonChange={e => props.setText(e.detail.value || '')} showCancelButton='never' animated debounce={1000} placeholder="Search users, posts, or lists"  enterkeyhint='search' type='search' inputmode='search' value={props.text}></IonSearchbar>
                </form>
            </div>

            <span className="cancel-btn">Cancel</span>

            <div className="search-results">
                <h2>Search Results</h2>
                <ul>
                    <li>
                        <a href="#">Item One</a>
                    </li>
                    <li>
                    <a href="#">Item One</a>
                    </li>
                    <li>
                    <a href="#">Item One</a>
                    </li>
                    <li>
                    <a href="#">Item One</a>
                    </li>
                    <li>
                    <a href="#">Item One</a>
                    </li>
                </ul>
            </div>
        </div>
            </>
        )
    }
    return (<>
        {printSearch()}
    </>)
}

export default SearchBarComponent