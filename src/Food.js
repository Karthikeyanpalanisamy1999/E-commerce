import React from "react"
import { foods } from "./data/Produ";
import { useNavigate } from "react-router-dom";
function Food() {
    const navigate=useNavigate();
  return (
    <div  className="d-flex flex-wrap justify-content-center  p-3">
        {foods.map(y=>(
       <div className="card m-2  row justify-content-center" style={{width:300}}  role="button" onClick={()=>navigate(`/products/${y.id}`)} >
            <div>
                <img src={y.thumbnail} height={150} width={180}  className="mt-3 img"  />
            </div>
            <div className="card-body bor">
                <h5 className="card-title">{y.title}</h5>
                <h6>Price:{y.price}</h6>
                <h6>Rating:{y.rating}</h6>
                <div>
                    {y.stock > 0 ? <button className="btn btn-secondary">Available</button> : 
                    <button className="btn btn-outline-danger">Out of stock</button>}
                </div>
            </div>
        </div>))}
    </div>
  )
};

export default Food;
