import React from 'react';
import "./Temperature3.css";

export default function Temperature3(props) {
  const week=(props.weekinfo)
  console.log(week)
  return (
    
    <div className='tempera1'>
      {week.map((read)=>
      <div className='temperal1'>
        <h2 className='temperalone'>{new Date(read.dt*1000).toLocaleString('en-us',{weekday:'long',year:'numeric',month:'long',day:'numeric'}).slice(0,3)}</h2>
        <p className='cc'><img src={`https://api.openweathermap.org/img/w/${read.weather[0].icon}.png`}></img></p>
        <p className='pcelsius'>{read.temp.max}℃-{read.temp.min}℃</p>
        <p className='prain'>{read.weather[0].main},</p>
        <p className='pmoderate'>{read.weather[0].description}</p>


      </div>
      )}
    </div>
    
  )
}
