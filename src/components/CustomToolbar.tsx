import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function CustomToolbar({ title, toggleDrawer }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          {title || 'Home'}
        </Typography>
        <Button color="inherit" sx={{ mr: 1 }}>
          Profile
        </Button>
        <Button color="inherit" variant="outlined">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default CustomToolbar;