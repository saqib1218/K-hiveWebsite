import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import CsPolygon1 from './../../../Assets/csPolygon1';
import CsPolygon2 from './../../../Assets/csPolygon2';
import CsPolygon3 from './../../../Assets/csPolygon3';
import CsPolygon4 from './../../../Assets/csPolygon4';
import CsPolygon5 from './../../../Assets/csPolygon5';
import CsPolygon6 from './../../../Assets/csPolygon6';
import CsPolygon7 from '../../../Assets/csPolygon7';
import CsPolygon8 from './../../../Assets/csPolygon8';
import CsPolygon9 from '../../../Assets/csPolygon9';

const ServicesSection = () => {
  const [hoveredItem1, setHoveredItem1] = React.useState(false);
  const [hoveredItem2, setHoveredItem2] = React.useState(false);
  const [hoveredItem3, setHoveredItem3] = React.useState(false);
  const [hoveredItem4, setHoveredItem4] = React.useState(false);
  const [hoveredItem5, setHoveredItem5] = React.useState(false);
  const [hoveredItem6, setHoveredItem6] = React.useState(false);
  const [hoveredItem7, setHoveredItem7] = React.useState(false);
  const [hoveredItem8, setHoveredItem8] = React.useState(false);
  const [hoveredItem9, setHoveredItem9] = React.useState(false);


  const typo1 = { font: 'Archivo', fontWeight: 'bold', fontSize: '20px', color: '#1E293B', lineHeight: "20px", marginBottom: '8px' }


  return (
    <Grid container spacing={4} style={{ display: 'flex', justifyContent: 'center' }}>

      <Grid item xs={12} sm={6} md={4} lg={4} xl={4} style={{ display: 'grid', justifyItems: 'center' }}>
        <Paper
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', backgroundColor: hoveredItem1 ? '#C22522' : ' #F8FAFC', border: '1px solid #E2E8F0', boxShadow: 'none', borderRadius: '16px' }}
          onMouseEnter={() => { setHoveredItem1(true) }} onMouseLeave={() => { setHoveredItem1(false) }}>
          <CsPolygon1 />
          <Typography style={{ ...typo1, color: hoveredItem1 ? 'white' : '#475569' }} marginTop={'16px'}>Quality Assurance</Typography>
          <Typography style={{ font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: hoveredItem1 ? 'white' : '#475569', lineHeight: '24px', textAlign: 'center' }}
          >Ensuring that all software products and systems meet established quality standards through rigorous testing and analysis.</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={4} xl={4} style={{ display: 'grid', justifyItems: 'center' }}>
        <Paper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', backgroundColor: hoveredItem2 ? '#C22522' : ' #F8FAFC', border: '1px solid #E2E8F0', boxShadow: 'none', borderRadius: '16px' }}
          onMouseEnter={() => { setHoveredItem2(true) }} onMouseLeave={() => { setHoveredItem2(false) }}>
          <CsPolygon2 />
          <Typography style={{ ...typo1, color: hoveredItem2 ? 'white' : '#475569' }} marginTop={'16px'}>UI/UX Designing</Typography>
          <Typography style={{ font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: hoveredItem2 ? 'white' : '#475569', lineHeight: '24px', textAlign: 'center' }}
          >Creating visually appealing and user-friendly interfaces for websites and applications, with a focus on enhancing the user experience (UX).</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={4} xl={4} style={{ display: 'grid', justifyItems: 'center' }}>
        <Paper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', backgroundColor: hoveredItem3 ? '#C22522' : ' #F8FAFC', border: '1px solid #E2E8F0', boxShadow: 'none', borderRadius: '16px' }}
          onMouseEnter={() => { setHoveredItem3(true) }} onMouseLeave={() => { setHoveredItem3(false) }}>
          <CsPolygon3 />
          <Typography style={{ ...typo1, color: hoveredItem3 ? 'white' : '#475569' }} marginTop={'16px'}>Blockchain Development</Typography>
          <Typography style={{ font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: hoveredItem3 ? 'white' : '#475569', lineHeight: '24px', textAlign: 'center' }}
          >Developing decentralized applications (dApps), integrating blockchain technology into existing systems, and creating smart contracts.</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={4} xl={4} style={{ display: 'grid', justifyItems: 'center' }}>
        <Paper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', backgroundColor: hoveredItem4 ? '#C22522' : ' #F8FAFC', border: '1px solid #E2E8F0', boxShadow: 'none', borderRadius: '16px' }}
          onMouseEnter={() => { setHoveredItem4(true) }} onMouseLeave={() => { setHoveredItem4(false) }}>
          <CsPolygon4 />
          <Typography style={{ ...typo1, color: hoveredItem4 ? 'white' : '#475569' }} marginTop={'16px'}>Web Development</Typography>
          <Typography style={{ font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: hoveredItem4 ? 'white' : '#475569', lineHeight: '24px', textAlign: 'center' }}
          >Building and maintaining websites and web applications using a variety of technologies and programming languages.</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={4} xl={4} style={{ display: 'grid', justifyItems: 'center' }}>
        <Paper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', backgroundColor: hoveredItem5 ? '#C22522' : ' #F8FAFC', border: '1px solid #E2E8F0', boxShadow: 'none', borderRadius: '16px' }}
          onMouseEnter={() => { setHoveredItem5(true) }} onMouseLeave={() => { setHoveredItem5(false) }}>
          <CsPolygon5 />
          <Typography style={{ ...typo1, color: hoveredItem5 ? 'white' : '#475569' }} marginTop={'16px'}>Mobile App Development</Typography>
          <Typography style={{ font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: hoveredItem5 ? 'white' : '#475569', lineHeight: '24px', textAlign: 'center' }}
          >Designing and developing custom mobile applications for iOS and Android platforms.</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={4} xl={4} style={{ display: 'grid', justifyItems: 'center' }}>
        <Paper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', backgroundColor: hoveredItem6 ? '#C22522' : ' #F8FAFC', border: '1px solid #E2E8F0', boxShadow: 'none', borderRadius: '16px' }}
          onMouseEnter={() => { setHoveredItem6(true) }} onMouseLeave={() => { setHoveredItem6(false) }}>
          <CsPolygon6 />
          <Typography style={{ ...typo1, color: hoveredItem6 ? 'white' : '#475569' }} marginTop={'16px'}>Digital Marketing</Typography>
          <Typography style={{ font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: hoveredItem6 ? 'white' : '#475569', lineHeight: '24px', textAlign: 'center' }}
          >Helping businesses improve their online presence and visibility through targeted advertising, search engine optimization (SEO), and other marketing strategies.</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={4} xl={4} style={{ display: 'grid', justifyItems: 'center' }}>
        <Paper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', backgroundColor: hoveredItem7 ? '#C22522' : ' #F8FAFC', border: '1px solid #E2E8F0', boxShadow: 'none', borderRadius: '16px' }}
          onMouseEnter={() => { setHoveredItem7(true) }} onMouseLeave={() => { setHoveredItem7(false) }}>
          <CsPolygon7 />
          <Typography style={{ ...typo1, color: hoveredItem7 ? 'white' : '#475569' }} marginTop={'16px'}>Cyber Security</Typography>
          <Typography style={{ font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: hoveredItem7 ? 'white' : '#475569', lineHeight: '24px', textAlign: 'center' }}
          >Protecting businesses and their data from cyber threats by providing security assessments, vulnerability testing, and implementing robust security measures.</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={4} xl={4} style={{ display: 'grid', justifyItems: 'center' }}>
        <Paper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', backgroundColor: hoveredItem8 ? '#C22522' : ' #F8FAFC', border: '1px solid #E2E8F0', boxShadow: 'none', borderRadius: '16px' }}
          onMouseEnter={() => { setHoveredItem8(true) }} onMouseLeave={() => { setHoveredItem8(false) }}>
          <CsPolygon8 />
          <Typography style={{ ...typo1, color: hoveredItem8 ? 'white' : '#475569' }} marginTop={'16px'} sx={{ textAlign: 'center' }}>E-commerce and Marketplace Solutions</Typography>
          <Typography style={{ font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: hoveredItem8 ? 'white' : '#475569', lineHeight: '24px', textAlign: 'center' }}
          >Developing online stores and marketplaces for businesses to sell their products and services, with a focus on improving the customer experience.</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={12} md={4} lg={4} xl={4} style={{ display: 'grid', justifyItems: 'center' }}>
        <Paper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', backgroundColor: hoveredItem9 ? '#C22522' : ' #F8FAFC', border: '1px solid #E2E8F0', boxShadow: 'none', borderRadius: '16px' }}
          onMouseEnter={() => { setHoveredItem9(true) }} onMouseLeave={() => { setHoveredItem9(false) }}>
          <CsPolygon9 />
          <Typography style={{ ...typo1, color: hoveredItem9 ? 'white' : '#475569' }} marginTop={'16px'}>DevOps Services</Typography>
          <Typography style={{ font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: hoveredItem9 ? 'white' : '#475569', lineHeight: '24px', textAlign: 'center' }}
          >Streamlining software development and deployment processes through automation and collaboration between development and operations teams.</Typography>
        </Paper>
      </Grid>

    </Grid>
  )
}

export default ServicesSection