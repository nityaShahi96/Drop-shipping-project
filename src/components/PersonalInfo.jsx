import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const PersonalInfo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center text-3xl m-12">
        Fill Your Personal Information
      </div>
      <div className="m-auto">
        <Box sx={{ width: "80%" }} className="m-auto">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <label>First Name</label>
              <TextField
                id="firstName"
                variant="outlined"
                fullWidth
                margin="dense"
              />
            </Grid>
            <Grid item xs={6}>
              <label>Last Name</label>
              <TextField
                id="lastName"
                variant="outlined"
                fullWidth
                margin="dense"
              />
            </Grid>
            <Grid item xs={6}>
              <label>Email Address</label>
              <TextField
                id="email"
                variant="outlined"
                fullWidth
                margin="dense"
              />
            </Grid>
            <Grid item xs={6}>
              <label>Phone Number</label>
              <TextField
                id="phone"
                variant="outlined"
                fullWidth
                margin="dense"
              />
            </Grid>
            <Grid item xs={6}>
              <label>User Name</label>
              <TextField
                id="userName"
                variant="outlined"
                fullWidth
                margin="dense"
              />
            </Grid>
            <Grid item xs={6}>
              <label>Business Name</label>
              <TextField
                id="businessName"
                variant="outlined"
                fullWidth
                margin="dense"
              />
            </Grid>
            <Grid item xs={6}>
              <label>Country/Region</label>
              <TextField
                id="country"
                variant="outlined"
                fullWidth
                margin="dense"
              />
            </Grid>
          </Grid>
        </Box>
        <div>
          <Box sx={{ flexGrow: 1, width: "80%" }} className="m-auto">
            <Grid container spacing={2}>
              <Grid item xs={6} md={8}>
                <div>
                  <label>Address</label>
                  <TextField
                    id="address"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />
                </div>
              </Grid>
              <Grid item xs={6} md={4}>
                <div>
                  <label>Postal Code</label>
                  <TextField
                    id="postalCode"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />
                </div>
              </Grid>
              <Grid item xs={6} md={6}>
                <div>
                  <label>New Password</label>
                  <TextField
                    id="newPassword"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />
                </div>
              </Grid>
              <Grid item xs={6} md={6}>
                <div>
                  <label>Confirm Password</label>
                  <TextField
                    id="confirmPassword"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
      <div className="m-10">
        <Stack spacing={2} direction="row">
          <Button variant="contained" className="m-auto w-[250px]">
            Apply
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default PersonalInfo;
