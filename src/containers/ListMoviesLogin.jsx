import React, { useRef, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

import { Box, Typography } from '@mui/material'
import "./ListMovies.css"
import { Outlet } from "react-router-dom";
import axios from 'axios'
import KardMovies from '../komponen/KardMoviesLogin'
const ListMoviesLogin = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchDataMovies = async() => {
            try {

                const response = await axios
                    .get("https://api.themoviedb.org/3/movie/popular?api_key=97dff2c00f42966eea0f4c75faaae345")
                    // .then(res => )
                    // .catch(err => console.error(err));
                    // const movies= response.data.results
                setMovies(response.data.results)
            } catch (err) { console.error("Error", err) };
        }
        fetchDataMovies();
    });
    return ( 
        <>
  
    <Box>
        <Box className = "boxy">
        <Swiper slidesPerView = { 3 }
        spaceBetween = { 30 }
        slidesPerGroup = { 3 }
        loop = { true }
        loopFillGroupWithBlank = { true }
        pagination = {
            {
                clickable: true,
            }
        }
        navigation = { true }
        modules = {
            [Pagination, Navigation] }
        className = "mySwiper" >
        {
            movies.map(movie => {
                return  <SwiperSlide >
                <KardMovies key = { movie.id }
                propsMovie = { movie }
                /> 
                </SwiperSlide> 
               
            })
        } 
        </Swiper>
       
        </Box> 
        </Box> 
        </>
  
       
    )
}
export default ListMoviesLogin





// export default function App() {
//   return (
//     <>
// <SwiperSlide>Slide 1</SwiperSlide>
// <SwiperSlide>Slide 2</SwiperSlide>
// <SwiperSlide>Slide 3</SwiperSlide>
// <SwiperSlide>Slide 4</SwiperSlide>
// <SwiperSlide>Slide 5</SwiperSlide>
// <SwiperSlide>Slide 6</SwiperSlide>
// <SwiperSlide>Slide 7</SwiperSlide>
// <SwiperSlide>Slide 8</SwiperSlide>


// </>
//   );
// }

// tv shows
// trending
// https://api.themoviedb.org/3/trending/all/day?api_key=97dff2c00f42966eea0f4c75faaae345
// person 
// https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US
// tv on the air
// https://api.themoviedb.org/3/tv/on_the_air?api_key=97dff2c00f42966eea0f4c75faaae345
// airing today
// https://api.themoviedb.org/3/tv/airing_today?api_key=97dff2c00f42966eea0f4c75faaae345
// tv today top rated
// https://api.themoviedb.org/3/tv/top_rated?api_key=<<api_key>>&language=en-US&page=1