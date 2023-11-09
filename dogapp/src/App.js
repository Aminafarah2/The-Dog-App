import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites  from "./pages/Favorites";
// import {BrowserRouter,Route,Routes} from "react-router-dom";
 const App=()=>{
  return (
    <div>
    {/* <BrowserRouter> */}
    <Navbar/>
    <Home/>
    <Favorites/>
    {/* <Routes> */}
      {/* <Route path="/" element={<Home/>}/> */}
      {/* <Route path="favorites" element={<Favorites/>}/> */}

    {/* </Routes> */}
    
    
    
    
    {/* </BrowserRouter> */}
    </div>
  )
 }






 export default App;