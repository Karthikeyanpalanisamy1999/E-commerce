import React from "react";

export default function ProductListItem(props){
    return(
        <div className="d-flex mt-5 align-items-center  justify-content-center">
        
            <img src={props.thumbnail} height={150} width={180} alt={props.title} className="bor  me-4"  />

            <h5 className="card-title me-4">{props.title}</h5>
            <h6  className="mt-2 me-4">Price:{props.price}</h6>
            <h6 className="mt-2 me-4">Rating:{props.rating}</h6>
            <div>
                <button className="btn btn-danger ms-3 me-3 " onClick={props.incrementItem}>+</button>
                  <span>Quantity {props.count}</span>  
                <button className="btn btn-danger ms-3" onClick={props.decrementItem}>-</button>
                <button className="btn btn-danger ms-3" onClick={props.removeItems}>Remove</button>
            </div>
    </div>
    );
}