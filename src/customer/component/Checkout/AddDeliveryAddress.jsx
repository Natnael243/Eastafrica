import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useNavigate } from "react-router-dom";

const DeliveryAddress = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
            onClick ={()=>navigate(`?step=3`)}
              sx={{ mt: 2, bgcolor: "RGB (145 85 253)" }}
              size="large"
              variant="contained"
              color="success"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField 
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autocomplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lasttName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autocomplete="given-name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autocomplete="given-name"
                    multiline
                    rows={5}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City / K.Ketema"
                    fullWidth
                    autocomplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/ Region / Ketema"
                    fullWidth
                    autocomplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="houseNumber"
                    name="houseNumber"
                    label="House Number"
                    fullWidth
                    autocomplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autocomplete="given-name"
                  />
                </Grid>

                <Grid item xs={12}>
                <Button
                onClick ={()=>navigate(`checkout?step=2`)}
              sx={{ mt: 2, bgcolor: "RGB (145 85 253)" }}
              size="large"
              variant="contained"
              type="submit"
              color="success"
            >
              Deliver Here
            </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddress;
