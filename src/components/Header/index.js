import React from 'react'
import { Link } from 'react-router-dom'
import CountryDrop from '../CountryDrop'

const Header = () => {
  return (
   <>
   <div className='headerWrapper'>
    <div className='top-strip bg-blue'>
        <div className='container'>
            <p className='mb-0 mt-0 text-center'>Due to the COVID 19 epidemic, orders may be processed with a slight delay</p>
        </div>
    </div>
    <div className='header'>
      <div className='container'>
        <div className='row'>
          <div className='logoImage d-flex col-sm-2 align-items-center'>
            <Link to='/'><img src={logo} alt='companylogo'/></Link>
          </div>
          <div className='col-sm-10 d-flex align-items-center second'>
          <CountryDrop/>
          </div>
        </div>
      </div>
    </div>

   </div>
   </>
  )
}

export default Header
