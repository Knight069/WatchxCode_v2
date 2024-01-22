/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Homepage from "./components/Homepage";
import { GoogleLogin } from "@react-oauth/google";
import Navbar from "./components/Navbar";
import CodeIDE from "./components/CodeIDE";
import Video from "./components/Video";
import SplitPane from "split-pane-react/esm/SplitPane";
import Coding from "./components/coding";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/code" element={<CodeIDE />} />
          <Route path="/coding" element={<Coding/>} />
          <Route path="/watchxcode" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
