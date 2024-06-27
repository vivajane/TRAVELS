import React from 'react';
import { BiSolidNavigation } from "react-icons/bi";
import mosque from './assets/mosque.png'
import yellow from './assets/yellowcity.jpg';
import mosqueanother from './assets/anotherMosque.png';
import decore from "./assets/Decore.png"

const Destination = () => {
  return (
    <div className='px-6 md:px-24'>
        <div className='text-center'>
            <h3 className='font-poppins font-semibold text-lg text-purple'>Top Selling</h3>
            <h1 className='font-volkhov md:font-bold font-semibold my-4 text-top md:text-4xl text-2xl mb-10'>Top Destinations</h1>
        </div>
        <div className='md:flex md:gap-3 block relative font-poppins font-medium'>
            <div className='bg-white'>
                <img src={mosque} alt="mosque" />
                <div className='text-center'>
                <div className='flex gap-8 md:gap-16 md:mx-10 mx-10 py-4'>
                    <p>Rome, Italy</p>
                    <p>$542k</p>
                </div>
                <div className='flex items-center gap-4 md:mx-10'>
                    <BiSolidNavigation/>
                    <p>10 Days Trip</p>
                </div>
                </div>
               
            </div>
            <div className='bg-white'>
                <img src={mosqueanother} alt="mosque" />
                <div className='text-center'>
                    
                <div className='flex gap-8 md:gap-16 md:mx-10 mx-10 py-4'>
                    <p>London, UK</p>
                    <p>$4.2k</p>
                </div>
                <div className='flex items-center gap-4 md:mx-10'>
                    <BiSolidNavigation/>
                    <p>12 Days Trip</p>
                </div>
                </div>
                
            </div>
            <div className='bg-white'>
                <img src={mosqueanother} alt="mosque" />
                <div className='text-center'>
                <div className='flex gap-8 md:gap-16 md:mx-10 mx-10 py-4'>
                    <p>Full Europe</p>
                    <p>$15k</p>
                </div>
                <div className='flex items-center gap-4 md:mx-10'>
                    <BiSolidNavigation/>
                    <p>28 Days Trip</p>
                </div>
                </div>
            </div>
            <img src={decore} alt="" className='absolute top-10 right-0 z-0' />

        </div>
      
    </div>
  )
}

export default Destination
