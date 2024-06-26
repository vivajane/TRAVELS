
import arrowdown from "../assets/arrowdown.png";
import logo from "../assets/Logoo.png";
import { FaTimes } from "react-icons/fa";
import { useState } from 'react';
<FaTimes />
import { GiHamburgerMenu } from "react-icons/gi";
<GiHamburgerMenu />

const Header = () => {
    const [show, setShow] = useState(false)
    
    const OnClickHandler = ()=>
        setShow((prev) => !prev)
       
    
  return (
    <div className={`flex flex-col ${show && "overflow-hidden h-screen"}`}>
    
    <nav className="flex gap-4 px-6 md:px-24 py-4 md:py-4 relative mt-4">
        <div className="flex items-center justify-between w-full md:w-fit">
        <img src={logo} alt="logo"/>
        <div className="md:hidden block" onClick={OnClickHandler}>{show ? <FaTimes/>:<GiHamburgerMenu/>}</div>
        </div>
        <ul className="md:flex hidden gap-3 items-center flex-1 justify-center font-poppins font-semibold mt-4">
            <li>Destinations</li>
            <li>Hotels</li>
            <li>Flights</li>
            <li>Bookings</li>
        </ul>
        <ul className={`flex flex-col md:hidden gap-3 top-16 items-center h-screen  w-full bg-black absolute py-8 ${show ? 'inset-0 ' : 'hidden'} text-gray-50`}>
            <li className="py-4">Destinations</li>
            <li className="py-4">Hotels</li>
            <li className="py-4">Flights</li>
            <li className="py-4">Bookings</li>
            <button className="py-4">Login</button>
            <button className="py-4">Signup</button>
            <div className="flex items-center gap-2 py-4" >
                <p>EN</p>
                <img src={arrowdown} alt="arrowdown" />
            </div>
        </ul>
        <div className="md:flex hidden gap-3 items-center font-poppins font-semibold">
            <button>Login</button>
            <button>Signup</button>
            <div className="flex items-center gap-2" >
                <p>EN</p>
                <img src={arrowdown} alt="arrowdown" />
            </div>
        </div>
        

    </nav>
    </div>
    // <div>
    //     <nav className='md:flex items-center h-fit bg-green-500 md:justify-between'>
    //        <div className='flex justify-between bg-red-500'>
    //        <ul>
    //             <li><img src={logo} alt="logo"/></li>
    //         </ul>
    //         <div className='md:hidden' onClick={OnClickHandler}  >
    //             {show ? <FaTimes/> : <GiHamburgerMenu/>}
    //         </div>
    //        </div>
           
    //        <ul className= {`md:flex md:item-center md:gap-4 bg-black absolute md:relative ${show ? 'inset-0 ' : '-left-[200%] hidden'} w-24 fixed flex-col text-gray-50 bg-blue-500 `}>
    //             <li>Destinations</li>
    //             <li>Hotels</li>
    //             <li>Flights</li>
    //             <li>Bookings</li>
    //             <li><button>Login</button></li>
    //             <li><button>SignUp</button></li>
    //             <ul className='md:flex md:items-center md:gap-2'>
    //                 <li>EN</li>
    //                 <span><img src={arrowdown}alt="" /></span>
    //             </ul>

    //         </ul>
           
           
            
    //     </nav>
        
      
    // </div>
  )
}

export default Header
