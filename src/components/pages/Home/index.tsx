import React, { useEffect, useState } from 'react'
import AboutSection from './about-section';
import TechnologiesSection from './technologies-section';
import TeamSection from './team-section';
import ServicesSection from './services-section';
import { useTheme } from '@mui/material/styles';
import { Button, Grid, Typography, useMediaQuery, } from '@mui/material';
// @ts-ignore 
import Typed from 'react-typed';
// @ts-ignore 
import { A } from 'hookrouter';

const myVideo = require('../../../Assets/video/Video.mp4');
const bgImage = require('../../../Assets/images/bg.jpg');

const WebTexts = ["Web 3.0 Development", "Web 2.0 Development"];
const BlockchainTexts = [
   "Blockchain | Web 3 | Metaverse | XR",
   "Web apps | Website | Mobile apps"
];


const Home = () => {
   const [webIndex, setWebIndex] = useState(0);
   const [blockchainIndex, setBlockchainIndex] = useState(0);
   const [webText, setWebText] = useState(WebTexts[webIndex]);
   const [blockchainText, setBlockchainText] = useState(
      BlockchainTexts[blockchainIndex]
   );

   useEffect(() => {
      const webTimer = setInterval(() => {
         setWebIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
         const newIndex = webIndex === 0 ? 1 : 0;
         setTimeout(() => {
            setWebText(WebTexts[newIndex]);
         }, 2500); // pause for 2.5 seconds between iterations
      }, 5000);

      const blockchainTimer = setInterval(() => {
         setBlockchainIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
         const newIndex = blockchainIndex === 0 ? 1 : 0;
         setTimeout(() => {
            setBlockchainText(BlockchainTexts[newIndex]);
         }, 2500); // pause for 2.5 seconds between iterations
      }, 5000);

      return () => {
         clearInterval(webTimer);
         clearInterval(blockchainTimer);
      };
   }, [webIndex, blockchainIndex]);

   useEffect(() => {
      setWebText(WebTexts[webIndex]);
   }, [webIndex]);

   useEffect(() => {
      setBlockchainText(BlockchainTexts[blockchainIndex]);
   }, [blockchainIndex]);


   const typo0 = { font: 'Archivo', fontWeight: 'bold', color: '#FFFFFF', lineHeight: '60px', marginBottom: '16px' }
   const typo1 = { font: 'Archivo', fontWeight: 'bold', fontSize: '36px', color: '#1E293B', lineHeight: '36px', marginBottom: '16px' }
   const typo2 = { font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: '#C22522', lineHeight: '16px' }
   const typo3 = { font: 'Archivo', fontWeight: 'bold', fontSize: '36px', color: '#FFFFFF', lineHeight: '36px', marginBottom: '16px' }
   const typo4 = { font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: '#ffffff', lineHeight: '16px' }
   const btn = {
      borderRadius: '6px', textTransform: 'none', backgroundColor: "#C22522", marginTop: '24px', '&:hover': {
         backgroundColor: '#C22522',
         borderColor: '#C22522',
      }
   }
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // hides the element for screen sizes below 600px
   const isScreenSmall = useMediaQuery('(max-width:700px)');
   return (
      <>
         <div style={{ position: 'relative', width: '100%', maxHeight: '1080px', marginTop: '55px' }}>
            <video
               src={myVideo}
               autoPlay
               loop
               muted
               style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', width: '100%', height: '99%', top: "0px", left: "0px", backgroundColor: `rgba(0,0,0,.6)`, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
               <Typography style={{ ...typo0, fontSize: isScreenSmall ? "36px" : '60px', }} sx={{ textAlign: 'center' }}>
                  <Typed
                     strings={[webText]}
                     typeSpeed={200}
                     backSpeed={110}
                     loop
                  />
               </Typography>
               <Typography style={typo4}>
                  <Typed
                     strings={[blockchainText]}
                     typeSpeed={100}
                     backSpeed={60}
                     loop
                  />
               </Typography>
               <A href="/contact-us" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" size='large' sx={btn}>
                     Request&nbsp;A&nbsp;Quote
                  </Button>
               </A>
            </div>
         </div>

         <div style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            minHeight: '1000px'

         }}>
            <Grid container style={{ justifyContent: 'center' }}>
               <Grid item xs={11} sm={11} md={10} lg={10}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '110px', marginBottom: '50px' }}>
                     <Typography style={typo1}>
                        About Kryptohive
                     </Typography>
                     <Typography style={typo2}>
                        Excellence, Integrity, People Centric Approach
                     </Typography>
                  </div>
                  <AboutSection />
               </Grid>

               <Grid item xs={11} sm={11} md={10} lg={10}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '110px', marginBottom: '50px' }}>
                     <Typography style={typo1}>
                        Core Services
                     </Typography>
                     <Typography style={typo2}>
                        Pioneering The Future Of Technology
                     </Typography>
                  </div>
                  <ServicesSection />

               </Grid>


               <div style={{ height: '375px', width: '100%', backgroundColor: ' #1C1C1C', marginTop: "95px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography style={typo3} sx={{ textAlign: 'center' }}>
                     Ready For Your Digital Success?
                  </Typography>
                  <Typography style={typo4}>
                     Our services solve any business problem.
                  </Typography>
                  <A href="/contact-us" style={{ textDecoration: 'none' }}>
                     <Button variant="contained" size='large' sx={btn}>
                        Contact&nbsp;Us
                     </Button>
                  </A>
               </div>

               {!isScreenSmall && (
                  <Grid item xs={10} sm={10} md={10} lg={10}>
                     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '110px', marginBottom: '50px' }}>
                        <Typography style={typo1} sx={{ textAlign: 'center' }}>
                           Technologies We Work In
                        </Typography>
                        <Typography style={typo2}>
                           Pioneering The Future Of Technology
                        </Typography>
                     </div>
                     <TechnologiesSection />
                  </Grid>
               )}


               <Grid item xs={10} sm={10} md={10} lg={10} style={{ marginBottom: '55px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '110px', marginBottom: '50px' }}>
                     <Typography style={typo1}>
                        Our Team
                     </Typography>
                     <Typography style={typo2}>
                        Meet Our Talented Team
                     </Typography>
                  </div>


                  <TeamSection />

               </Grid>
            </Grid>

         </div>

      </>
   )
}

export default Home