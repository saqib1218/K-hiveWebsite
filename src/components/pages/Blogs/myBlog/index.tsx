import React from 'react'
import { Button, Grid, Link, Typography, useMediaQuery, TextField, Paper, } from '@mui/material'
import myImageSmall from "./myBlog.svg"
import { West } from '@mui/icons-material';
import badgeImage from "../testEllipse.jpg"
import { styled } from '@mui/material/styles';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';




const MyBlog = () => {
   const fonts = useMediaQuery("(max-width:1470px)");
   const isTablet = useMediaQuery("(max-width:800px)");


   return (
      <>
         <div style={{ position: "relative", marginTop: "40px", display: "flex", justifyContent: "center", }}>
            <img
               srcSet={`${myImageSmall} 400w`}
               sizes="(max-width: 600px) 400px, 800px"
               alt="about-us"
               style={{ width: "100%", }}
            />
            <div style={{ position: "absolute", top: "40%", }}>
               <Typography style={{ color: "#FFFF", fontSize: fonts ? "30px" : "60px", fontWeight: 600, font: "Archivo", }} >
                  Driving version control at Uber
               </Typography>
            </div>
         </div>


         <div style={{ maxWidth: '1920px', margin: 'auto', marginBottom: '100px', marginTop: '100px', padding: "24px" }}>

            <Grid container
               style={{ justifyContent: 'center' }}
               spacing={2}
            >

               <Grid item xs={11} sm={5} md={7} lg={7} xl={7}>
                  <Button variant="text" size='large' style={{ color: '#C22522', fontWeight: 'bold', textTransform: 'capitalize', alignItems: 'center', marginRight: '8px', marginBottom: '24px' }}
                     startIcon={<West />}>
                     Back
                  </Button>

                  <div style={{ width: '100%', display: 'flex', flexDirection: "row", alignItems: 'center', marginBottom: '24px' }}>
                     <img src={badgeImage} style={{ width: '50px', height: '50px', marginRight: '8px' }} />
                     <Typography sx={{ font: 'Archivo', fontSize: '16px', fontWeight: 'bold', color: '#1E293B', lineHeight: '16px', marginRight: '8px' }}>
                        Uber&nbsp;Eats
                     </Typography>
                     <div style={{ width: '100%', display: 'flex', flexDirection: "row", alignItems: 'baseline', }}>
                        <CalendarTodayOutlinedIcon style={{ width: '15px', height: '15px', color: '#475569', marginRight: '8px' }} />
                        <Typography style={{ color: '#475569', marginRight: '8px' }}>
                           Published&nbsp;at
                        </Typography>
                     </div>
                  </div>

                  <div style={{ maxWidth: '900px' }}>

                     <Typography style={{ marginBottom: '24px' }}>
                        Sed quia conse quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                     </Typography>

                     <Typography style={{ marginBottom: '24px' }}>
                        Sed quia conse quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                     </Typography>

                     <Typography style={{ marginBottom: '24px' }}>
                        Sed quia conse quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                     </Typography>

                     <Typography style={{ marginBottom: '24px' }}>
                        Sed quia conse quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                     </Typography>

                  </div>

               </Grid>

               <Grid item xs={11} sm={5} md={4} lg={4} xl={4}>
                  <Paper style={{ minHeight: '700px', backgroundColor: '#E2E8F0', borderRadius: '16px', padding: '24px', }}>

                  </Paper>

                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '80px', marginBottom: '80px', }}>

                     <Paper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', backgroundColor: '#E2E8F0', padding: '24px', borderRadius: '16px', gap: '24px' }}>
                        <Typography style={{ font: 'Archivo', fontWeight: 'bold', fontSize: '24px', color: '#1E293B', lineHeight: '24px', textAlign: 'center' }}>
                           Want&nbsp;share&nbsp;knowledge?
                        </Typography>
                        <Typography style={{ font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: '#475569', lineHeight: '24px', textAlign: 'center' }}>
                           Unlock your creativity and share your unique perspective with the world. It only takes a few minutes to get started on your blogging journey.
                        </Typography>
                        <Button variant="contained" style={{ textTransform: 'capitalize' }} fullWidth color='error'>
                           Start&nbsp;Writing&nbsp;Your&nbsp;Blog&nbsp;Now
                        </Button>

                     </Paper>
                  </Grid>

               </Grid>





            </Grid>



         </div>

      </>


   )
}

export default MyBlog