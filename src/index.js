import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextController } from "./context";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import ProtectedKomponent from "./components/ProtectedKomponent";

// Application name 	web applivation
// API key 	95ede86cf509d9398196bfaedcabe817
// Shared secret 	d43f307a0ee4ae08318e36baf7091700
// Registered to 	m4rkf1n

// The API root URL is located at http://ws.audioscrobbler.com/2.0/ 

// Request authorization from the user
// http://www.last.fm/api/auth/?api_key=xxx



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <React.StrictMode>
   <ContextController>
   <BrowserRouter>
      <Routes>
        <Route path="*" element={
        <ProtectedKomponent>
        <App />
        </ProtectedKomponent>
        } />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
   </ContextController>
   
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();