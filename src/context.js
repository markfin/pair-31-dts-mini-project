import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SEARCH_TRACKS':
//       return {
//         ...state,
//         track_list: action.payload,
//         heading: 'Search Results'
//       };
//     default:
//       return state;
//   }
// };

export function ContextController({ children }) {
  let intialState = {
    track_list: [],
    heading: ""
    // dispatch: action => this.setState(state => reducer(state, action))
  };

  const [state, setState] = useState(intialState);

  useEffect(() => {
    axios
      .get(
        `http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=6&country=ind&f_has_lyrics=1&apikey=e05f68db64e883b1f5ec12b755a16fd6`
      )
      .then(res => {
        console.log(res.data);
        setState({
          track_list: res.data.message.body.track_list,
          heading: "Top Tracks"
        });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
