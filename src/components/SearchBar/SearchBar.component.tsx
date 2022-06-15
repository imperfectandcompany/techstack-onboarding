import './SearchBar.css'

const SearchBarComponent: React.FC = () => {

    const printSearch = () => {
        return (
            <>
      <div className="mobile-search-container ">
            <div className="link-search"></div>
            <div className="search-bar">
                <form action="">
                    <input type="text" placeholder="Search users, posts, lists"/>
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