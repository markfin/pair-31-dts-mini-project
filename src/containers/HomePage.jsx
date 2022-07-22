import React from "react";

import { Box, Typography } from "@mui/material";
import {Link} from 'react-router-dom'
import styles from "./HomePage.module.css";
import {useAuthState} from "react-firebase-hooks/auth"
import ListMovies from "./ListMovies"
import { auth } from "../authentication/firebase";

const HomePage = () => {
  const [user] = useAuthState(auth)
  
  return (

    <>
      <Box>
        <Typography variant="body1">Halo, ini adalah halaman utama {user.email}</Typography>
      </Box>
  
    </>
  );
};

export default HomePage;
