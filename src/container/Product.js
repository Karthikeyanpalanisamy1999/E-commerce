import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductList } from "../data/Produ";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/reducer/cart";

 function Product (){
    const navigate =useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const props = ProductList.find((element) => element.id === parseInt(params.id))
    const addTocart =()=>{
        setAlert(true);
        setTimeout(()=> setAlert(false),3000)
        dispatch(addItem(props));
    };
    const[alert,setAlert]=useState(false);
    const list = useSelector((state) => state.cart.list);
    const element = list.find((item) => item.id === props.id);
    return(
        <div className="card m-2">
            {alert && <span className="alert alert-success">Item added to cart</span>}
        <div>
            <img src={props.thumbnail} height={350} width={400} alt={props.title} className="bor mt-3"  />
        </div>
        <div className=" mt-3 card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6>Price:{props.price}</h6>
            <h6>Rating:{props.rating}</h6>
            <div className="mb-3">
                {props.stock > 0 ? (<><button className="btn btn-success"  onClick={()=> navigate(`/checkout/${props.id}`)}>Buy Now</button>
                {element?.count > 0 ?
                <button className="ms-2 btn btn-outline-warning"
                 onClick={()=> navigate('/cart')}>Go to Cart </button>:
                <button className="ms-2 btn btn-success " onClick={addTocart}>Add Cart</button>
                    }
                 </>):( <button className="btn btn-outline-danger">Out of stock</button>)}
            </div>
        </div>
    </div>
    );
}
export default Product;