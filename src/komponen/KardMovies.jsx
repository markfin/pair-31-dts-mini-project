import { Card, CardMedia, Box,CardContent, Typography  } from "@mui/material";
import {Link} from "react-router-dom"
import React from "react";
const urlDepanPosterPath = "https://image.tmdb.org/t/p/w200"
const KardMovies = ({propsMovie})=>{
return (
    <>
        <Card>
<Box>
</Box>
<Box  sx={{ width:300 }}>

<CardMedia  component="img" image={urlDepanPosterPath+'/'+propsMovie.backdrop_path} alt={propsMovie.title} sx={{ width:150 }}/>
<CardContent>
<Link to={`/movies/${propsMovie.id}`}>
    <Typography variant="body1"> {propsMovie.title}</Typography>
</Link>
</CardContent>
</Box>
        </Card>
    </>
)
}
export default KardMovies