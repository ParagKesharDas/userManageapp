import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='Nav'>
      <ul >
        <li >
          <Link to="/" >
            Home
          </Link>
        </li>
        <li >
          <Link to="/view">
            View User
          </Link>
        </li>
        <li >
          <Link to="/addUser">
            Add User
          </Link>
        </li>
        {/* <li className='navitem'>
          <Link to="/edit">
            Edit User
          </Link>
        </li> */}
        <li className='navitem'>
          <Link to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
