import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            About{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              About Us
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Partners{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Contact Us{" "}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Our Companies{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              East Africa Holding{" "}
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Social Links{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Facebook{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Twitter{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Instagram{" "}
            </Button>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            {" "}
            &copy; 2024 EAST AFRICA HOLDING. All Right Reserved
          </Typography>
          <Typography variant="body2" component="p" align="center">
            {" "}
            Made By NHATTY TECH SOLUTION
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
