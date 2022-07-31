import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Search from "./components/Search";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import {  Routes, Route, Link, Outlet} from "react-router-dom";
// import { ContextController } from "./context";

function App() {
  return (
    <div className="App " style={{opacity:"1", color:"rgb(255,255,255)", overflow: "hidden"}}>
<Header/>
 {/* <ContextController>  */}
<Routes>
<Route path="/" element={
<>
<Hero/>
<Experience/>
<Search/>
<Download/>
 </>}/>
 <Route path="music" element={<Index/>}> 
 <Route path=":id" element={
  <>
  <Outlet/>
 <Lyrics/>
  </>
 } />
 </Route>
</Routes> 
 {/* </ContextController> */}
<Footer/>

    </div>
  );

}


export default App;

// movies 
// latest
// https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US
// now playing
//  https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1
// top rated
// https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
// upkoming
// https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1
