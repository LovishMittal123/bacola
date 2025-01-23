import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import Button from '@mui/material/Button';
const CountryDrop = () => {
  return (
    <div>
      <Button className='countryDrop'>
            <div className='info d-flex flex-column'>
              <span className='label'>Your Location</span>
              <span className='name'>Europe</span>
            </div>
            <span className='angle'><FaAngleDown/></span>
          </Button>
    </div>
  )
}

export default CountryDrop
