import React from 'react'
import { Button, Grid, Paper, Typography, useMediaQuery, } from '@mui/material';
import About1 from '../../../Assets/aboutIcon1';
import About2 from '../../../Assets/aboutIcon2';
import About3 from '../../../Assets/aboutIcon3';
import About4 from '../../../Assets/aboutIcon4';
import AboutWhite1 from '../../../Assets/aboutWhite1';
import AboutWhite2 from '../../../Assets/aboutWhite2';
import AboutWhite3 from '../../../Assets/aboutWhite3';
import AboutWhite4 from '../../../Assets/aboutWhite4';
import AbPolygon1 from '../../../Assets/black Section/csPolygon1';
import AbPolygon2 from '../../../Assets/black Section/csPolygon2';
import AbPolygon3 from '../../../Assets/black Section/csPolygon3';
import AbPolygon4 from '../../../Assets/black Section/csPolygon4';
import AbPolygon5 from '../../../Assets/black Section/csPolygon5';
import AbPolygon6 from '../../../Assets/black Section/csPolygon6';
import VerticalLine from '../../../Assets/black Section/aboutIcon2';
import HorizontalLine from '../../../Assets/black Section/aboutIcon1';
import TeamSection from '../Home/team-section';
import myImageSmall from "./about.svg"


const myImage = require('../../../Assets/images/aboutUsImage.jpg');
const bgImage = require('../../../Assets/black Section/background.jpg');

const cardsToDisplay = [
   {
      icon: <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}> <HorizontalLine /><AbPolygon1 /><HorizontalLine /></div>,
      iconMobile: <AbPolygon1 />,
      title: "Step 1",
      heading: "Introductory Meeting",
      desc: "Schedule an initial meeting with the client to establish a professional relationship, understand their objectives, and initiate project discussions.",
      color: '#FB9B10',
   },
   {
      icon: <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}> <HorizontalLine /><AbPolygon2 /><HorizontalLine /></div>,
      iconMobile: <AbPolygon2 />,
      title: "Step 2",
      heading: " Requirements Elicitation",
      desc: "Conduct a thorough requirements elicitation session to capture all necessary information required to successfully complete the project. This can involve determining the scope, deliverables, timelines, and other relevant details.",
      color: "#3A85FD",
   },
   {
      icon: <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}> <HorizontalLine /><AbPolygon3 /><HorizontalLine /></div>,
      iconMobile: <AbPolygon3 />,
      title: "Step 3",
      heading: "Technical and Financial Analysis",
      desc: "Perform an in-depth technical and financial analysis to accurately estimate project requirements. This can include identifying necessary resources, determining the project timeline, and assessing the associated costs.",
      color: "#FB3286",
   },
   {
      icon: <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}> <HorizontalLine /><AbPolygon4 /><HorizontalLine /></div>,
      iconMobile: <AbPolygon4 />,
      title: "Step 4",
      heading: "Contract Negotiation and Signing",
      desc: "Once project requirements have been identified and estimated, draft and negotiate a detailed contract outlining project scope, timelines, deliverables, costs, and other critical details. Sign the contract to formalize the agreement between the parties.",
      color: "#38BDF8",
   },
   {
      icon: <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}> <HorizontalLine /> <AbPolygon5 /><HorizontalLine /></div>,
      iconMobile: <AbPolygon5 />,
      title: "Step 5",
      heading: " Detailed Requirements Gathering and Planning",
      desc: "Conduct a comprehensive requirements gathering and planning session to further refine the project scope, break down the project into smaller tasks, and develop a detailed project plan. This plan should outline the timeline for each task, the team members responsible for each task, and the necessary resources required to execute each task. ",
      color: "#1EB3A1",
   },
   {
      icon: <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}> <HorizontalLine /><AbPolygon6 /><HorizontalLine /></div>,
      iconMobile: <AbPolygon6 />,
      title: "Step 6",
      heading: " Project Execution",
      desc: "Implement the project plan and ensure that each task is executed on schedule and within budget. Continuously monitor progress, communicate regularly with the client, and make necessary adjustments to ensure successful project delivery.",
      color: "#84CC16",
   },
]

const About = () => {


   const [hoveredItem1, setHoveredItem1] = React.useState(false);
   const [hoveredItem2, setHoveredItem2] = React.useState(false);
   const [hoveredItem3, setHoveredItem3] = React.useState(false);
   const [hoveredItem4, setHoveredItem4] = React.useState(false);

   const typo0 = { font: 'Archivo', fontWeight: '600px', fontSize: '24px', lineHeight: '24px', marginBottom: '16px' }
   const typo1 = { font: 'Archivo', fontWeight: 'bold', fontSize: '36px', color: '#1E293B', lineHeight: '36px', marginBottom: '16px' }
   const typo2 = { font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: '#C22522', lineHeight: '16px' }
   const typo3 = { font: 'Archivo', fontWeight: '200px', fontSize: '16px', color: '#475569', lineHeight: '24px', marginBottom: '16px' }
   const boxtypo1 = { font: 'Archivo', fontWeight: '500px', fontSize: '14px', lineHeight: '36px', }
   const boxtypo2 = { font: 'Archivo', fontWeight: 'bold', fontSize: '18px', color: '#ffffff', lineHeight: '36px', }
   const boxtypo3 = { font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: '#ffffff', lineHeight: '24px', marginBottom: '16px' }

   const fonts = useMediaQuery("(max-width:1470px)");
   const isSmall = useMediaQuery("(max-width:1200px)");
   return (
      <>

         <div style={{ position: "relative", marginTop: "40px", display: "flex", justifyContent: "center", }}>
            <img
               srcSet={`${myImageSmall} 400w`}
               sizes="(max-width: 600px) 400px, 800px"
               alt="about-us"
               style={{ maxWidth: "-webkit-fill-available", }}
            />
            <div style={{ position: "absolute", top: "40%", }}>
               <Typography style={{ color: "#FFFF", fontSize: fonts ? "30px" : "60px", fontWeight: 600, font: "Archivo", }} >
                  About Us
               </Typography>
            </div>
         </div>
         {/* <div style={{ marginTop: '55px', }}>
            <div style={{ position: "relative", marginTop: "40px", display: "flex", justifyContent: "center", }}>
               <img src={myImage} alt="My Image" style={{ maxWidth: "100%", minHeight: "200px" }} />
               <div style={{ position: "absolute", top: "40%", }}>
                  <Typography style={{ color: "#FFFF", fontSize: fonts ? "30px" : "50px", fontWeight: 600, font: "Archivo", }} >
                     About Us
                  </Typography>
               </div>
            </div>
         </div> */}

         <Grid container style={{ justifyContent: 'center', marginBottom: '100px' }}>
            <Grid item xs={11} sm={11} md={9} lg={7}>

               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '110px', marginBottom: '50px' }}>
                  <Typography style={typo1}>
                     Who We Are?
                  </Typography>
                  <Typography style={{ ...typo2, textAlign: 'center' }}>
                     Transforming your vision into a viable digital solution.
                  </Typography>
                  <Typography style={{ ...typo3, textAlign: 'center', marginTop: '10px' }}>
                     Kryptohive is a renowned company that specializes in providing advanced information technology solutions to clients worldwide. Our team of experts is dedicated to developing innovative and creative products and services that cater to the unique needs of our clients. Our wide range of services includes web design and development, tailor-made applications, ERPs, CRMs, e-commerce solutions, business-to-business applications, business-to-client applications, managed hosting, and internet portal management.
                  </Typography>

               </div>
            </Grid>

            <Grid item xs={11} sm={11} md={11} lg={11}>
               <Grid container spacing={4} style={{ display: 'flex', justifyContent: 'center' }}>

                  <Grid item xs={12} sm={6} md={3} lg={3} xl={3} style={{ display: 'grid', justifyItems: 'center' }}>
                     <Paper
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', backgroundColor: hoveredItem1 ? '#C22522' : ' #F8FAFC', border: '1px solid #E2E8F0', boxShadow: 'none', borderRadius: '16px' }}
                        onMouseEnter={() => { setHoveredItem1(true) }} onMouseLeave={() => { setHoveredItem1(false) }}>
                        {/* <About1 /> */}
                        {hoveredItem1 ? <AboutWhite1 /> : <About1 />}
                        <Typography style={{ ...typo0, color: hoveredItem1 ? 'white' : '#C22522' }} marginTop={'16px'}>Our Vision</Typography>
                        <Typography style={{ font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: hoveredItem1 ? 'white' : '#475569', lineHeight: '24px', textAlign: 'center' }}
                        >We as a company intend to open avenues for clients and help them flourish their businesses and help our employees grow as team players and individuals.</Typography>
                     </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3} lg={3} xl={3} style={{ display: 'grid', justifyItems: 'center' }}>
                     <Paper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', backgroundColor: hoveredItem2 ? '#C22522' : ' #F8FAFC', border: '1px solid #E2E8F0', boxShadow: 'none', borderRadius: '16px' }}
                        onMouseEnter={() => { setHoveredItem2(true) }} onMouseLeave={() => { setHoveredItem2(false) }}>
                        {/* <About2 /> */}
                        {hoveredItem2 ? <AboutWhite2 /> : <About2 />}
                        <Typography style={{ ...typo0, color: hoveredItem2 ? 'white' : '#C22522' }} marginTop={'16px'}>Our Mission</Typography>
                        <Typography style={{ font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: hoveredItem2 ? 'white' : '#475569', lineHeight: '24px', textAlign: 'center' }}
                        >Our mission is to create a safe space for young minds to express their raw ideas and transform them into game-changers.</Typography>
                     </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3} lg={3} xl={3} style={{ display: 'grid', justifyItems: 'center' }}>
                     <Paper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', backgroundColor: hoveredItem3 ? '#C22522' : ' #F8FAFC', border: '1px solid #E2E8F0', boxShadow: 'none', borderRadius: '16px' }}
                        onMouseEnter={() => { setHoveredItem3(true) }} onMouseLeave={() => { setHoveredItem3(false) }}>
                        {/* <About3 /> */}
                        {hoveredItem3 ? <AboutWhite3 /> : <About3 />}
                        <Typography style={{ ...typo0, color: hoveredItem3 ? 'white' : '#C22522' }} marginTop={'16px'}>Core Values </Typography>
                        <Typography style={{ font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: hoveredItem3 ? 'white' : '#475569', lineHeight: '24px', textAlign: 'center' }}
                        >We personify honesty, dedication, and diligence to establish healthy interpersonal relationships and a workspace that values its clients and employees likewise.</Typography>
                     </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3} lg={3} xl={3} style={{ display: 'grid', justifyItems: 'center' }}>
                     <Paper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', backgroundColor: hoveredItem4 ? '#C22522' : ' #F8FAFC', border: '1px solid #E2E8F0', boxShadow: 'none', borderRadius: '16px' }}
                        onMouseEnter={() => { setHoveredItem4(true) }} onMouseLeave={() => { setHoveredItem4(false) }}>
                        {/* <About4 /> */}
                        {hoveredItem4 ? <AboutWhite4 /> : <About4 />}
                        <Typography style={{ ...typo0, color: hoveredItem4 ? 'white' : '#C22522' }} marginTop={'16px'}>Accountability</Typography>
                        <Typography style={{ font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: hoveredItem4 ? 'white' : '#475569', lineHeight: '24px', textAlign: 'center' }}
                        >We believe that the people who exercise their freedom responsibly, do not fear accountability. They’re reliable and take ownership of their work. </Typography>
                     </Paper>
                  </Grid>

               </Grid>

            </Grid>

         </Grid>

         <div style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            minHeight: '1000px',
            paddingTop: "60px",
            paddingBottom: '60px',
            padding: isSmall ? '20px' : '60px',

         }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '100px', marginBottom: '100px' }}>
               <Typography style={{ ...typo1, color: '#ffffff' }}>
                  How we work?
               </Typography>
               <Typography style={typo2}>
                  Excellence, Integrity, People Centric Approach
               </Typography>
            </div>

            {isSmall ? (
               <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center' }}>

                  {cardsToDisplay.map((data, index) => (

                     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', }}>
                        <div style={{ maxHeight: '100px', display: index === 0 ? "none" : "flex" }}><VerticalLine /> </div>
                        <div >
                           {data.iconMobile}
                        </div>
                        <div style={{ maxHeight: '50px' }}><VerticalLine /> </div>
                        <Paper
                           style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: "16px", backgroundColor: '#1C1C1C', border: ' 1px solid #475569', borderRadius: '16px' }}>
                           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              <Typography style={{ ...boxtypo1, color: data.color }}>
                                 {data.title}
                              </Typography>
                              <Typography style={{ ...boxtypo2, textAlign: 'center' }}>
                                 {data.heading}
                              </Typography>
                              <Typography style={{ ...boxtypo3, textAlign: 'center' }}>
                                 {data.desc}
                              </Typography>
                           </div>
                        </Paper>
                     </div>
                  ))}
               </div>
            ) : (
               <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <div style={{ alignSelf: 'center' }}><HorizontalLine /></div>
                  {cardsToDisplay.map((data, index) => (
                     <div style={{
                        display: 'flex',
                        flexDirection: (index % 2 === 0) ? "row" : "row-reverse",
                        width: (index % 2 === 0) ? "50.18%" : "50%",
                        flex: '1',
                        alignSelf: (index % 2 === 0) ? 'flex-end' : '',

                     }}>
                        <div style={{
                           borderLeft: (index % 2 === 0) ? '3px dashed #333' : '0px',
                           borderRight: (index % 2 === 0) ? "0px" : "3px dashed #333",
                           borderSpacing: '10px',
                        }}>
                           {data.icon}
                        </div>
                        <Paper
                           style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: "16px", backgroundColor: '#1C1C1C', border: ' 1px solid #475569', borderRadius: '16px' }}>
                           <div>
                              <Typography style={{ ...boxtypo1, color: data.color }}>
                                 {data.title}
                              </Typography>
                              <Typography style={boxtypo2}>
                                 {data.heading}
                              </Typography>
                              <Typography style={boxtypo3}>
                                 {data.desc}
                              </Typography>
                           </div>
                        </Paper>
                     </div>
                  ))}
                  <div style={{ alignSelf: 'center' }}><HorizontalLine /></div>
               </div >
            )}
         </div >

         <div style={{ padding: '24px', width: '100%', }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '110px', marginBottom: '50px' }}>
               <Typography style={typo1}>
                  Our Team
               </Typography>
               <Typography style={typo2}>
                  Meet Our Talented Team
               </Typography>
            </div>

            <TeamSection />
         </div>

      </>
   )
}

export default About