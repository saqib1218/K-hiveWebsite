import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import KHiveLogo from '../../Assets/mainLogo'
import KHiveLogo1 from '../../Assets/mainLogo2'
// @ts-ignore 
import { usePath, A } from 'hookrouter';

const drawerWidth = 240;
const navItems = [
   { label: 'Home', path: '/' },
   { label: 'About us', path: '/about' },
   { label: 'Services', path: '/services' },
   { label: 'Careers', path: '/careers' },
];
const Header = () => {
   const [mobileOpen, setMobileOpen] = React.useState(false);
   const [selectedNav, setSelectedNav] = React.useState('Home');
   const currentPath = usePath();

   React.useEffect(() => {
      // Update the selected nav item based on the current path
      const navItem = navItems.find((item) => item.path === currentPath);
      if (navItem) {
         setSelectedNav(navItem.label);
      }
   }, [currentPath]);

   const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
   };
   const handleNavClick = (nav: any) => {
      setSelectedNav(nav);
      setMobileOpen(false); // Close the mobile drawer after clicking a nav item
   };

   const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: 'transparent' }}>
         <KHiveLogo1 />
         <Divider />
         <List>
            {navItems.map((item) => (
               <React.Fragment key={item.label}>
                  <ListItem disablePadding>
                     <ListItemButton
                        sx={{ textAlign: 'center' }}
                        className={selectedNav === item.label ? 'active' : ''}
                        onClick={() => handleNavClick(item.label)}
                     >
                        <ListItemText primary={item.label} />
                     </ListItemButton>
                  </ListItem>
                  <Divider />
               </React.Fragment>
            ))}
            <ListItem>
               <A href="/quote">
                  <Button variant="contained" color="error" sx={{ borderRadius: '8px', width: '100%' }}>
                     Request&nbsp;A&nbsp;Quote
                  </Button>
               </A>
            </ListItem>
            <Divider />
         </List>
      </Box>
   );

   return (
      <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         <AppBar component="nav">
            <Toolbar style={{ justifyContent: 'space-between', backgroundColor: '#000000' }}>

               <KHiveLogo />

               <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {navItems.map((item) => (
                     <A
                        key={item.label}
                        href={item.path}
                        style={{ textDecoration: 'none', color: '#fff' }}
                        className={currentPath === item.path ? 'active' : ''}
                        onClick={() => setSelectedNav(item.label)}
                     >
                        <Button
                           sx={{
                              color: '#fff',
                           }}
                        >
                           {item.label}
                        </Button>
                     </A>
                  ))}
               </Box>

               <Button variant="outlined"
                  sx={{ borderColor: '#C22522', color: 'white', borderRadius: '10px', mr: 2, display: { xs: 'none', sm: 'block' } }}
               >Request&nbsp;A&nbsp;Quote</Button>

               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ display: { sm: 'none' } }}
               >
                  <MenuIcon />
               </IconButton>

            </Toolbar>
         </AppBar>

         <Box component="nav">
            <Drawer
               // container={container}
               variant="temporary"
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
               }}
               sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, right: 0 },
               }}
            >
               {drawer}
            </Drawer>
         </Box>
      </Box>
   )
}

export default Header