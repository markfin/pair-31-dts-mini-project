
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import {Typography} from "@mui/material";
const urlDepanPosterPath = "https://image.tmdb.org/t/p/w200"
const DetailPage = () => {
    const [movie, setMovies] = useState({})
    let params = useParams();
    useEffect(
        () => {
            // https://api.themoviedb.org/3/movie/438148?api_key=97dff2c00f42966eea0f4c75faaae345
            const binatangYangTerpilih = async () => {
                try {
                    const response = await axios
                        .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=97dff2c00f42966eea0f4c75faaae345`)
                    setMovies(response.data)
                } catch (err) {
                    console.error("Error", err)
                }
            }
            binatangYangTerpilih()
        }, [params.id]
    )
    return (
        <>
            <h2>{movie.original_title}</h2>
            <img src={urlDepanPosterPath+'/'+movie.backdrop_path} alt={movie?.name}  sx={{width:300}}/>
<Typography variant="body1">
{movie.overview}
</Typography>
        </>
    )
};
export default DetailPage;