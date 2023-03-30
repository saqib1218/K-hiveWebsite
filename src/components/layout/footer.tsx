import React, { Fragment } from "react";
import {
  Grid,
  IconButton,
  iconButtonClasses,
  Paper,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import Button from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import IconButton from '@mui/material';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import c from '@mui/icons-material/LocationOn';
//@ts-ignore
import { A } from "hookrouter";
const Footer = () => {
  return (
    <>
      <Grid gap={10}
        container 
        style={{
          maxHeight: "348px",
          width: "100%",
          backgroundColor: "#1C1C1C",
          padding: 56,
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
              <IconButton style={{ paddingLeft: "0" }}>
                <FacebookIcon
                  sx={{
                    color: "red",
                    fontSize: "25px",
                    backgroundColor: "white",
                    "&:hover": { backgroundColor: "red", color: "white" },
                  }}
                />
              </IconButton>
              <IconButton style={{ paddingLeft: "0" }}>
                <InstagramIcon
                  sx={{
                    color: "red",
                    fontSize: "25px",
                    backgroundColor: "white",
                    "&:hover": { backgroundColor: "red", color: "white" },
                  }}
                />
              </IconButton>
              <IconButton style={{ paddingLeft: "0" }}>
                <LinkedInIcon
                  sx={{
                    color: "red",
                    fontSize: "25px",
                    backgroundColor: "white",
                    "&:hover": { backgroundColor: "red", color: "white" },
                  }}
                />
              </IconButton>
              <IconButton style={{ paddingLeft: "0" }}>
                <TwitterIcon
                  sx={{
                    color: "red",
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
        <Grid item xl={3} sm={3} xs={3} md={3}>
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
        <Grid item xl={3} sm={3} xs={3} md={3}>
          <div>
            <Typography
              style={{ fontSize: "20px", fontWeight: "700", color: "#FFFF" }}
            >
              Contacts
            </Typography>
          </div>

          <div>
            <Typography
              style={{ color: "#FFFF", fontSize: "16px", fontWeight: "400" }}
            >
              {" "}
              <LocationOnIcon style={{ color: "#FFFF",marginRight:"12px" }} />
              Phase 4, Floor 2nd, Plaza, 148 Block D St, Civic Center Bahria
              Town, Rawalpindi
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
        <Grid item></Grid>
      </Grid>
      <Paper
        style={{
          width: "100%",
          maxHeight: "85  px",
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
    </>
  );
};

export default Footer;
