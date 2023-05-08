import React, { useState } from 'react'
import myImageSmall from "./writeBlog.svg"
import { Button, Grid, Link, Typography, useMediaQuery, } from '@mui/material'
import { Paper } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Editor from './myEditor';

const EditBlog = () => {
   const fonts = useMediaQuery("(max-width:1470px)");
   const [thumbnailUrl, setThumbnailUrl] = useState<null | string>(null);


   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files.length > 0) {
         const file = files[0];
         const fileSize = file.size / 1024 / 1024; // Convert to MB
         if (fileSize > 10) {
            alert('Please choose a file smaller than 10MB.');
         } else {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
               setThumbnailUrl(reader.result as string);
            };
         }
      }
   };


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

      <Grid container style={{ display: 'flex', justifyContent: 'center', marginBottom: '100px' }}>
         {/* <Grid item xs={12} sm={12} md={11} lg={10.5} xl={10} style={{ padding: '0px', }}> */}

         <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ padding: '0px', }} >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '110px', marginBottom: '50px' }}>
               <Typography style={{ font: 'Archivo', fontWeight: 'bold', fontSize: '36px', color: '#1E293B', lineHeight: '36px', marginBottom: '16px' }}>
                  Share your knowledge
               </Typography>
               <Typography style={{ font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: '#C22522', lineHeight: '16px', textAlign: 'center' }}>
                  Share your expertise with the world through our platform.
               </Typography>

            </div>
         </Grid>

         <Grid item xs={12} sm={12} md={7} lg={7} xl={7} style={{ padding: '0px', }} >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '110px', marginBottom: '50px' }}>

               <Editor />

            </div>
         </Grid>

         <Grid item xs={12} sm={12} md={4} lg={4} xl={4} style={{ padding: '0px', }} >
            <Paper style={{ height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', backgroundColor: '#F8FAFC', padding: '24px', boxShadow: '0px 0px 0px 0px', borderRadius: '16px' }}>
               <Typography style={{ font: 'Archivo', fontWeight: 'bold', fontSize: '24px', color: '#1E293B', lineHeight: '24px', textAlign: 'center', marginBottom: '24px' }}>
                  Upload Thumbnail
               </Typography>

               <div style={{ width: '100%', height: '60%', backgroundColor: '#FFFFFF' }}>
                  {/* <input type="file" accept=".jpg, .png" onChange={handleFileUpload} style={{ textAlignLast: 'center' }} />
                  {thumbnailUrl && (
                     <img src={thumbnailUrl} alt="Thumbnail preview" style={{ width: '100%', height: '100px', objectFit: 'contain' }} />
                  )}
                  <Typography style={{ display: 'flex', flexDirection: 'row', font: 'Archivo', fontWeight: '400px', fontSize: '12px', color: '#475569', lineHeight: '12px', alignItems: 'center', }}>
                     Max&nbsp;Size:
                     <Typography style={{ font: 'Archivo', fontWeight: 'bold', fontSize: '12px', color: '#1E293B', lineHeight: '12px', }}>10MB</Typography>
                  </Typography> */}
               </div>

               <Button variant="contained" style={{ textTransform: 'capitalize', width: '100%', marginTop: '24px', }} color='error'>
                  Upload&nbsp;Image
               </Button>
               <Button variant="outlined" style={{ textTransform: 'capitalize', width: '100%', marginTop: '24px', }} color='error'>
                  Delete&nbsp;Image
               </Button>

            </Paper>
         </Grid>







         {/* </Grid> */}
      </Grid>

   </>
   )
}

export default EditBlog