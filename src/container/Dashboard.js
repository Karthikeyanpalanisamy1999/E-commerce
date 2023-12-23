import React from "react";
import ProductCard from "../components/ProductCard";
import { ProductList } from '../data/Produ'
export default function (){
    return(
        <div className="d-flex flex-wrap  justify-content-center p-3">
            {ProductList.map((product)=><ProductCard{...product}/>)}
        </div>
    );
}