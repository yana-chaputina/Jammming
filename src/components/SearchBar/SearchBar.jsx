import './SearchBar.css'
import { useState, useCallback, } from 'react'

function SearchBar(props) {
  const [searchText, setSearchText] = useState("");
  const handleSearchText = useCallback((e) => {
    setSearchText(e.target.value);
  }, []);
  const handleClick = useCallback(() => { props.onSearch(searchText); }, [props.onSearch, searchText]);

  return (
    <div>
      <input type="text" id="searchText" placeholder="Enter the song name" onChange={handleSearchText} />
      <button className="searchButton" onClick={handleClick}>SEARCH</button>
    </div>
  )
}

export default SearchBar;