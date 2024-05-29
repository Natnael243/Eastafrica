import React from "react";
import { useNavigate } from "react-router-dom";

const HomeSectionCard = ({ product }) => {
  const navigate = useNavigate();
  
  return (
    <div onClick={()=>navigate(`/Product/:productId`)} className="cursor-pointer flex flex-col items-center rounded-lg shadow-lg w-[15rem] mx-3 border">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="p-4">
      <p className="mt-2 text-sm">
        <h3 className="text-lg font-medium">{product.brand}</h3>
        {product.title}</p>
      </div>
    </div>
  );
};
export default HomeSectionCard;
