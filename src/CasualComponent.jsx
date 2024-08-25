// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import { List, ListItem, ListItemText, Slider, Checkbox, FormControlLabel, Button } from '@mui/material';

// const drawerWidth = 240;

// export default function ResponsiveDrawer2(props) {
//     const { window } = props;
//     const [mobileOpen, setMobileOpen] = useState(false);
//     const [price, setPrice] = useState([50, 200]);

//     const handleDrawerToggle = () => {
//         setMobileOpen(!mobileOpen);
//     };

//     const handlePriceChange = (event, newValue) => {
//         setPrice(newValue);
//     };

//     const drawer = (
//         <div>
//             <Toolbar />
//             <Divider />
//             <List>
//                 <ListItem>
//                     <Typography variant="h6">Filters</Typography>
//                 </ListItem>
//                 <Divider />
//                 {/* Price Filter */}
//                 <ListItem>
//                     <Typography>Price</Typography>
//                     <Slider
//                         value={price}
//                         onChange={handlePriceChange}
//                         valueLabelDisplay="auto"
//                         min={50}
//                         max={200}
//                     />
//                 </ListItem>
//                 {/* Color Filter */}
//                 <ListItem>
//                     <Typography>Colors</Typography>
//                     <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
//                         <Checkbox sx={{ color: 'red' }} />
//                         <Checkbox sx={{ color: 'green' }} />
//                         <Checkbox sx={{ color: 'blue' }} />
//                         {/* Add more colors as needed */}
//                     </Box>
//                 </ListItem>
//                 {/* Size Filter */}
//                 <ListItem>
//                     <Typography>Size</Typography>
//                     <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//                         <FormControlLabel control={<Checkbox />} label="Small" />
//                         <FormControlLabel control={<Checkbox />} label="Medium" />
//                         <FormControlLabel control={<Checkbox />} label="Large" />
//                     </Box>
//                 </ListItem>
//                 {/* Dress Style Filter */}
//                 <ListItem>
//                     <Typography>Dress Style</Typography>
//                     <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//                         <FormControlLabel control={<Checkbox />} label="Casual" />
//                         <FormControlLabel control={<Checkbox />} label="Formal" />
//                         <FormControlLabel control={<Checkbox />} label="Gym" />
//                     </Box>
//                 </ListItem>
//                 <ListItem>
//                     <Button variant="contained" color="primary">
//                         Apply Filter
//                     </Button>
//                 </ListItem>
//             </List>
//             <Divider />
//         </div>
//     );

//     const container = window !== undefined ? () => window().document.body : undefined;

//     return (
//         <Box sx={{ display: 'flex' }}>
//             <CssBaseline />
//             <AppBar
//                 position="fixed"
//                 sx={{
//                     width: { sm: `calc(100% - ${drawerWidth}px)` },
//                     ml: { sm: `${drawerWidth}px` },
//                     backgroundColor: '#000'
//                 }}
//             >
//                 <Toolbar>
//                     <Typography variant="h6" noWrap component="div">
//                         Shop.co
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//             <Box
//                 component="nav"
//                 sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//                 aria-label="filters"
//             >
//                 <Drawer
//                     container={container}
//                     variant="temporary"
//                     open={mobileOpen}
//                     onClose={handleDrawerToggle}
//                     ModalProps={{
//                         keepMounted: true, // Better open performance on mobile.
//                     }}
//                     sx={{
//                         display: { xs: 'block', sm: 'none' },
//                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                     }}
//                 >
//                     {drawer}
//                 </Drawer>
//                 <Drawer
//                     variant="permanent"
//                     sx={{
//                         display: { xs: 'none', sm: 'block' },
//                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                     }}
//                 >
//                     {drawer}
//                 </Drawer>
//             </Box>
//             <Box
//                 component="main"
//                 sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//             >
//                 <Toolbar />
//                 <Typography variant="h4" gutterBottom>
//                     Casual
//                 </Typography>

//                 {/* Product grid */}
//                 <Grid container spacing={4}>
//                     {/* Example of product card */}
//                     <Grid item xs={12} sm={6} md={4}>
//                         <Box sx={{ border: '1px solid #ccc', padding: 2, textAlign: 'center' }}>
//                             <img src="https://via.placeholder.com/150" alt="product" />
//                             <Typography variant="h6">Product Title</Typography>
//                             <Typography variant="body1">$145</Typography>
//                             <Typography variant="body2" color="textSecondary">4.5/5</Typography>
//                         </Box>
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4}>
//                         <Box sx={{ border: '1px solid #ccc', padding: 2, textAlign: 'center' }}>
//                             <img src="https://via.placeholder.com/150" alt="product" />
//                             <Typography variant="h6">Product Title</Typography>
//                             <Typography variant="body1">$180</Typography>
//                             <Typography variant="body2" color="textSecondary">4.0/5</Typography>
//                         </Box>
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4}>
//                         <Box sx={{ border: '1px solid #ccc', padding: 2, textAlign: 'center' }}>
//                             <img src="https://via.placeholder.com/150" alt="product" />
//                             <Typography variant="h6">Product Title</Typography>
//                             <Typography variant="body1">$120</Typography>
//                             <Typography variant="body2" color="textSecondary">5.0/5</Typography>
//                         </Box>
//                     </Grid>
//                     {/* Add more product cards as needed */}
//                 </Grid>
//             </Box>
//         </Box>
//     );
// }




// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';

// const drawerWidth = 240;

// export default function ResponsiveDrawer(props) {
//     const { window } = props;
//     const [mobileOpen, setMobileOpen] = useState(false);
//     const [isClosing, setIsClosing] = useState(false);

//     const handleDrawerClose = () => {
//         setIsClosing(true);
//         setMobileOpen(false);
//     };

//     const handleDrawerTransitionEnd = () => {
//         setIsClosing(false);
//     };

//     const handleDrawerToggle = () => {
//         if (!isClosing) {
//             setMobileOpen(!mobileOpen);
//         }
//     };

//     const drawer = (
//         <div>
//             <Toolbar />
//             <Divider />
//             <List>
//                 {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//                     <ListItem key={text} disablePadding>
//                         <ListItemButton>
//                             <ListItemIcon>
//                                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                             </ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItemButton>
//                     </ListItem>
//                 ))}
//             </List>
//             <Divider />
//             <List>
//                 {['All mail', 'Trash', 'Spam'].map((text, index) => (
//                     <ListItem key={text} disablePadding>
//                         <ListItemButton>
//                             <ListItemIcon>
//                                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                             </ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItemButton>
//                     </ListItem>
//                 ))}
//             </List>
//         </div>
//     );

//     const container = window !== undefined ? () => window().document.body : undefined;

//     return (
//         <Box sx={{ display: 'flex' }}>
//             <CssBaseline />
//             <AppBar
//                 position="fixed"
//                 sx={{
//                     width: { sm: `calc(100% - ${drawerWidth}px)` },
//                     ml: { sm: `${drawerWidth}px` },
//                 }}
//             >
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         edge="start"
//                         onClick={handleDrawerToggle}
//                         sx={{ mr: 2, display: { sm: 'none' } }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" noWrap component="div">
//                         Responsive drawer
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//             <Box
//                 component="nav"
//                 sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//                 aria-label="mailbox folders"
//             >
//                 <Drawer
//                     container={container}
//                     variant="temporary"
//                     open={mobileOpen}
//                     onTransitionEnd={handleDrawerTransitionEnd}
//                     onClose={handleDrawerClose}
//                     ModalProps={{
//                         keepMounted: true, // Better open performance on mobile.
//                     }}
//                     sx={{
//                         display: { xs: 'block', sm: 'none' },
//                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                     }}
//                 >
//                     {drawer}
//                 </Drawer>
//                 <Drawer
//                     variant="permanent"
//                     sx={{
//                         display: { xs: 'none', sm: 'block' },
//                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                     }}
//                     open
//                 >
//                     {drawer}
//                 </Drawer>
//             </Box>
//             <Box
//                 component="main"
//                 sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//             >
//                 <Toolbar />
//                 <Typography paragraph>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//                     tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
//                     enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
//                     imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
//                     Convallis convallis tellus id interdum velit laoreet id donec ultrices.
//                     Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//                     adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
//                     nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
//                     leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
//                     feugiat vivamus at augue. At augue eget arcu dictum varius duis at
//                     consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
//                     sapien faucibus et molestie ac.
//                 </Typography>
//                 <Typography paragraph>
//                     Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
//                     eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
//                     neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
//                     tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
//                     sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
//                     tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
//                     gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
//                     et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
//                     tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//                     eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//                     posuere sollicitudin aliquam ultrices sagittis orci a.
//                 </Typography>
//             </Box>
//         </Box>
//     );
// }
