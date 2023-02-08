import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 
import { GifsDetails } from "../components/GifsDetails/GifsDetails";


import HomePage from '../pages/HomePage/HomePage';
import SearchPage from "../pages/SearchPage/SearchPage";


const GifRouter = () => {
  return (
   <>
    <Router>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="/GifsDetails/:title" element={<GifsDetails/>}/>
            <Route path="/SearchPage/" element={<SearchPage/>}/>
       

        </Routes>
    </Router>
   
   
   
   </>
  )
}

export default GifRouter