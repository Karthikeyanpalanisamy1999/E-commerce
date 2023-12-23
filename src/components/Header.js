import React from "react";
import { useNavigate } from "react-router-dom";


export default function Hello(){
    const navigate=useNavigate();
    return(
        <div className='bg-success p-3 '>
            <h3 className="mb-3">Udhayam Restaurent</h3>
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex">
                    <button className="btn btn-primary  me-4  ms-5" onClick={()=>navigate('/')}>Home</button>
                    <button className="btn btn-primary  me-4  ms-5" onClick={()=>navigate('/food')}>Food</button>
                    <button className="btn btn-primary  me-4  ms-5" onClick={()=>navigate('/milkshake')}>Milkshake</button>
                    <button className="btn btn-primary  me-4  ms-5" onClick={()=> navigate('/cart')}>cart</button>
                </div>
            </div>
        </div>
    );
}