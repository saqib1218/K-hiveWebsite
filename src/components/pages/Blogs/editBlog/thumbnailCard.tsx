import React, { useState } from 'react'
import { Button, Grid, Link, Typography, useMediaQuery, } from '@mui/material'
import { Paper } from '@mui/material';
import InsertPhotoOutlined from '@mui/icons-material/InsertPhotoOutlined';



const ThumbnailCard = () => {

   const [thumbnailUrl, setThumbnailUrl] = useState<null | string>(null);

   const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files.length > 0) {
         const file = files[0];
         const fileSize = file.size / 1024 / 1024; // Convert to MB
         if (fileSize > 10) {
            alert('Please choose a file smaller than 10MB.');
         } else if (!/(\.jpg|\.jpeg|\.png)$/i.test(file.name)) {
            alert('Please choose a JPG or PNG image.');
         } else {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
               setThumbnailUrl(reader.result as string);
            };
         }
      }
   };
   // This code checks that the file type is either jpg, jpeg, or png using a regular expression, and shows an error message if it's not.

   const handleDelete = () => {
      setThumbnailUrl(null);
   };


   return (
      <Paper style={{ height: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', backgroundColor: '#F8FAFC', padding: '24px', boxShadow: '0px 0px 0px 0px', borderRadius: '16px' }}>
         <Typography style={{ font: 'Archivo', fontWeight: 'bold', fontSize: '24px', color: '#1E293B', lineHeight: '24px', textAlign: 'center', marginBottom: '24px' }}>
            Upload Thumbnail
         </Typography>

         <div style={{ width: '100%', minHeight: '45%', backgroundColor: '#FFFFFF', borderRadius: '8px ', border: '1px dashed ', borderColor: '#E2E8F0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {thumbnailUrl ? (
               <img
                  src={thumbnailUrl}
                  alt="Thumbnail"
                  style={{ width: '100%', height: '100%', borderRadius: '8px ', }}
               />
            ) : (

               <div style={{ width: '80px', height: '80px', padding: "25px", borderRadius: '100px', border: '1px solid #E2E8F0' }}>
                  <InsertPhotoOutlined />
               </div>
            )}
         </div>

         <Button variant="contained" style={{ textTransform: 'capitalize', width: '100%', marginTop: '24px', zIndex: 1000, }} color='error' component="label">
            Upload&nbsp;Image
            <input
               type="file"
               accept=".jpg,.jpeg,.png"
               style={{ display: 'none' }}
               onChange={handleUpload}
            />
         </Button>
         <Button
            disabled={!thumbnailUrl}
            onClick={handleDelete}
            variant="outlined" style={{ textTransform: 'capitalize', width: '100%', marginTop: '24px', marginBottom: '24px', }} color='error'>
            Delete&nbsp;Image
         </Button>
         <Typography style={{ display: 'flex', flexDirection: 'row', font: 'Archivo', fontWeight: '400px', fontSize: '12px', color: '#475569', lineHeight: '12px', alignItems: 'center', }}>
            Image&nbsp;type:
            <Typography style={{ font: 'Archivo', fontWeight: 'bold', fontSize: '12px', color: '#1E293B', lineHeight: '12px', }}>JPG or PNG</Typography>
         </Typography>
         <Typography style={{ display: 'flex', flexDirection: 'row', font: 'Archivo', fontWeight: '400px', fontSize: '12px', color: '#475569', lineHeight: '12px', alignItems: 'center', marginTop: '8px', }}>
            Max&nbsp;Size:
            <Typography style={{ font: 'Archivo', fontWeight: 'bold', fontSize: '12px', color: '#1E293B', lineHeight: '12px', }}>10MB</Typography>
         </Typography>
      </Paper>
   )
}

export default ThumbnailCard