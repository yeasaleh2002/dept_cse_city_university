import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div>
      <nav className="p-4 bg-gray-800 text-white">
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/landing">Landing</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;