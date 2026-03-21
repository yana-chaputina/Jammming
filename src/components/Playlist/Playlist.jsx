import { useCallback } from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist.jsx';

function Playlist(props) {
  const handleNameChange = useCallback((e) => {
    props.onNameChange(e.target.value);
  }, [props.onNameChange]);
  return (
    <div className="playlist">
      <h2>Playlist</h2>
      <input type="text" id="name" value={props.name} onChange={handleNameChange} />
      <Tracklist tracks={props.tracks} onRemove={props.onRemove} isRemovable={true} />
      <button className="playlistButton" onClick={props.onSave}>SAVE</button>
    </div>
  )
}

export default Playlist;