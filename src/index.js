import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import ProtectedKomponent from "./components/ProtectedKomponent";
import ListMoviesLogin from "./containers/ListMoviesLogin";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path = "login"
    element = { 
        <div>
        <ListMoviesLogin/>
        <LoginPage/>
        </div>

    }
    /> 
    <Route path = "register"
    element = { < RegisterPage / > }
    /> <Route path = "*"
    element = { <
        ProtectedKomponent >
        <App/>
        </ProtectedKomponent>
    }
    />
    </Routes> 
    </BrowserRouter> 
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();