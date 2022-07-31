import React from 'react';
import { Link } from 'react-router-dom';

const Track = props => {
  const { track } = props;

  return (
    <div className="">
      <div className="card"
       style={{ 
        marginBottom:"1rem",
        marginLeft:"4rem",
        marginRight:"1rem",
        boxShadow:"0px 10px 5px -5px rgba(255, 255, 0, .5)"
       }}
      >
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play" /> Track
            </strong>
            : {track.track_name}
            <br />
            <strong>
              <i className="fas fa-compact-disc" /> Album
            </strong>
            : {track.album_name}
          </p>
          <Link
            to={`/music/${track.track_id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-chevron-right" /> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
