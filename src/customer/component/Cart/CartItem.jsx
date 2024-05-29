import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex item-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://res.cloudinary.com/dhbdsiojp/image/upload/v1712869889/assets/home%20care%20product/hcuguqailrdad3vy0qhd.jpg"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p>Crown Detergent</p>
          <p></p>
          <div className="flex space-x-5 items-center text-graty-900 pt-6">
            <p className="font-semibold">240Br</p>
          </div>
        </div>
      </div>
      <div className="lg:flex item-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">2</span>
          <IconButton>
            <AddCircleOutlineIcon />
          </IconButton>

        </div>
        <div>
          <Button sx={{color:"RGB(145 85 253)"}}>REMOVE</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
