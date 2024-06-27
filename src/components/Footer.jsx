import React from 'react'

const Footer = () => {
  return (
<div >
    <div className='md:flex justify-between px-6 md:px-24 mt-14'>
       <div className=''>
            <h1 className='font-poppins font-normal text-3xl text-travel'>jadoo.</h1>
            <p className='text-clear font-poppins text-sm font-normal py-8'>Book your trip in minute, get full <br />
            Control for much longer.
            </p>
        </div>
        <div className='md:flex md:flex-1 justify-center gap-32 px-10'>
            <div>
                <h2 className='text-footer font-poppins font-bold text-xl text-center'>Company</h2>
                <ul className='text-clear font-poppins text-lg font-normal py-8 text-center'>
                    <li><a href="/">About</a></li>
                    <li className='py-6'><a href="#">Careers</a></li>
                    <li><a href="#">Mobile</a></li>
                </ul>
                
            </div>
            <div>
                <h2 className='text-footer font-poppins font-bold text-xl text-center'>Contact</h2>
                <ul className='text-clear font-poppins text-lg font-normal py-8 text-center'>
                    <li><a href="/">Help/FAQ</a></li>
                    <li className='py-6'><a href="#">Press</a></li>
                    <li><a href="#">Affiliates</a></li>
                </ul>
                
            </div>
            <div>
                <h2 className='text-footer font-poppins font-bold text-xl text-center'>More</h2>
                <ul className='text-clear font-poppins text-lg font-normal py-8 text-center'>
                    <li><a href="/">Airlineless</a></li>
                    <li className='py-6'><a href="#">Airline</a></li>
                    <li><a href="#">Low fare tips</a></li>
                </ul>
                
            </div>
            
        </div>
        <div className='text-center'>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div>
                <h2>Discover Our app</h2>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    </div>
    <div className='text-center py-8'>
        <p className='text-clear font-poppins text-sm font-normal'>All rights reserved@jadoo.co</p>
    </div>
    
 
      
    </div>
  )
}

export default Footer
