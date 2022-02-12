import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";


const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className='drawer'
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer()}
          >
            <MenuIcon/>
          </IconButton>
          <Typography className="text-left" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <FormattedMessage
              id="app.header"
              defaultMessage="Header default"
            />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={'left'}
        open={isOpenDrawer}
        onClose={() => toggleDrawer()}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => toggleDrawer()}
          onKeyDown={() => toggleDrawer()}
        >
          <List>
            <ListItem button>
              <Link to='/' className='link'>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary={'Home'} />
              </Link>
            </ListItem>
            <ListItem button>
              <Link to='/register' className='link'>
                <ListItemIcon>
                  <FiberNewIcon />
                </ListItemIcon>
                <ListItemText primary={'Register'} />
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Header;