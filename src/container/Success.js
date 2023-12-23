import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Success(){
    const [count,setCount]=useState(5)
    const navigate =useNavigate();
    useEffect(() =>{
        setInterval(() =>{
            setCount((count) => count -1)
        },1000);
        setTimeout(()=> navigate('/'),5000)
    },[navigate])
    return(
        <h4 className="mt-5">
            Your order have been Placed Successfully.you will be redireted in {""}
            {count} seconds
        </h4>
    );
}