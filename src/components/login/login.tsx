import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, Paper, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import React from 'react'
import MyImage from "../../Assets/images/Rectangle 1.png"
import myimage2 from "../../Assets/images/Frame8.png"
// import { Copyright } from '@mui/icons-material';


  const theme = createTheme();
  
  export default function SignInSide() {
 
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),

      });
    };
   return (
      <>
     <ThemeProvider theme={theme}>
      <Grid container component="main" >
        <CssBaseline />
      
        <Grid item xs={12} sm={12} md={12} xl={6} lg={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop:35,
              marginBottom:30
            }}
          >
            
            <Typography component="h1" variant="h5" style={{color:"#0F172A",font:"Archivo",fontStyle:"normal",fontWeight:600,fontSize:36,lineHeight:"100%"}}>
              Login
            </Typography>
            <Typography style={{color:"#475569",fontFamily: 'Archivo',
fontStyle: "normal",
fontWeight: 400,
fontSize: "16px",
lineHeight: "150%",textAlign:"center", marginTop:16}}>Welcome back! Please enter your credentials to log in to your account</Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
              color='error'
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
               
              />
              <TextField
              color='error'
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{borderRadius:"20px"}}
              />
               <Grid item style={{display:"flex",justifyContent:"flex-end"}}>
                  <Link href="#" variant="body2" style={{color:"#C22522",textDecoration:"none",fontWeight:400,fontSize:16,fontFamily:"Roboto",fontStyle:"normal"}}>
                     
                    {"Forgot password?"}
                  </Link>
                </Grid>
              <Button
                type="submit"
                color='error'
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 ,borderRadius:"8px"}}
              >
                Login
              </Button>
              <Grid container justifyContent="center" alignItems="flex-end">
  <Grid item sx={{ display: "flex", flexDirection: "row" }}>
    <Typography style={{ color: "#4B5563" ,fontWeight:400,fontSize:16,fontFamily:"Roboto",fontStyle:"normal"}}>
      Don’t have an account?&nbsp; 
    </Typography>
    <Link
      href="/signup"
      variant="body2"
      style={{  color: "#C22522", textDecoration: "none",marginTop:"2px",fontWeight:600,fontSize:16,fontFamily :"Roboto",fontStyle:"normal" }}
    >
      {"Signup"}
    </Link>
  </Grid>
</Grid>
              
            </Box>
          </Box>
        </Grid>
        <Grid
          item
         xl={6}
          lg={6}
          xs={false}
          sm={false}
          md={6}
          sx={{
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' },
          }}
         
        >   
   <div style={{ position: 'relative',height:"100%" }}>
    <img src={MyImage} alt="My Image" style={{ width: '100%', objectFit: 'cover', height: '100%' }} />
    <img src={myimage2} alt="My Image" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
  </div>
      </Grid>
   
      </Grid>
    </ThemeProvider>
      </>
   )
}

