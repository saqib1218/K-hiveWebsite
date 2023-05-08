import React from 'react'
import myImageSmall from "./blog.svg"
import testImg from "./testRectangle.svg"
import { Button, Grid, Typography, useMediaQuery } from '@mui/material'
import { Paper } from '@mui/material';
import BlogCard from './blogcard';
import BlogCardFullWidth from './blogCardFullWidth';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
   palette: {
      primary: {
         main: '#C22522',
      },
   },
});


const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];


const Blogs = () => {
   const typo1 = { font: 'Archivo', fontWeight: 'bold', fontSize: '36px', color: '#1E293B', lineHeight: '36px', marginBottom: '16px' }
   const typo2 = { font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: '#C22522', lineHeight: '16px' }

   const fonts = useMediaQuery("(max-width:1470px)");
   const isMobile = useMediaQuery('(max-width:750px)');

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
                  Latest news & articles
               </Typography>
            </div>
         </div>


         <Grid container style={{ display: 'flex', justifyContent: 'center', marginBottom: '100px' }}>
            <Grid item xs={12} sm={12} md={11} lg={10.5} xl={10} style={{ padding: '0px', }}>

               <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ padding: '0px', }} >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '110px', marginBottom: '50px' }}>
                     <Typography style={{ font: 'Archivo', fontWeight: 'bold', fontSize: '36px', color: '#1E293B', lineHeight: '36px', marginBottom: '16px' }}>
                        Our Blogs
                     </Typography>
                     <Typography style={{ font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: '#C22522', lineHeight: '16px', textAlign: 'center' }}>
                        Explore our collection of informative and engaging blog posts.
                     </Typography>

                  </div>
               </Grid>

               <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'center' }}>
                  <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', padding: 0 }}>
                     {myArray.map((data, index) => (
                        index === 0 && isMobile
                           ? <BlogCard key={index} />
                           : index === 0 && !isMobile
                              ? <BlogCardFullWidth key={index} />
                              : <BlogCard key={index} />
                     ))}

                  </Grid>




               </Grid>
               <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '80px', marginBottom: '80px', }}>
                  <Pagination
                     componentName='div'
                     shape="rounded"
                     size="large"
                     count={5}
                     sx={{
                        '& .MuiPaginationItem-root': {
                           color: '#475569',
                        },
                        '& .Mui-selected': {
                           backgroundColor: '#C22522',
                           color: '#FFF',
                        },
                     }}
                  // page={page + 1}
                  // onChange={handleChange}
                  />
               </Grid>

               <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '80px', marginBottom: '80px', }}>

                  <Paper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', backgroundColor: '#E2E8F0', padding: '24px', borderRadius: '16px', gap: '24px' }}>
                     <Typography style={{ font: 'Archivo', fontWeight: 'bold', fontSize: '24px', color: '#1E293B', lineHeight: '24px', textAlign: 'center' }}>
                        Want&nbsp;share&nbsp;knowledge?
                     </Typography>
                     <Typography style={{ font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: '#475569', lineHeight: '24px', textAlign: 'center' }}>
                        Unlock your creativity and share your unique perspective with the world. It only takes a few minutes to get started on your blogging journey.
                     </Typography>
                     <Button variant="contained" style={{ textTransform: 'capitalize' }} color='error'>
                        Start&nbsp;Writing&nbsp;Your&nbsp;Blog&nbsp;Now
                     </Button>

                  </Paper>
               </Grid>








            </Grid>
         </Grid >
      </>
   )
}

export default Blogs