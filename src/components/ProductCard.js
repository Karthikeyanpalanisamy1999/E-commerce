import React from "react";
import { useNavigate } from "react-router-dom";
export default function ProductCard(props){
    const navigate=useNavigate();
    return(
        <div className="card m-2 cursor-point " style={{width:300}} role='button' onClick={()=>navigate(`/products/${props.id}`)}>
            <div>
                <img src={props.thumbnail} height={150} width={180} alt={props.title} className="bor mt-3"  />
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6>Price:{props.price}</h6>
                <h6>Rating:{props.rating}</h6>
                <div>
                    {props.stock > 0 ? <button className="btn btn-secondary">Available</button> : 
                    <button className="btn btn-outline-danger">Out of stock</button>}
                </div>
            </div>
        </div>
    );
}