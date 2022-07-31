import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
// import { withRouter } from "react-router-dom";/
const Lyrics = () => {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});
let params = useParams()
//   useEffect(() => {
  
//     axios
//       .get(
//         `http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${params.match.params.id}&apikey=e05f68db64e883b1f5ec12b755a16fd6`
//       )
//       .then(res => {
//         let lyrics = res.data.message.body.lyrics;
//         setLyrics({ lyrics });

//         return axios.get(
//           `http://api.musixmatch.com/ws/1.1/track.get?track_id=${params.match.params.id}&apikey=e05f68db64e883b1f5ec12b755a16fd6`
//         );
//       })
//       .then(res => {
//         let track = res.data.message.body.track;
//         setTrack({ track });
//       })
//       .catch(err => console.log(err));
//   }, [params.match.params.id]);

useEffect(() => {
  
  axios
    .get(
      `http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${params.id}&apikey=e05f68db64e883b1f5ec12b755a16fd6`
    )
    .then(res => {
      let lyrics = res.data.message.body.lyrics;
      setLyrics({ lyrics });

      return axios.get(
        `http://api.musixmatch.com/ws/1.1/track.get?track_id=${params.id}&apikey=e05f68db64e883b1f5ec12b755a16fd6`
      );
    })
    .then(res => {
      let track = res.data.message.body.track;
      setTrack({ track });
    })
    .catch(err => console.log(err));
}, [params.id]);





  if (
    track === undefined ||
    lyrics === undefined ||
    Object.keys(track).length === 0 ||
    Object.keys(lyrics).length === 0
  ) {
    return <Spinner />;
  } else {
    return (
      // <>
      //   <Link to="/" className="btn btn-dark btn-sm mb-4">
      //     Go Back
      //   </Link>
      //   <div className="card">
      //     <h5 className="card-header">
      //       {track.track.track_name} by{" "}
      //       <span className="text-secondary">{track.track.artist_name}</span>
      //     </h5>
      //     <div className="card-body">
      //       <p className="card-text">{lyrics.lyrics.lyrics_body}</p>
      //     </div>
      //   </div>

      //   <ul className="list-group mt-3">
      //     <li className="list-group-item">
      //       <strong>Album ID</strong>: {track.track.album_id}
      //     </li>
      //     <li className="list-group-item">
      //       <strong>Song Genre</strong>:{" "}
      //       {track.track.primary_genres.music_genre_list.length === 0
      //         ? "NO GENRE AVAILABLE"
      //         : track.track.primary_genres.music_genre_list[0].music_genre
      //             .music_genre_name}
      //     </li>
      //     <li className="list-group-item">
      //       <strong>Explicit Words</strong>:{" "}
      //       {track.track.explicit === 0 ? "No" : "Yes"}
      //     </li>
      //     <li className="list-group-item">
      //       <strong>Release Date</strong>:{" "}
      //       <Moment format="MM/DD/YYYY">
      //         {track.track.first_release_date}
      //       </Moment>
      //     </li>
      //   </ul>
      // </>


      <>
      <Link to="/music" className="btn btn-dark btn-sm mb-4">
          Go Back
        </Link>
        <div className="card">
          <h5 className="card-header">
            {track.track.track_name} by{" "}
            <span className="text-secondary">{track.track.artist_name}</span>
          </h5>
          <div className="card-body">
            <p className="card-text">{lyrics.lyrics.lyrics_body}</p>
          </div>
        </div>

        <ul className="list-group mt-3">
          <li className="list-group-item">
            <strong>Album ID</strong>: {track.track.album_id}
          </li>
          <li className="list-group-item">
            <strong>Song Genre</strong>:{" "}
            {track.track.primary_genres.music_genre_list.length === 0
              ? "NO GENRE AVAILABLE"
              : track.track.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name}
          </li>
          <li className="list-group-item">
            <strong>Explicit Words</strong>:{" "}
            {track.track.explicit === 0 ? "No" : "Yes"}
          </li>
          <li className="list-group-item">
            <strong>Release Date</strong>:{" "}
            <Moment format="MM/DD/YYYY">
              {track.track.first_release_date}
            </Moment>
          </li>
        </ul>
     </>
    );
  }
};

// export default withRouter(Lyrics);
export default Lyrics;
