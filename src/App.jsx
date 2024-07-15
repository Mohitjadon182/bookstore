import React from "react";
import Home from "./Home/Home";

import { Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      {/* <Home/>
    <Course/> */}
     <div >
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
     </div>
    </>
  );
}

export default App;
