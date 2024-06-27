import { FaPlayCircle } from "react-icons/fa";
import travel from "../assets/Traveller.png";
import plane from "../assets/plane.png"

const Hero = () => {
  return (
    <div className="px-6 md:px-24 md:flex block mx-auto items-center md:justify-between md:items-center">
        <div className="font-sans">
            <h2 className="font-poppins text-[10px] mx-auto my-4 md:text-base text-red-400 font-extrabold">BEST DESTINATION AROUND THE WORLD</h2>
            <p className="font-volkhov font-black text-3xl md:text-5xl leading-normal md:leading-snug text-travel">Travel, enjoy
            </p>
            <p className="font-volkhov font-black text-3xl md:text-5xl leading-normal md:leading-snug text-travel">
            and live a new
            </p>
            <p className="font-volkhov font-black text-3xl md:text-5xl leading-normal md:leading-snug tex-travel"> and full life</p>
            <p className="font-poppins mt-4 text-clear font-medium text-base">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the
            </p>
            <div className="gap-20 flex md:gap-8 md:items-center mt-8 ">
            <div className="bg-yellow-600 w-[130px] px-4 py-3 rounded-[10px] ">
                <a href="#" className="text-white">Find out more</a>
            </div>
            <div className="flex items-center gap-4">
                <FaPlayCircle/>
                <p>Play Demo</p>

            </div>
            </div>
         

        </div>
        <div className="relative">
            <img className=" absolute left-10 top-8 " src={plane} alt="plane"/>
            <img src={travel} alt="travel"/>
        </div>
        
    </div>
  )
}

export default Hero
