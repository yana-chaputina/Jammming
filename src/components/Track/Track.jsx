import { useCallback } from 'react';
import './Track.css'

function Track(props) {
  const handleAddTrack = useCallback((e) => {
    props.onAdd(props.track);
  }, [props.onAdd, props.track]);
  const handleRemoveTrack = useCallback((e) => {
    props.onRemove(props.track);
  }, [props.onRemove, props.track]);
  function actionButton() {
    if (props.isRemovable) {
      return (
        <button className="trackButton" onClick={handleRemoveTrack}>-</button>
      );
    }
    return (
      <button className="trackButton" onClick={handleAddTrack}>+</button>
    );
  };
  return (
    <div className="flex-container">
      <div className="track">
      <h3>{props.track.name}</h3>
      <p>{props.track.artist} | {props.track.album}</p>
      </div>
      {actionButton()}
    </div>
  )
}

export default Track;