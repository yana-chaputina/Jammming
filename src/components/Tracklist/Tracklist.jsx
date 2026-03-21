import './Tracklist.css';
import Track from '../Track/Track.jsx';

function Tracklist(props) {
  return (
    <div className="tracklist">
      {props.tracks.map((track) => {
        return (<Track track={track} key={track.id}
          onAdd={props.onAdd} onRemove={props.onRemove} isRemovable={props.isRemovable} />)
      })}
    </div>
  )
}

export default Tracklist;