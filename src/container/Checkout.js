import React, { useState } from "react";
import {  useSelector } from "react-redux";
import ProductListItem from "../components/ProductListItem";
import { modifyItem, removeItem } from "../redux/reducer/cart";
import { ProductList } from "../data/Produ";
import { Button } from "bootstrap";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function Checkout(){
    const params = useParams();
    const list = useSelector((state) => state.cart.list);
    const [state ,setState]=useState(
        params.id 
        ?[{ ...ProductList.find((element) => element.id === parseInt(params.id)),
            count: 1,
        },
        ]
    : list
    ); 
    
    const incrementItem = (item) => {
        const index = state.findIndex(
            (product) =>product.id === item.id
            );
        setState((state)=>
    [
        ...state.slice(0,index),
        {...item,count: item.count + 1},
        ...state.slice(index + 1),
    ]);
    };
    const removeItemFrom = (item) =>{
        const index = state.findIndex(
            (product) =>product.id === item.id
            );
        setState((state)=>
    [
        ...state.slice(0,index),
       
        ...state.slice(index + 1),
    ]);
    }
    const decrementItem = (item) => {
        if(item.count === 1)
        {
        removeItemFrom(item);
        }
        else{
            const index = state.findIndex(
                (product) =>product.id === item.id
                );
            setState((state)=>
        [
            ...state.slice(0,index),
            {...item,count: item.count - 1},
            ...state.slice(index + 1),
        ]);
        }
    };

    const navigate=useNavigate();
    return(
        <>
        {state.length > 0 ? (
        <>
        {state.map((item) =>( <ProductListItem {...item} 
        key={item.id} incrementItem={() => incrementItem(item)}
        decrementItem={() => decrementItem(item)}
        removeItems={() => removeItemFrom(item)}
        />
        ))}
        <button className="btn btn-success mb-5"
         onClick={ ()=> navigate('/success')}>
            Place Order </button>
        </>
        ) : (
            <h3>No Items in the checkout</h3>
        )}
    </>
    );
}