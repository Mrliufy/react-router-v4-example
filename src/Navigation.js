import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav className='Navigation'>
    <h2>- NAVIGATION -</h2>
    <span className='Navigation-items'>
      <Link to='/'>Home</Link> | <Link to='/honors'>Honors</Link> | <Link to='/schedule'>Schedule</Link>
    </span>
    <hr />
  </nav>
)

export default Navigation;
