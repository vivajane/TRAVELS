import React from 'react';
import { BiSolidNavigation } from "react-icons/bi";
import mosque from './assets/mosque.png'
import yellow from './assets/yellowcity.jpg';
import mosqueanother from './assets/anotherMosque.png';

const Destination = () => {
  return (
    <div className='px-6 md:px-24'>
        <div>
            <h3>Top Selling</h3>
            <h1>Top Destinations</h1>
        </div>
        <div className='md:flex md:justify-center md:gap-3 block'>
            <div>
                <img src={mosque} alt="mosque h-auto" />
                <div className='flex justify-between'>
                    <p>Rome, Italy</p>
                    <p>$5,42k</p>
                </div>
                <div className='flex items-center gap-4'>
                    <BiSolidNavigation/>
                    <p>10 Days Trip</p>
                </div>
                <div>

                </div>
            </div>
            <div>
                <img src={yellow} alt="mosque h-auto" />
                <div className='flex justify-between'>
                    <p>London, UK</p>
                    <p>$4.2k</p>
                </div>
                <div className='flex items-center gap-4'>
                    <BiSolidNavigation/>
                    <p>12 Days Trip</p>
                </div>
                <div>

                </div>
            </div>
            <div>
                <img src={mosqueanother} alt="mosque h-auto" />
                <div className='flex justify-between'>
                    <p>Full Europe</p>
                    <p>$15k</p>
                </div>
                <div className='flex items-center gap-4'>
                    <BiSolidNavigation/>
                    <p>28 Days Trip</p>
                </div>
                <div>

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Destination
