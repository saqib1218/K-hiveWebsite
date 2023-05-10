import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  InputAdornment, IconButton 
} from "@mui/material";
import React, { useState } from "react";
import MyImage from "../../Assets/images/Rectangle 1.png";
import myimage2 from "../../Assets/images/Frame8.png";
import Picupload from "../../Assets/picupload";
import { Visibility, VisibilityOff }from '@mui/icons-material';




const theme = createTheme();
const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
   setShowConfirmPassword(!showConfirmPassword);
 };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main">
          <CssBaseline />

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            xl={6}
            lg={6}
            component={Paper}
            elevation={6}
            square
            sx={{display:"flex",justifyContent:"center"}}
          >
            <Grid item xl={8} lg={8} md={8}>

            
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 25,
                marginBottom: 25 ,
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                style={{
                  color: "#0F172A",
                  font: "Archivo",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: 36,
                  lineHeight: "100%",
                }}
              >
                Welcome!
              </Typography>

              <Typography
                style={{
                  color: "#475569",
                  fontFamily: "Archivo",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "150%",
                  textAlign: "center",
                  marginTop: 16,
                }}
              >
                Create an account and unlock the full potential of KRYPTOHIVE's
                innovative software solutions. Sign up today!
              </Typography>
             
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
               
                 <TextField
                  color="error"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  color="error"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  
                />
               <TextField
      color="error"
      margin="normal"
      required
      fullWidth
      name="password"
      label="Password"
      type={showPassword ? 'text' : 'password'}
      id="password"
      autoComplete="current-password"
      sx={{ borderRadius: '20px' }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePassword} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
                
      <TextField
        color="error"
        margin="normal"
        required
        fullWidth
        name="confirm-password"
        label="Confirm Password"
        type={showConfirmPassword ? 'text' : 'password'}
        id="confirm-password"
        sx={{ borderRadius: '20px' }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleToggleConfirmPassword} edge="end">
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
               
                <Grid
                  item
                  
                >
                 <Paper sx={{backgroundColor:"#FFF",border:"2px dotted #E2E8F0",height:"166px",boxShadow:"none"}} >
<div style={{display:"flex",justifyContent:"center",paddingTop:24,paddingBottom:16}}   >
<Picupload />
</div>
<div style={{display:"flex",justifyContent:"center",paddingBottom:12, }}>
   <Typography sx={{fontSize:"12px",lineHeight:"12px",fontWeight:600,color:"#475569"}}>Upload image   </Typography>
</div>
<div style={{display:"flex",justifyContent:"center",paddingBottom:24, }}>
   <Typography sx={{fontSize:"14px",lineHeight:"14px",fontWeight:400,color:"#475569"}}>Drop JPG,PNG or Browse Image  </Typography>
</div>

                 </Paper>
                </Grid>
                <Button
                  type="submit"
                  color="error"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2, mb: 2,borderRadius:"8px" }}
                >
                  Sign up
                </Button>
                <Grid container justifyContent="center" alignItems="flex-end">
                  <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography
                      style={{
                        color: "#4B5563",
                        fontWeight: 400,
                        fontSize: 16,
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                      }}
                    >
                     Already have an account?&nbsp;
                    </Typography>
                    <Link
                      href="/login"
                      variant="body2"
                      style={{
                        color: "#C22522",
                        textDecoration: "none",
                        marginTop: "2px",
                        fontWeight: 600,
                        fontSize: 16,
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                      }}
                    >
                      {"Login"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            </Grid>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            xs={false}
            sm={false}
            md={6}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "block",
              },
            }}
          >
            <div style={{ position: "relative", height: "100%" }}>
              <img
                src={MyImage}
                alt="My Image"
                style={{ width: "100%", objectFit: "cover", height: "100%" }}
              />
              <img
                src={myimage2}
                alt="My Image"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default SignUp;
