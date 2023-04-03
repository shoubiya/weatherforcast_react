import React from 'react'
import "./Temperature4.css"
export default function Temperature4({current}) {
  return (
    
      <div className='temper2'>
        <p className='temper21'><img src={`https://api.openweathermap.org/img/w/${current?.icon}.png`}></img></p>
        <h1 className='temper21h1'>{current?.max}℃</h1>
        <h3 className='temper21h3'>{current?.main},{current?.desc}</h3>
        <h4 className='temper21h4'></h4>
        <div className='values'>
     <p  className='tempv'>{current?.pressure}hPA</p>
        <p className='tempv'>{current?.humidity}%</p>
        <p className='tempv'>{current?.speed} m/s N</p>
        <p className='tempp'>🌅</p>
        <p className='temptime'>{current?.sunrise} A.M</p>
        <p className='tempp1'>🌇</p>
        <p className='tempp1time'>{current?.sunset} P.M </p>
        </div>
    </div>
    
  )
}

