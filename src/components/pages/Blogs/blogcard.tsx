import React from 'react'
import { Button, Grid, Typography, useMediaQuery, CardActionArea, CardActions, Box } from '@mui/material'
import { Paper } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import thumbnailImage from "./Rectangle.jpg"
import badgeImage from "./testEllipse.jpg"




const BlogCard = () => {
   const [hoveredItem, setHoveredItem] = React.useState(false);


   const blogText = 'Sed quia conse quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.';


   return (
      <>
         <Grid item xs={11} sm={5} md={4} lg={4} xl={4} >
            <Card style={{ borderRadius: '8px', backgroundColor: '#F8FAFC', }}>
               <CardActionArea>
                  <CardMedia
                     component="img"
                     height="140"
                     image={thumbnailImage}
                     alt="green iguana"
                  />
                  <CardContent >
                     <div style={{ width: '100%', display: 'flex', flexDirection: "row", alignItems: 'baseline', marginBottom: '8px' }}>
                        <CalendarTodayOutlinedIcon style={{ width: '15px', height: '15px', color: '#475569', marginRight: '3px' }} />
                        <Typography>date</Typography>
                     </div>

                     <Typography
                        onMouseEnter={() => { setHoveredItem(true) }} onMouseLeave={() => { setHoveredItem(false) }}
                        sx={{ font: 'Archivo', fontSize: '24px', fontWeight: 'bold', lineHeight: '24px', marginBottom: '8px', color: hoveredItem ? '#C22522' : ' #1E293B' }}>
                        Driving version control at Uber
                     </Typography>
                     <Typography
                        sx={{
                           font: 'Archivo',
                           fontSize: '16px',
                           fontWeight: '400px',
                           color: '#475569',
                           lineHeight: '24px',
                           overflow: 'hidden',
                           textOverflow: 'ellipsis',
                           display: '-webkit-box',
                           WebkitLineClamp: '3',
                           WebkitBoxOrient: 'vertical',
                        }}>
                        {blogText}
                     </Typography>
                  </CardContent>
               </CardActionArea>

               <CardActions>
                  <div style={{ width: '100%', display: 'flex', flexDirection: "row", padding: '8px' }}>

                     <div style={{ width: '100%', display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                        <img src={badgeImage} style={{ width: '50px', height: '50px', marginRight: '8px' }} />
                        <Typography sx={{ font: 'Archivo', fontSize: '16px', fontWeight: 'bold', color: '#1E293B', lineHeight: '16px' }}>Uber Eats</Typography>
                     </div>

                     <Button variant="text" size='large' style={{ color: '#C22522', fontWeight: 'bold', textTransform: 'capitalize', alignItems: 'center', marginLeft: '20px' }}
                        endIcon={<ArrowForwardIcon />}>
                        Read&nbsp;More
                     </Button>

                  </div>
               </CardActions>
            </Card>
         </Grid >


         {/* <Grid item xs={11} sm={5} md={4} lg={4} xl={4}>
            <Paper style={{ borderRadius: '8px', backgroundColor: '#F8FAFC', minHeight: '600px' }}>
               <div style={{ width: "100%", maxHeight: "191px", }}>
                  <img style={{ width: '100%', objectFit: 'cover', height: '100%  ', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }} src={thumbnailImage} />
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
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

      </>
   )
}

export default BlogCard