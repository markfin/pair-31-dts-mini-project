import React from "react";

import { Box, Typography } from "@mui/material";

import styles from "./HomePage.module.css";
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from "../authentication/firebase";

const HomePage = () => {
  const [user] = useAuthState(auth)
  return (
    <>
      <Box className={styles.container}>
        <Typography variant="body1">Halo, ini adalah halaman utama {user.email}</Typography>
      </Box>
    </>
  );
};

export default HomePage;
