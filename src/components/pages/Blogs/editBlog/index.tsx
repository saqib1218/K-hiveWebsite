import React, { useState } from 'react'
import myImageSmall from "./writeBlog.svg"
import { Button, Grid, Link, Typography, useMediaQuery, TextField, } from '@mui/material'
import { Paper } from '@mui/material';
import Editor from './myEditor';
import InsertPhotoOutlined from '@mui/icons-material/InsertPhotoOutlined';
import ThumbnailCard from './thumbnailCard';

const EditBlog = () => {
   const fonts = useMediaQuery("(max-width:1470px)");


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

      <div style={{ maxWidth: '1920px', margin: 'auto' }}>

         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '110px', marginBottom: '50px', textAlign: 'center' }}>
            <Typography style={{ font: 'Archivo', fontWeight: 'bold', fontSize: '36px', color: '#1E293B', lineHeight: '36px', marginBottom: '16px' }}>
               Share your knowledge
            </Typography>
            <Typography style={{ font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: '#C22522', lineHeight: '16px', textAlign: 'center' }}>
               Share your expertise with the world through our platform.
            </Typography>

         </div>

         <Grid container style={{ display: 'flex', marginBottom: '100px' }}
            spacing={2}
         >
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7} style={{ padding: '24px', }} >

               {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '110px', marginBottom: '50px' }}> */}
               {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ padding: '0px', }} > */}
               <TextField id="outlined-basic" placeholder='Blog title' variant="outlined" fullWidth style={{ marginBottom: '24px', borderRadius: '8px' }} />
               {/* </Grid> */}

               <Editor />

               {/* </div> */}
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} style={{ padding: '24px', }} >
               <ThumbnailCard />
            </Grid>

            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}
               style={{ padding: '24px', }}
            >
               <Button
                  variant="contained" style={{ textTransform: 'capitalize', float: 'right' }} color='error'>
                  Submit
               </Button>
            </Grid>

            {/* </Grid> */}
         </Grid>

      </div>
   </>
   )
}

export default EditBlog


{/* <input type="file" accept=".jpg, .png" onChange={handleFileUpload} style={{ textAlignLast: 'center' }} />
                  {thumbnailUrl && (
                     <img src={thumbnailUrl} alt="Thumbnail preview" style={{ width: '100%', height: '100px', objectFit: 'contain' }} />
                  )}
                  <Typography style={{ display: 'flex', flexDirection: 'row', font: 'Archivo', fontWeight: '400px', fontSize: '12px', color: '#475569', lineHeight: '12px', alignItems: 'center', }}>
                     Max&nbsp;Size:
                     <Typography style={{ font: 'Archivo', fontWeight: 'bold', fontSize: '12px', color: '#1E293B', lineHeight: '12px', }}>10MB</Typography>
                  </Typography> */}
