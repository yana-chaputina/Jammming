import SearchBar from '../SearchBar/SearchBar.jsx';
import SearchResults from '../SearchResults/SearchResults.jsx';
import Playlist from '../Playlist/Playlist.jsx';
import Spotify from '../../utils/Spotify.js';
import './App.css';
import { useState, useCallback } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((searchText) => {
    Spotify.search(searchText).then(setSearchResults);
  }, []);
  const updatePlaylistName = useCallback((playlistName) => {
    setPlaylistName(playlistName);
  }, []);
  const addTrack = useCallback((track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
      return;
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  },
    [playlistTracks]
  );
  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);
  const savePlaylist = useCallback(() => {
    console.log('here');
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris);
    setPlaylistName("New playlist");
    setPlaylistTracks([]);
  }, [playlistName, playlistTracks]);


  return (
    <div className="app">
      <div>
        <h1>Ja<strong>mmm</strong>ing</h1>
      </div>
      <SearchBar onSearch={search} />
      <div className="flex-container playlist">
        <div className="flex-item">
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        </div>
        <div className="flex-item">
        <Playlist name={playlistName} onNameChange={updatePlaylistName}
          tracks={playlistTracks} onRemove={removeTrack} onSave={savePlaylist} />
        </div>
      </div>
    </div>
  );
}

export default App;
