import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from '../views/home/Home';
import Discover from '../views/discover/Discover';
import Join from '../views/join/Join'


const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/discover" element={<Discover/>}/>
            <Route path="/join" element={<Join/>}/>
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
