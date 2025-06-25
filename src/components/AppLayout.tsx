import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  CssBaseline,
  Typography,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 250;

const drawerItems = [
  { label: 'Host Up Details', route: 'hostUp'}
];

const AppLayout = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* Toolbar */}
      <AppBar position="fixed">
      <Toolbar>
        {/* Menu Icon on the left */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Text in the middle */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          My Application
        </Typography>

        {/* Buttons on the right */}
        <Button color="inherit" sx={{ mr: 1 }}>
          Button 1
        </Button>
        <Button color="inherit" variant="outlined">
          Button 2
        </Button>
      </Toolbar>
    </AppBar>

      {/* Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : 0,
            top: '64px', // Height of the AppBar (Toolbar)
            height: 'calc(100% - 64px)', // Adjust height to start below Toolbar
            boxSizing: 'border-box',
            transition: (theme) =>
              theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            overflowX: 'hidden',
          },
        }}
        open={open}
      >
        <List>
          {drawerItems.map((item) => (
            <ListItem>
              <ListItemText primary={item.label}/>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: (theme) =>
            theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          mt: '64px', // Offset for the Toolbar height
        }}
      >
        <Typography>
          Main content goes here. This area shifts when the drawer opens or closes.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </Typography>
      </Box>
    </Box>
  );
};

export default AppLayout;