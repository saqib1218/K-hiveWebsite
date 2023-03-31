import React from 'react'
import { Button, Grid, Typography } from '@mui/material';
// @ts-ignore 
import { A } from 'hookrouter';
import { makeStyles } from '@mui/styles';

const myVideo = require('../../../video/Video.mp4');
const bgImage = require('../../../Assets/bg.jpg');

const useStyles = makeStyles({
   video: {
      width: '100%', height: '100%', objectFit: 'cover'
   },
   about: {
      display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '110px', marginBottom: '50px'
   },
   gridContainer: {
      justifyContent: 'center', paddingLeft: "190px", paddingRight: '190px'
   },
   typoOne: {
      font: 'Archivo', fontWeight: '600px', fontSize: '36px', color: '#1E293B', lineHeight: '36px', marginBottom: '16px'
   },
   typo2: {
      font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: '#C22522', lineHeight: '16px'
   },
   typo3: {
      font: 'Archivo', fontWeight: '600px', fontSize: '24px', color: '#1E293B', lineHeight: "24px", marginBottom: '16px'
   },
   typo4: {
      font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: '#475569', lineHeight: '24px', marginBottom: '16px'
   },
   active: {
      textDecoration: 'underline',
      color: '#C22522'
   },
});

const Home = () => {
   const classes = useStyles();

   return (<>
      <video
         src={myVideo}
         autoPlay
         loop
         muted
         className={classes.video}
      />
      <div style={{
         backgroundImage: `url(${bgImage})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center',
         width: '100%',
         minHeight: '2000px'
      }}>
         <div className={classes.about}>
            <Typography className={classes.typoOne}>About Kryptohive</Typography>
            <Typography className={classes.typo2}>Excellence, Integrity, People Centric Approach</Typography>
         </div>

         <Grid container spacing={2} className={classes.gridContainer}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
               <Typography className={classes.typo3}>
                  Transforming your vision into a viable digital solution.
               </Typography>
               <Typography className={classes.typo4}>
                  Kr yptohive is a renowned company thatspecializes in providing advanced informationtechnology solutions to clients worldwide. Ourteam of experts is dedicated to developinginnovative and creative products and servicesthat cater to the unique needs of our clients.
               </Typography>
               <Typography className={classes.typo4}>
                  Our web 2.0 has wide range of services includes web design anddevelopment, tailor-made applications, ERPs,CRMs, e-commerce solutions, business-to-business applications, business-to-clientapplications, managed hosting, and internetportal management. Our web 3.0 also has wide range of services includes Decentralized aplication development, Blockchain development and integration. Smart contract development,IoT integration, web 3.0 project management and implementation and web 3.0 consulting and strategy development.
               </Typography>
               <Typography className={classes.typo4}>
                  We take pride in t he quality of our work, and oursatisfied clients around t he world are a testament toour commitment to delivering exceptional ser vices.As a technology leader, we are constant ly exploringnew avenues to expand our exper tise and expor tquality software worldwide
               </Typography>

               <A href="/" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" sx={{ borderRadius: '6px', textTransform: 'none', backgroundColor: "#C22522", marginTop: '24px' }}>
                     Get&nbsp;in&nbsp;touch
                  </Button>
               </A>

            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>

            </Grid>
         </Grid>
      </div>
   </>
   )
}

export default Home