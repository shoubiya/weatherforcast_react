import React from 'react';
import "./Temperature.css";
import {Search} from '@mui/icons-material';
export default function Temperature(props) {
  const {handleinputchange,handleSearchCity}=props
  
  return (
    <div className='temp'>
       <div className='temp1'>
       <Search className='icontemp' onClick={handleSearchCity} />
       <input className='inputtemp' type="text" placeholder='Eg:calicut' onChange={handleinputchange}/>
       </div>
      
</div>
  )
}
