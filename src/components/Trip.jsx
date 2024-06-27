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
import short from "../assets/short.png";
import love from "../assets/love.png"




const Trip = () => {
  return (
    <div className='px-6 md:px-24'>
        <h3 className='mt-40 mb-8 font-poppins font-semibold text-[clear] text-xl'>Easy and Fast</h3>
        <div className='md:flex md:gap-x-64 md:items-center'>
            <div className='relative' >
             <div>
                <h1 className='mb-4 md:leading-snug font-volkhov font-bold text-favorite text-xl md:text-4xl'>Book Your Next Trip <br /> In 3 Easy Steps</h1>
             </div>
             <div className='md:flex gap-4 pt-4 items-center'>
                <img src={grouppp} alt="" className='h-fit' />
                <div>
                    <h3 className='font-poppins font-bold text-base'>Choose Destination</h3>
                    <p className='text-clear font-poppins text-base font[400]'>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Itaque, laboriosam.</p>
                </div>
             </div>
             <div className='md:flex gap-4 my-8 items-center'>
             <img className='h-fit' src={group} alt="" />
                <div>
                    <h3 className='font-poppins font-bold text-base'>Make a Payment</h3>
                    <p className='text-clear font-poppins text-base font[400]'>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Itaque, laboriosam.</p>
                </div>
             </div>
             <div className='md:flex gap-4 md:items-center'>

                <img src={groupp} alt="" className='h-fit' />
                <div className='my-6'>
                    <h3 className='font-poppins font-bold text-base'>Reach Airport on Selected Date</h3>
                    <p className='text-clear font-poppins text-base font[400]'>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Itaque, laboriosam.</p>
                </div>
            </div>
            </div>
            <div className='relative'>
             <div>
                <img src={red} alt="" />
                <h3 className='text-blackk font-poppins font-[400] text-sm px-auto py-1'>Trip To Greece</h3>
                <p className='text-brownn font-poppins font-[400] text-sm px-auto py-1'>14-29-June| by Robbin joseph</p>
             </div>
             <div className='flex w-[30px] h-fit gap-8 pt-2'>
                <img src={leaf} alt="" />
                <img src={map} alt="" />
                <img src={message} alt="" />
             </div>
             
             <div className='flex gap-4 pt-8'>
                <div className='flex gap-4'>
                 <img className='h-fit' src={building} alt="" />
                 <p className='text-brownn font-poppins font-[400]  text-sm'>24 people going</p>
                </div>
                <img className='h-fit' src={love} alt="" />
             </div>
             <div className='md:absolute top-40 -right-20 bg-white px-auto py-2 md:justify-between gap-2 md:flex mt-12 rounded-md px-4'>
                <img src={short} alt="" className='w-[30px] h-fit'/>
                <div>
                    <p className='text-brownn font-poppins font-[400] text-sm'>Ongoing</p>
                    <h3 className='text-blackk font-poppins font-[400] text-sm'>Trip To Home</h3>
                    <p className='text-blackk font-poppins font-[400] text-sm'><strong className='text-complete font-poppins font-[400] text-sm pr-2'>40%</strong>Completed</p>
                    <img src={line} alt="" />
                </div>
             </div>
            </div>
        </div>
      
    </div>
  )
}

export default Trip
