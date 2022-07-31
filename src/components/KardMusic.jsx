import { Card, CardMedia, Box,CardContent ,Typography  } from "@mui/material";

import React from "react";
// const urlDepanPosterPath = "https://image.tmdb.org/t/p/w200"
const KardMusic = ({propsMusic})=>{
return (
    <>
        <Card className="boxy" sx={{ width:300, height:300 }} >
<Box>
    <Typography variant="h6">
    Component CardMovies
    </Typography>
</Box>
<Box className="boxy" sx={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
{/* <CardMedia  component="img" image={urlDepanPosterPath+'/'+propsMusic.backdrop_path} alt={propsMusic.title} sx={{ width:150 }}/> */}
<CardContent>
    <Typography variant="body1"> {propsMusic.track_name}</Typography>
{/* <Rating value={propsMovie.vote_average/ 2} precision={.1} readOnly/>
<Typography variant="body2"> {propsMovie.overview}</Typography> */}

</CardContent>
</Box>
        </Card>
    </>
)
}
export default KardMusic