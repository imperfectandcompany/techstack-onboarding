import { IonInput } from '@ionic/react'
import { Ref } from 'react'
import './SearchBar.css'



interface SearchBarProps {
    setText: (text: string) => void
    text: string
    inputRef: Ref<HTMLInputElement>
}



const SearchBarComponent = (props: SearchBarProps) => {

    

    const printSearch = () => {
        return (
            <>
      <div className="mobile-search-container ">
            <div className="link-search bg-red-500 z-40"></div>
            <div className="search-bar">
                <form action="">
                <IonInput ref={(ref) => props.inputRef.current = ref} onIonChange={e => props.setText(e.detail.value || '')} value={props.text} className=" w-full rounded-xl" enterkeyhint="search" inputMode='search' type='search'   clearInput={true} id="searchInput" placeholder="Search users, posts, lists" autofocus={false}></IonInput>
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