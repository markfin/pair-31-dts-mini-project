import React from "react";
import {Box} from '@mui/material'
import {  Routes, Route, Link, Outlet} from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./containers/HomePage";
import ListMovies from './containers/ListMovies'
import DetailPage from './components/DetailPage'
import SimpleFooter from "./components/SimpleFooter";
import LatestMovies from "./containers/LatestMovies";
import TopRatedMovies from "./containers/TopRatedMovies";
import UpcomingMovies from "./containers/UpcomingMovies";


function App() {
  

  return (
    <div className="App">
      <NavBar />
     
      <HomePage />
      <Routes>
<Route path="/" element={<> <Home/></>}>
 </Route>
 <Route path="about" element={ <About/>}> </Route>
<Route path="dunia" element={<> example dunia</>}> </Route>
 <Route path="movies" element={ 
 <>
 <Box>
  <Outlet/>
 </Box>
 <ListMovies/> 
 <LatestMovies/>
 <TopRatedMovies/>
 <UpcomingMovies/>
 <SimpleFooter/>
 </>
 }>
 <Route path=":id" element={<DetailPage/>}/>
  </Route>
</Routes>

    </div>
  );

}
function Home (){
  return (
    <>
    <main>
    <h2>ini halaman Home Page</h2>
    <p>Belajar Routing</p>
     </main>
     <nav>
     <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'dark',
        '&:hover': {
          backgroundColor: 'main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
      <Link to="/about"> About</Link>
      <Link to="/movies"> Film</Link>
      </Box>
     </nav>
     </>
  )
}
function About (){
  return (
    <>
  <main>
  <h2>ini halaman About</h2>
  <p>Belajar Routing</p>
   </main>
   <nav>
    <Link to="/"> Home</Link>
   </nav>
   </>
  )
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
