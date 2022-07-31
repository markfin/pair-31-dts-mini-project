import { Box } from "@mui/material";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Context } from "../../context";
import Spinner from "../layout/Spinner";
import Track from "../tracks/Track";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

const Tracks = () => {
  const [state] = useContext(Context);
  const { track_list, heading } = state;

  if (track_list === undefined || track_list.length === 0) {
    return <Spinner />;
  } else {
    return (
      <Box sx={{ backgroundColor:"#081730" }}>
        <h3 className="" style={{ 
          color:"white",
        textAlign:"center",
        marginBottom:"4rem"
         }}>{heading}</h3>
           <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
          {track_list.map(item => (
            <SwiperSlide>
            <Track key={item.track.track_id} track={item.track} />
            </SwiperSlide>
          ))}
          </Swiper>
        <Outlet/>
      </Box>
    );
  }
};

export default Tracks;
