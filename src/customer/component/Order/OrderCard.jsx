import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Ordercard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="p-5 shadow-lg hover:shadow-2xl border mt-2 cursor-pointer">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://res.cloudinary.com/dhbdsiojp/image/upload/v1712869889/assets/home%20care%20product/hcuguqailrdad3vy0qhd.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Crown Detergent</p>
              <p className="opacity-50 text-xs font-semibold">500g</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p className="text-green-500 font-bold animate-pulse">Payment Successful</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <p className="font-bold">
              <span>Expected delivery on May 21</span>
            </p>
          )}
          {false && (
            <p className="font-bold">
              <span>Expected delivery on Apr 20</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>

    <div onClick={() => navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl border mt-2 cursor-pointer">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://res.cloudinary.com/dhbdsiojp/image/upload/v1712869896/assets/personal%20care%20product/rbd6rsezfildrezkmq4p.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Florida Sanitizer</p>
              <p className="opacity-50 text-xs font-semibold">50g</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p className="text-green-500 font-bold">Payment Successful</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <p className="font-bold">
              <span>Deliverd On March</span>
            </p>
          )}
          {false && (
            <p className="font-bold">
              <span>Expected delivery on Apr 20</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>

    <div onClick={() => navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl border mt-2 cursor-pointer">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://res.cloudinary.com/dhbdsiojp/image/upload/v1712869894/assets/personal%20care%20product/kwh4fw3ibyzxqpjrkimm.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Vitex Shampoo</p>
              <p className="opacity-50 text-xs font-semibold">50g</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p className="text-green-500 font-bold">Payment Successful</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <p className="font-bold">
              <span>Deliverd On Last Month</span>
            </p>
          )}
          {false && (
            <p className="font-bold">
              <span>Expected delivery on Apr 20</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
    </div>

    
  );
};

export default Ordercard;
