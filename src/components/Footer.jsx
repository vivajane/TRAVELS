import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import vect from "../assets/vect.png"
import playstore from "../assets/PlayStore.png"

const Footer = () => {
  return (
<div className='px-6 md:px-24 mt-24'>
    <div className='md:flex justify-between '>
       <div className=''>
            <h1 className='font-poppins font-normal text-3xl text-travel'>jadoo.</h1>
            <p className='text-clear font-poppins text-sm font-normal py-8'>Book your trip in minute, get full <br />
            Control for much longer.
            </p>
        </div>
        <div className='md:flex md:flex-1 justify-center gap-32 px-10'>
            <div>
                <h2 className='text-footer font-poppins font-bold text-xl text-center'>Company</h2>
                <ul className='text-clear font-poppins text-lg font-normal py-8 text-center left'>
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
            <div className='flex justify-center md:justify-start gap-4 text-center mx-auto'>
                <FaFacebook />
                < FaInstagramSquare />
                <AiFillTwitterCircle />
            </div>
            <div className='my-4'>
                <h2 className='popular font-poppins font-normal text-2xl'>Discover Our app</h2>
                <div className='flex gap-2  md:justify-start justify-center mt-4'>
                    <img className='bg-black rounded-3xl px-4 py-2' src={vect} alt="v" />
                    <img src={playstore} alt="p" />
                </div>
            </div>
        </div>
    </div>
    <div className='text-center  py-8'>
        <p className='text-clear font-poppins text-sm font-normal'>All rights reserved@jadoo.co</p>
    </div>
    
 
      
    </div>
  )
}

export default Footer
