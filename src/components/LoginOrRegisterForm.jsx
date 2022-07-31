// Membutuhkan state untuk meng-track value dari TextField
import React, { useState , useEffect} from "react";

// Gunakan .module.css untuk mendapatkan scoped css
import styles from "./LoginOrRegisterForm.module.css";

import { Grid, Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {auth, loginDenganEmailPassword, registerDenganEmaildanPassword} from "../authentication/firebase"

// Karena nantinya kita bisa berpindah ke halaman LoginPage (setelah Register)
// ataupun ke halaman HomePage (setelah Login), maka kita bisa memanfaatkan useNavigate
import {useAuthState} from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  // gunakan hooks useNavigate
  const navigate = useNavigate();
  const [user, loading, error]=useAuthState(auth)

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    // Karena state berupa Object
    // dan state sifatnya immutable

    // maka untuk set statenya
    // menggunakan spread dan overwrite
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    // console.log("Login");
    // navigate("/");
    loginDenganEmailPassword(credential.email, credential.password)
  };

  const registerHandler = () => {
    // console.log("Register");
    // navigate("/login");

    registerDenganEmaildanPassword(credential.email, credential.password)
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  useEffect(() => {
    console.log(user)
  if(loading) {
    return;
  }
  if(user){
    navigate('/')
  }
  }, [loading, user, navigate]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "95vh", backgroundColor:"rgb(8 23 48)" }}
      
    >
      <Box className={styles.boxy} component="form" noValidate>
        <Typography variant="body1">
          {loginOrRegister === "login" ? "Login Page" : "Register Page"}
        </Typography>

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          size="small"
          value={credential.email}
          onChange={textFieldEmailOnChangeHandler}
          style={{ 
            backgroundColor:"#fff"
           }}
        />

        <TextField
          label="password"
          type="Password"
          variant="outlined"
          size="small"
          value={credential.password}
          onChange={textFieldPasswordOnChangeHandler}
          style={{ 
            backgroundColor:"#fff"
           }}
        />

        <Button
          variant="outlined"
          size="small"
          onClick={buttonLoginOrRegisterOnClickHandler}
          style={{ 
            backgroundColor:"magenta",
            color:"maroon"
           }}
        >
          {loginOrRegister === "login" ? "Login" : "Register Account"}
        </Button>

        {loginOrRegister === "login" ? (
          <Link to="/register">
            <Typography variant="body1" sx={{ color: "white" }}>or do you want Register ?</Typography>
          </Link>
        ) : (
          <Link to="/login">
            <Typography variant="body1" sx={{ color: "white"}}>or do you want Login ?</Typography>
          </Link>
        )}
        <Box sx={{  color:"white" }}>
          <small> email: buat@email.com</small>
          <small>password:123456789</small>
        </Box>
      </Box>
    </Grid>
  );
};

export default LoginOrRegisterForm;
