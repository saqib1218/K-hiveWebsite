import React from 'react'
import { Button, Grid, Typography, useMediaQuery } from '@mui/material';
// @ts-ignore 
import { A } from 'hookrouter';
import Polygon1 from '../../../Assets/polygon1';
import Ploygon2 from '../../../Assets/polygon2';
import Ploygon3 from '../../../Assets/polygon3';
import Polygon4 from '../../../Assets/polygon4';
import Polygon5 from '../../../Assets/polygon5';
import Polygon1red from '../../../Assets/polygon1red';
import Polygon2red from '../../../Assets/polygon2red';
import Polygon3red from '../../../Assets/polygon3red';
import Polygon4red from '../../../Assets/polygon4red';
import Polygon5red from '../../../Assets/polygon5red';


const AboutSection = () => {
   const [hoveredItem1, setHoveredItem1] = React.useState(false);
   const [hoveredItem2, setHoveredItem2] = React.useState(false);
   const [hoveredItem3, setHoveredItem3] = React.useState(false);
   const [hoveredItem4, setHoveredItem4] = React.useState(false);
   const [hoveredItem5, setHoveredItem5] = React.useState(false);

   const typo1 = { font: 'Archivo', fontWeight: 'bold', fontSize: '24px', color: '#1E293B', lineHeight: "24px", marginBottom: '16px' }
   const typo2 = { font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: '#475569', lineHeight: '24px', marginBottom: '16px' }
   const typo3 = { font: 'Archivo', fontWeight: '600px', fontSize: '32px', color: '#C22522', lineHeight: '24px', }
   const typo4 = { font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: '#475569', lineHeight: '24px', }
   const btn = { borderRadius: '6px', textTransform: 'none', backgroundColor: "#C22522", marginTop: '24px' }
   const isScreenSmall = useMediaQuery('(max-width:500px)');

   return (
      <Grid container spacing={2} style={{ justifyContent: 'center', }}>

         <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ alignItems: isScreenSmall ? 'center' : 'normal', display: 'flex', flexDirection: 'column' }}>
            <Typography style={typo1} sx={{ textAlign: isScreenSmall ? "center" : 'normal' }}>
               Transforming your vision into a viable digital solution.
            </Typography>
            <Typography style={typo2} sx={{ textAlign: isScreenSmall ? "center" : 'normal' }}>
               Kryptohive is a renowned company that specializes in providing advanced information technology solutions to clients worldwide. Our team of experts is dedicated to developing innovative and creative products and services that cater to the unique needs of our clients.
            </Typography>
            <Typography style={typo2} sx={{ textAlign: isScreenSmall ? "center" : 'normal' }}>
               Our web 2.0 has wide range of services includes web design and development, tailor-made applications, ERPs,CRMs, e-commerce solutions, business-to-business applications, business-to-client applications, managed hosting, and internet portal management. Our web 3.0 also has wide range of services includes Decentralized aplication development, Blockchain development and integration. Smart contract development, IoT integration, web 3.0 project management and implementation and web 3.0 consulting and strategy development.
            </Typography>
            <Typography style={typo2} sx={{ textAlign: isScreenSmall ? "center" : 'normal' }}>
               We take pride in the quality of our work, and our satisfied clients around the world are a testament to our commitment to delivering exceptional services. As a technology leader, we are constant ly exploring new avenues to expand our expertise and export quality software worldwide
            </Typography>
            <A href="/" style={{ textDecoration: 'none' }}>
               <Button variant="contained" size='large' sx={{
                  width: isScreenSmall ? "100%" : "30%", borderRadius: '6px', textTransform: 'none', backgroundColor: "#C22522", marginTop: '24px', '&:hover': {
                     backgroundColor: '#C22522',
                     borderColor: '#C22522',
                  }
               }} >
                  Get in touch
               </Button>
            </A>
         </Grid>

         <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
            <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>

               <Grid item xs={6} sm={2.4} md={4} lg={4} xl={4}
                  style={{ display: 'grid', justifyItems: 'center', textAlign: 'center' }}
                  onMouseEnter={() => setHoveredItem1(true)}
                  onMouseLeave={() => setHoveredItem1(false)}
               >
                  {hoveredItem1 ? <Polygon1red /> : <Polygon1 />}
                  <Typography style={typo3}>12+</Typography>
                  <Typography style={typo4}>Years of Experience</Typography>

               </Grid>
               <Grid item xs={6} sm={2.4} md={4} lg={4} xl={4}
                  style={{ display: 'grid', justifyItems: 'center', textAlign: 'center' }}
                  onMouseEnter={() => setHoveredItem2(true)}
                  onMouseLeave={() => setHoveredItem2(false)}
               >
                  {hoveredItem2 ? <Polygon2red /> : <Ploygon2 />}
                  <Typography style={typo3}>100%</Typography>
                  <Typography style={typo4}>Client Satisfaction</Typography>

               </Grid>
               <Grid item xs={6} sm={2.4} md={4} lg={4} xl={4}
                  style={{ display: 'grid', justifyItems: 'center', textAlign: 'center' }}
                  onMouseEnter={() => setHoveredItem3(true)}
                  onMouseLeave={() => setHoveredItem3(false)}
               >
                  {hoveredItem3 ? <Polygon3red /> : <Ploygon3 />}
                  <Typography style={typo3}>50+</Typography>
                  <Typography style={typo4}>Countries we Served</Typography>

               </Grid>
               <Grid item xs={6} sm={2.4} md={4} lg={4} xl={4}
                  style={{ display: 'grid', justifyItems: 'center', textAlign: 'center' }}
                  onMouseEnter={() => setHoveredItem4(true)}
                  onMouseLeave={() => setHoveredItem4(false)}
               >
                  {hoveredItem4 ? <Polygon4red /> : <Polygon4 />}
                  <Typography style={typo3}>40+</Typography>
                  <Typography style={typo4}>Dedicated employees</Typography>

               </Grid>
               <Grid item xs={6} sm={2.4} md={4} lg={4} xl={4}
                  style={{ display: 'grid', justifyItems: 'center', textAlign: 'center' }}
                  onMouseEnter={() => setHoveredItem5(true)}
                  onMouseLeave={() => setHoveredItem5(false)}
               >
                  {hoveredItem5 ? <Polygon5red /> : <Polygon5 />}
                  <Typography style={typo3}>100+</Typography>
                  <Typography style={typo4}>Minimal Timelines</Typography>

               </Grid>
            </Grid>
         </Grid>
      </Grid >
   )
}

export default AboutSection