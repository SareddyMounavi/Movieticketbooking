import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "./login";
import Signup from "./Sign";
import Home from "./home";
import Bujji from "./Bujji";
import ContactPage from "./contact";
import Gcards from "./Gcards";
var Path=()=>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Bujji" element={<Bujji/>}></Route>
        <Route path="/Contact" element={<ContactPage/>}></Route>
        <Route path="/Gcards" element={<Gcards/>}></Route>

        </Routes>
        </BrowserRouter>
    )
}
export default Path;
