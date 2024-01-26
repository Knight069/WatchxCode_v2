/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider clientId="883544199596-7e5idaavd2bdr9l8o3gvqqlb90mh2l0t.apps.googleusercontent.com"> */}
    <App />
    {/* </GoogleOAuthProvider> */}
  </React.StrictMode>
);
