import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../context";
import {Button, Input} from '@mui/material'

const Search = () => {
  const [state, setState] = useContext(Context);
  const [userInput, setUserInput] = useState("");
  const [trackTitle, setTrackTitle] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=e05f68db64e883b1f5ec12b755a16fd6`
      )
      .then(res => {
        let track_list = res.data.message.body.track_list;
        setState({ track_list: track_list, heading: "Search Results" });
      })
      .catch(err => console.log(err));
  }, [trackTitle]);

  const findTrack = e => {
    e.preventDefault();
    setTrackTitle(userInput);
  };

  const onChange = e => {
    setUserInput(e.target.value);
  };

  return (
    <div className="card card-body"
    style={{ 
      marginBottom:"1rem",
      padding:"1rem", 
      backgroundColor:"#081730"
     }}
    >
      <h1 className="display-4"
      style={{ textAlign:"center" }}
      >
        <i className="fas fa-music" /> Search For A Song
      </h1>
      <p className="lead text-center">Get the lyrics for any song</p>
      <form onSubmit={findTrack}>
        <div className="form-group">
          <Input
            type="text"
            className="form-control form-control-lg"
            placeholder="Song title..."
            name="userInput"
            value={userInput}
            onChange={onChange}
          />
        </div>
        <Button className=" mb-5" sx={{ marginBottom:"1.25rem" }} type="submit">
          Get Track Lyrics
        </Button>
      </form>
    </div>
  );
};

export default Search;
