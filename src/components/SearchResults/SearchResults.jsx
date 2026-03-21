import './SearchResults.css';
import Tracklist from '../Tracklist/Tracklist.jsx';

function SearchResults(props) {
  return (
    <div>
      <h2>Search results</h2>
      <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
    </div>
  )
}

export default SearchResults;