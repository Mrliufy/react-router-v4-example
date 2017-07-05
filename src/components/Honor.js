import React from 'react';
import HonorsAPI from '../HonorsAPI.js';
import './Honor.css';

const Honor = ({ match }) => {
  const honor = HonorsAPI.get(match.params.id);

  if (!honor) {
    return <div>Sorry, no championship was found.</div>
  }

  return (
    <div className='Honor'>
      <h1>{honor.name}</h1>
      <p className='Honor-fact'>Year: {honor.year}</p>
      <p className='Honor-fact'>Coach: {honor.coach}</p>
    </div>
  )

}

export default Honor;
