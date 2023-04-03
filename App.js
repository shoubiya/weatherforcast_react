import logo from './logo.svg';
import './App.css';
import Temperature from './Temperature';
import Temperature2 from './Temperature2';
import axios from "axios"
import { useEffect, useState } from 'react';
import Temperature3 from './Temperature3';
import Temperature4 from './Temperature4';
import Loader from './Loader';

function App() {
 const[state,setState]=useState({
  value:"",
  current:{
  },
  weekinfo:[],
  loading:false,
  error:false,
})
  console.log("state",state);
  const handleinputchange=e=>{
    setState({
      ...state,
      value:e.target.value,
    })
  };
  const handleSearchCity= e=>{
    e.preventDefault();
    setState({
      ...state,
      loading:true,
    })
    axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${state.value}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`)
    .then(response=>{
       console.log("respons====>",response);
       const data=response.data
       const months=['Januvary','february','March','April','May','June','July','August','September','October','November','December']
      const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
      const currentDate=new Date()
      console.log("current==>",currentDate);
      console.log("day----",currentDate.getMonth());
      const date=`${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
      console.log("date----",date);
      const sunset=new Date(data.list[0].sunset*1000).toLocaleTimeString().slice(0,4)
      const sunrise=new Date(data.list[0].sunrise*1000).toLocaleTimeString().slice(0,4)
      const current_data ={
        city:data.city.name,
        country:data.city.country,
        date,
        population:data.city.population,
        desc:data.list[0].weather[0].description,
        main:data.list[0].weather[0].main,
        icon:data.list[0].weather[0].icon,
        temp:data.list[0].temp.day,
        max:data.list[0].temp.max,
        ltemp:data.list[0].temp.min,
        sunrise,
        sunset,
        clouds:data.list[0].clouds,
        humidity:data.list[0].humidity,
        pressure:data.list[0].pressure,
        speed:data.list[0].speed,

      }
      setState({
        ...state,
        current:current_data,
        weekinfo:data.list
      })
      })
      .catch(error =>{
        setState({
          ...state,
          current:{},
        weekinfo:[],
          loading:false,
          error:true
        })
      })
  }
  return (
 <>
 

 
 <Temperature    handleinputchange={handleinputchange} handleSearchCity={handleSearchCity}/>
{
  state.loading ===true ?(
    <Loader/>
  ):(<div>
    {state.current.country !== undefined ?
    <>
     <Temperature2 Current={state.current}/>
 <Temperature3 weekinfo={state.weekinfo}/>
 <Temperature4 current={state.current}/>
 </>:
 state.error ?
 <div className='size'>
  City Not Found!!  
  </div>
  :
  <div></div>
    }
  </div>)

}
 
 {/* <Temperature2 Current={state.current}/>
 <Temperature3 weekinfo={state.weekinfo}/>
 <Temperature4 current={state.current}/> */}
 </>
  );
}

export default App;
