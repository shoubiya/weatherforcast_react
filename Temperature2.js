
import React from 'react';
import "./Temperature2.css";

export default function Temperature2({Current}) {
  return (
    
        <div className='temper12'>
          <h1 className='temper12h1'>{Current?.city}</h1>
          <h3 className='temper12h3'>{Current?.date}</h3>
          <h4 className='temper12h4'>Population: {Current?.population}</h4>
        </div>
    
 
  )
}
