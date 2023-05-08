import React from 'react'
import { Button, Grid, Typography, useMediaQuery, CardActionArea, CardActions, Box, } from '@mui/material'
import { Paper } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


import thumbnailImage0 from "./Rectangle5.jpg"
import badgeImage from "./testEllipse.jpg"
// import { truncate } from 'fs';



const typobOX1 = { font: 'Archivo', fontSize: '24px', fontWeight: '700px', color: '#1E293B', lineHeight: '24px' }
const typobOX2 = { font: 'Archivo', fontSize: '16px', fontWeight: '400px', color: '#475569', lineHeight: '24px' }
const typobox3 = { font: 'Archivo', fontSize: '16px', fontWeight: '500px', color: '#1E293B', lineHeight: '16px' }


const BlogCardFullWidth = () => {
   const [hoveredItem, setHoveredItem] = React.useState(false);


   const blogText = 'Sed quia conse quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.';

   return (
      <>
         {/* <Grid item md={12} lg={12} xl={12}>
            <Paper style={{ borderRadius: '8px', backgroundColor: '#F8FAFC', maxHeight: '600px', display: 'flex', flexDirection: "row", }}>
               <div style={{ width: "40%", maxHeight: "350px", }}>
                  <img style={{ width: '100%', objectFit: 'cover', height: '100%  ' }} src={thumbnailImage0} />
               </div>

               <div style={{ width: "100%", padding: '16px' }}>

                  <div style={{ width: '100%', display: 'flex', flexDirection: "row", alignItems: 'baseline', marginTop: '8px', marginBottom: '8px' }}>
                     <CalendarTodayOutlinedIcon style={{ width: '15px', height: '15px', color: '#475569', marginRight: '3px' }} />
                     <Typography>date</Typography>
                  </div>

                  <Typography style={{ ...typobOX1, marginBottom: '8px' }}>
                     Driving version control at Uber
                  </Typography>
                  <Typography style={typobOX2}>
                     NIRISS is a contribution from the Canadian Space Agency (CSA), so NASA and CSA personnel are collaborating to troubleshoot the issue, the statement notes.
                     Under normal conditions, NIRISS can operate in four different modes(opens in new tab), according to NASA. It can operate as a camera when JWST's other instruments are occupied, it can analyze light signatures to study the atmospheres of small exoplanets, it can conduct high-contrast imaging, and it has a mode tailored to finding distant galaxies.
                     NIRISS isn't the first instrument on JWST to run into trouble. In August, a grating wheel inside the observatory's Mid-Infrar....
                  </Typography>

                  <div style={{ width: '100%', display: 'flex', flexDirection: "row", marginTop: '16px' }}>

                     <div style={{ width: '100%', display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                        <img src={badgeImage} style={{ width: '50px', height: '50px', marginRight: '8px' }} />
                        <Typography style={typobox3}>Uber Eats</Typography>
                     </div>

                     <Button variant="text" size='large' style={{ color: '#C22522', textTransform: 'capitalize', alignItems: 'center', marginRight: '8px' }}
                        endIcon={<ArrowForwardIcon />}>
                        Read&nbsp;More
                     </Button>

                  </div>
               </div>
            </Paper>
         </Grid> */}
         <Grid item xs={11} sm={11} md={12} lg={12} xl={12} >
            <Card sx={{ display: 'flex', maxHeight: '350px', borderRadius: '8px', backgroundColor: '#F8FAFC' }}>
               <CardMedia
                  component="img"
                  sx={{ width: "40%" }}
                  image={thumbnailImage0}
                  alt="Live from space album cover"
               />

               <div style={{ display: 'flex', flexDirection: "column", }}>

                  <CardContent style={{ flex: 1 }}>
                     <div style={{ width: '100%', display: 'flex', flexDirection: "row", alignItems: 'baseline', marginBottom: '8px' }}>
                        <CalendarTodayOutlinedIcon style={{ width: '15px', height: '15px', color: '#475569', marginRight: '3px' }} />
                        <Typography
                           style={{
                              font: 'Archivo',
                              fontSize: '16px',
                              fontWeight: '400px',
                              color: '#475569',
                              lineHeight: '16px',
                           }}
                        >date</Typography>
                     </div>

                     <Typography
                        onMouseEnter={() => { setHoveredItem(true) }} onMouseLeave={() => { setHoveredItem(false) }}
                        style={{
                           font: 'Archivo',
                           fontSize: '24px',
                           lineHeight: '24px',
                           fontWeight: 'bold',
                           marginBottom: '8px',
                           cursor: 'pointer',
                           color: hoveredItem ? '#C22522' : ' #1E293B'
                        }}>
                        Driving version control at Uber
                     </Typography>
                     <Typography
                        style={{
                           font: 'Archivo',
                           fontSize: '16px',
                           fontWeight: '400px',
                           color: '#475569',
                           lineHeight: '24px',
                           overflow: 'hidden',
                           textOverflow: 'ellipsis',
                           display: '-webkit-box',
                           WebkitLineClamp: '5',
                           WebkitBoxOrient: 'vertical',

                        }}>
                        {blogText}
                     </Typography>
                  </CardContent>


                  <CardActions>
                     <div style={{ width: '100%', display: 'flex', flexDirection: "row", padding: '8px' }}>

                        <div style={{ width: '100%', display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                           <img src={badgeImage} style={{ width: '50px', height: '50px', marginRight: '8px' }} />
                           <Typography style={{ font: 'Archivo', fontSize: '16px', fontWeight: 'bold', color: '#1E293B', lineHeight: '16px' }}>Uber Eats</Typography>
                        </div>

                        <Button variant="text" size='large' style={{ color: '#C22522', fontWeight: 'bold', textTransform: 'capitalize', alignItems: 'center', marginRight: '8px' }}
                           endIcon={<ArrowForwardIcon />}>
                           Read&nbsp;More
                        </Button>

                     </div>
                  </CardActions>
               </div>
            </Card>
         </Grid >
      </>
   )
}

export default BlogCardFullWidth