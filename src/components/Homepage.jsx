/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./Navbar";


const Homepage = () => {
  return (
    <>
      <div className="bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <Navbar />
      </div>
      <div>
        <h1>this is watch and code platform</h1>
      </div>
    </>
  );

};

export default Homepage;
