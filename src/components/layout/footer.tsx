import React, { Fragment } from "react";
import {
  Grid,
  IconButton,
  
  Paper,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import Button from "@mui/material/Button";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import IconButton from '@mui/material';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TextField from '@mui/material/TextField';
// import c from '@mui/icons-material/LocationOn';
//@ts-ignore
import { A } from "hookrouter";
const Footer = () => {
  return (
    <>
    <div>
      <Grid xl={12} md={12}
       gap={4}
        container 
        style={{
          maxHeight: "348px",
          width: "100%",
          backgroundColor: "#1C1C1C",
          padding: 56,
        // marginBottom:56
        }}
      >
        <Grid 
        item xl={3} sm={3} xs={3} md={3}>
          <div>
            <Typography color={"#C22522"}>KRYPTOHIVE</Typography>
            <Typography
              color={"#FFF"}
              style={{
                fontSize: "16px",
                fontWeight: "400",
                marginTop: "16px ",
              }}
            >
              Why settle for less when krytohive is here, contact us now and
              boost your business in no time.
            </Typography>
            {/* <Button> */}
            <div style={{ marginTop: "16px " }}>
              {/* //@ts-ignore */}
              <IconButton style={{ paddingLeft: "0" ,marginRight:"8px"}}>
                <FacebookIcon
                  sx={{
                    color: "black",
                    fontSize: "25px",
                    backgroundColor: "white",
                    "&:hover": { backgroundColor: "red", color: "WHITE" },
                  }}
                />
              </IconButton>
              <IconButton style={{ paddingLeft: "0",marginRight:"8px" }}>
                <InstagramIcon
                  sx={{
                    color: "black",
                    fontSize: "25px",
                    backgroundColor: "white",
                    "&:hover": { backgroundColor: "red", color: "white" },
                  }}
                />
              </IconButton>
              <IconButton style={{ paddingLeft: "0",marginRight:"8px" }}>
                <LinkedInIcon
                  sx={{
                    color: "black",
                    fontSize: "25px",
                    backgroundColor: "white",
                    "&:hover": { backgroundColor: "red", color: "white" },
                  }}
                />
              </IconButton>
              <IconButton style={{ paddingLeft: "0",marginRight:"8px" }}>
                <TwitterIcon
                  sx={{
                    color: "black",
                    fontSize: "25px",
                    backgroundColor: "white",
                    "&:hover": { backgroundColor: "red", color: "white" },
                  }}
                />
              </IconButton>
            </div>

            {/* </Button> */}
          </div>
        </Grid>
        <Grid item xl={2    } sm={2} xs={2} md={2}>
          <div>
            <Typography
              style={{ fontSize: "20px", fontWeight: "700", color: "#FFFF" }}
            >
              Company
            </Typography>
            <div>
              <A href={"/"} style={{ textDecoration: "none" }}>
                <Typography
                  style={{
                    fontWeight: "400",
                    color: "#FFFF",
                    fontSize: "16px",
                    marginTop: "10px",
                  }}
                >
                  Home{" "}
                </Typography>
              </A>
              <A href={"/about"} style={{ textDecoration: "none" }}>
                <Typography
                  style={{
                    fontWeight: "400",
                    color: "#FFFF",
                    fontSize: "16px",
                    marginTop: "10px",
                  }}
                >
                  About us{" "}
                </Typography>
              </A>{" "}
              <A href={"/careers"} style={{ textDecoration: "none" }}>
                <Typography
                  style={{
                    fontWeight: "400",
                    color: "#FFFF",
                    fontSize: "16px",
                    marginTop: "10px",
                  }}
                >
                  Services{" "}
                </Typography>
              </A>{" "}
              <A href={"/contact-us"} style={{ textDecoration: "none" }}>
                <Typography
                  style={{
                    fontWeight: "400",
                    color: "#FFFF",
                    fontSize: "16px",
                    marginTop: "10px",
                  }}
                >
                  Careers{" "}
                </Typography>
              </A>
            </div>
          </div>
        </Grid>
        <Grid item xl={4} sm={3} xs={3} md={3}>
          <div>
            <Typography
              style={{ fontSize: "20px", fontWeight: "700", color: "#FFFF" }}
            >
              Contacts
            </Typography>
         

          
            <Typography
             style={{display:"flex"}}
            >
              {" "}
              <LocationOnIcon style={{ color: "#FFFF",marginRight:"12px",marginTop:"8px" }} />
              <Typography  style={{ color: "#FFFF", fontSize: "16px", fontWeight: "400" ,marginTop:"8px"}}>Phase 4, Floor 2nd, Plaza, 148 Block D St, Civic Center Bahria
              Town, Rawalpindi</Typography>
              
            </Typography>
            <Typography style={{ color: "#FFFF", fontSize: "16px", fontWeight: "400", marginTop:"14px" }}>
            <LocalPhoneIcon style={{ color: "#FFFF",marginRight:"12px",marginBottom:"-3px" }} />
            051 8776774
          </Typography>
          <Typography style={{ color: "#FFFF", fontSize: "16px", fontWeight: "400", marginTop:"14px" }}>
            <MailOutlineIcon style={{ color: "#FFFF",marginRight:"12px",marginBottom:"-3px" }} />
            info@krytohive.com
          </Typography>
        

          </div>

        </Grid>
        <Grid item xl={2} sm={2} xs={2} md={2} >
        <div>
            <Typography
              style={{ fontSize: "20px", fontWeight: "700", color: "#FFFF" }}
            >
              Newsletter
            </Typography>
            <Typography
              color={"#FFF"}
              style={{
                fontSize: "16px",
                fontWeight: "400",
                marginTop: "20px ",
              }}
            >
              Why settle for less when krytohive is here, contact us now and
              boost your business in no time.
            </Typography>
          
          </div>
          <TextField id="outlined-basic" size="small" fullWidth label="Email address" variant="filled" style={{backgroundColor:"white",marginTop:"20px",borderRadius:"5px" }} />
            <Button variant="contained" color="error" fullWidth style={{marginTop:"12px", }}>Subscribe</Button>
        </Grid>
      </Grid>
      </div>
      <div>
      <Paper
        style={{
          width: "100%",
          maxHeight: "85px",
          backgroundColor: "#C22522",
          borderRadius: "0",
        }}
      >
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "30px",
            color: "#FFFF",
          }}
        >
          {" "}
          © 2023 KRYPTOHIVE - ALL RIGHTS RESERVED KRYPTOHIVE
        </Typography>
      </Paper>
      </div>
    </>
  );
};

export default Footer;
