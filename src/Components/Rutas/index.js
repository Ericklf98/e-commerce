import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Error from "../Error/Error";
import Info from "../Products/InfoProduct/information";
import Principal from "../Principal/Principal";
import Especifico from "../ProductoEspecifico/especifico";
import Nabvar from "../Nabvar/nabvar";
const Index=()=>{
    return(
        <Router>
            <Nabvar/>
            <Routes>
                <Route path="/" exact element={<Principal/>}/>
                <Route path="/product/:id" exact element={<Especifico/>}/>
                <Route path="/informacion/:id" exact element={<Info/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </Router>
    )
}
export default Index;