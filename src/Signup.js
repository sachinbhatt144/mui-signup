import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  IconButton,
  AppBar,
  Toolbar,
  InputAdornment
} from "@mui/material";
import { AccountCircle, Lock, Email, Check, VisibilityOff, VpnKey} from "@mui/icons-material";

const Signup = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">App</Typography>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="sm"
        style={{
          display: "flex",
          alignItems: "center",
          height: "90vh",
          justifyContent: "center",
        }}
      >
        <Card
          variant="outlined"
          sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)" }}
        >
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              fontWeight="500"
              marginBlock={2}
            >
              SIGN UP
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Stack direction="row" spacing={1}>
                  <IconButton>
                    <AccountCircle />
                  </IconButton>
                  <TextField
                    label="Username"
                    fullWidth
                    placeholder="Enter your Username"
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" spacing={1}>
                  <IconButton>
                    <Email />
                  </IconButton>
                  <TextField
                    label="Email"
                    fullWidth
                    placeholder="Enter your Email"
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" spacing={1}>
                  <IconButton>
                    <Lock />
                  </IconButton>
                  <TextField
                    type="password"
                    label="Password"
                    fullWidth
                    placeholder="Enter your Password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton>
                            <VisibilityOff/>
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" spacing={1}>
                  <IconButton>
                    <Check />
                  </IconButton>
                  <TextField
                    type="password"
                    label="Confirm-Password"
                    fullWidth
                    placeholder="Please Confirm the Password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton>
                            <VisibilityOff/>
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<VpnKey/>}
                  sx={{
                    "&:hover": {
                      backgroundColor: "grey",
                      color: "black",
                    },
                    marginBlock:1.5,
                    height:40
                  }}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Signup;
