import React from 'react'
import {BrowserRouter,Route,Router,Routes} from 'react-router-dom'
import Home from '../container/Home';
function Rout(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='*' element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    );
}
export default Rout;