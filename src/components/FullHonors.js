import React from 'react';
import HonorsAPI from '../HonorsAPI.js';
import { Link } from  'react-router-dom';
import './FullHonors.css';

const FullHonors = () => (
  <div className='FullHonors'>
    <ul>
      {
        HonorsAPI.all().map(honor => (
          <li key={honor.id}>
            <Link to={`/honors/${honor.id}`}>{honor.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullHonors;
