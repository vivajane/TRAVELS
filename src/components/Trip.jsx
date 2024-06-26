import React from 'react';
import group from "../assets/group.png"
import groupp from "../assets/Groupp.png"
import grouppp from "../assets/grouppp.png";
import red from "../assets/redgirl.jpg";
import line from "../assets/completed.png";
import building from "../assets/building.png";
import leaf from "../assets/LEAF.png";
import map from "../assets/map.png";
import message from "../assets/message.png";
import short from "../assets/short.png"




const Trip = () => {
  return (
    <div className='px-6 md:px-24'>
        <h3 className='my-4 font--poppins font-semibold'>Easy and Fast</h3>
        <div className='flex justify-between items-center'>
            <div className='relative' >
             <div>
                <h1 className='mb-4 md:leading-snug font-volkhov font-bold text-favorite text-xl md:text-[50px]'>Book Your Next Trip <br /> In 3 Easy Steps</h1>
             </div>
             <div className='md:flex gap-4'>
                <img src={grouppp} alt="" className='' />
                <div>
                    <h3 className='font-poppins font-bold text-base'>Choose Destination</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, laboriosam.</p>
                </div>
             </div>
             <div className='md:flex gap-4 my-4'>
             <img src={group} alt="" />
                <div>
                    <h3 className='font-poppins font-bold text-base'>Make a Payment</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, laboriosam.</p>
                </div>
             </div>
             <div className='md:flex gap-4'>

                <img src={groupp} alt="" />
                <div>
                    <h3 className='font-poppins font-bold text-base'>Reach Airport on Selected Date</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, laboriosam.</p>
                </div>
            </div>
            </div>
            <div className='relative'>
             <div>
                <img src={red} alt="" />
                <h3>Trip To Greece</h3>
                <p>14-29-June| by Robbin joseph</p>
             </div>
             <div className='flex w-[30px] h-fit'>
                <img src={leaf} alt="" />
                <img src={map} alt="" />
                <img src={message} alt="" />
             </div>
             
             <div className='flex gap-4'>
                <img src={building} alt="" />
                <p>24 people going</p>
             </div>
             <div className='md:absolute top-40 -right-20 bg-white px-auto py-5 justify-between gap-2 flex'>
                <img src={short} alt="" className='w-[30px] h-fit'/>
                <div>
                    <p>Ongoing</p>
                    <h3>Trip To Home</h3>
                    <p>40% <strong>Completed</strong></p>
                    <img src={line} alt="" />
                </div>
             </div>
            </div>
        </div>
      
    </div>
  )
}

export default Trip
