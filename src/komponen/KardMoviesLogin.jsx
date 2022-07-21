import { Card, CardMedia, Box,CardContent, Rating, Typography  } from "@mui/material";
import {Link} from "react-router-dom"
import React from "react";
const urlDepanPosterPath = "https://image.tmdb.org/t/p/w200"
const KardMoviesLogin = ({propsMovie})=>{
return (
    <>
        <Card>
<Box>
</Box>
<Box  sx={{ width:300 }}>

<CardMedia  component="img" image={urlDepanPosterPath+'/'+propsMovie.backdrop_path} alt={propsMovie.title} sx={{ width:150 }}/>
<CardContent>
    <Typography variant="body1"> {propsMovie.title}</Typography>
</CardContent>
</Box>
        </Card>
    </>
)
}
export default KardMoviesLogin