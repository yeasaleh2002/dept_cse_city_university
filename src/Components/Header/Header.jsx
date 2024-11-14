import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react'; 

const Header = () => {

  return (
    <div>
      {/* <nav className="p-4 bg-gray-800 text-white">
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/landing">Landing</Link></li>
        </ul>
      </nav> */}
      <AppBar position="static" sx={{ backgroundColor: 'blue' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Blue Header
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;