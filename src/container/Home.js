import React from "react";
import Header from '../components/Header' 
import { Route,Router,Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Product from "./Product";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Success from "./Success";
import Milkshake from "../Milkshake";
import Food from "../Food";
function Home() {
    return(
        <div>
            <Header/>
            <Routes>
                <Route  path='/' element={<Dashboard />}/>
                <Route path='/products/:id' element={<Product/>}/>
                <Route  path='/cart' element={<Cart/>}/>
                <Route path='/checkout/'>
                    <Route path='' element={<Checkout/>}/>
                    <Route path=':id' element={<Checkout/>}/>
                </Route>
                <Route path='/success' element={<Success/>}/>
                <Route path='/food' element={<Food/>}/>
                <Route path='/milkshake' element={<Milkshake/>}/>
            </Routes>

        </div>
    );
}
export default Home;