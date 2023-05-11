import React, { useState } from 'react'
import myImageSmall from "./writeBlog.svg"
import { Button, Grid, Link, Typography, useMediaQuery, TextField, } from '@mui/material'
import Editor from './myEditor';
import ThumbnailCard from './thumbnailCard';

const EditBlog = () => {
   const fonts = useMediaQuery("(max-width:1470px)");
   const isTablet = useMediaQuery("(max-width:900px)");


   return (<>
      <div style={{ position: "relative", marginTop: "40px", display: "flex", justifyContent: "center", }}>
         <img
            srcSet={`${myImageSmall} 400w`}
            sizes="(max-width: 600px) 400px, 800px"
            alt="about-us"
            style={{ width: "100%", }}
         />
         <div style={{ position: "absolute", top: "40%", }}>
            <Typography style={{ color: "#FFFF", fontSize: fonts ? "30px" : "60px", fontWeight: 600, font: "Archivo", }} >
               Write Blog
            </Typography>
         </div>
      </div>

      <div style={{ maxWidth: '1920px', margin: 'auto', marginBottom: '100px', padding: "24px" }}>

         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '110px', marginBottom: '50px', textAlign: 'center' }}>
            <Typography style={{ font: 'Archivo', fontWeight: 'bold', fontSize: '36px', color: '#1E293B', lineHeight: '36px', marginBottom: '16px' }}>
               Share your knowledge
            </Typography>
            <Typography style={{ font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: '#C22522', lineHeight: '16px', textAlign: 'center' }}>
               Share your expertise with the world through our platform.
            </Typography>

         </div>

         <Grid container style={{ display: 'flex', justifyContent: 'center' }} spacing={2} >
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}  >   <TextField id="outlined-basic" placeholder='Blog title' variant="outlined" fullWidth style={{ marginBottom: '24px', borderRadius: '8px' }} />
               <Editor />
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}  >
               <ThumbnailCard />
            </Grid>

            <Grid item xs={12} sm={12} md={7} lg={7} xl={7} >
               <Button
                  variant="contained" style={{ textTransform: 'capitalize', float: 'right', width: isTablet ? "100%" : '150px' }} color='error'>
                  Submit
               </Button>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}  >
            </Grid>

         </Grid>

      </div>
   </>
   )
}

export default EditBlog
