import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductListItem from "../components/ProductListItem";
import { modifyItem, removeItem } from "../redux/reducer/cart";
import { Button } from "bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

export default function Cart(){
    const list = useSelector((state) => state.cart.list) 
    const dispatch = useDispatch();
    const incrementItem = (item) => {
        dispatch(modifyItem({...item, count: item.count + 1}));
    };
    const removeItemFrom = (item) =>{
        dispatch(removeItem(item))
    }
    const decrementItem = (item) => {
        if(item.count === 1)
        {
            dispatch(removeItem(item))
        }
        else{
        dispatch(modifyItem({...item, count: item.count - 1}));
        }
    };
    const navigate=useNavigate();
    return(
        <>
        {list.length > 0 ? (
        <>
        {list.map((item) =>( <ProductListItem {...item} 
        key={item.id} incrementItem={() => incrementItem(item)}
        decrementItem={() => decrementItem(item)}
        removeItems={() => removeItemFrom(item)}
        />
        ))}
        <button className="btn btn-success" onClick={ ()=> navigate('/checkout')}>Go to checkout</button>
        </>
        ) : (
            <h3>No Items in the cart</h3>
        )}
    </>
    );
}