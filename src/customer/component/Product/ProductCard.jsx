import React from "react";
import "./ProductCard.css"  
import { useNavigate } from "react-router-dom";

const ProductCard =({Product})=>{
    const navigate = useNavigate();
    return(
        <div onClick ={()=>navigate(`/product/${2}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer">
            <div className="h-[20rem]">
                <img 
                className="h-full w-full object-cover object-left-top"
                src={Product.imageUrl} alt=""/>
            </div>
            <div className="textPart bg-white p-3">
                <div>
                    <p className="font-bold opacity-60">{Product.brand}</p>
                    <p >{Product.title}</p>
                </div>
                <div className="flex item-center space-x-2">
                    <p className="text-green-600 font-semibold">{Product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard