import satelite from "../assets/satelliteDish.png"
import plane from "../assets/flight.png"
import mic from "../assets/mic.png"
import power from "../assets/power.png";
import star from "../assets/groupppp.png"
const Category = () => {
  return (
    <div className='md:px-24 px-6 mt-4 relative'>
      <h3 className="font-poppins text-center">CATEGORY</h3>
      <h1 className="volkhov font-black text-3xl text-center mx-auto my-3">We Offer Best Services</h1>
      <img src={star} alt="star" className="absolute top-0 right-3 pr-16" />
      <div className='font-poppins grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto my-16'>
        <div className="my-4 flex flex-col items-center">
            <img src={satelite} alt="satelite w-full h-48 object-cover" />
            <h2 className="pt-4 font-open-sans font-bold">Calculated Weather</h2>
            <p className="font-poppins font-medium mt-4 w-[200px] ml-6">Built Wicket longer admire do barton vanity itself do in it</p>
        </div>
        <div className="my-4 flex flex-col items-center hover:bg-white-200 hover-h-4 hover:px-auto hover:py-4 hover:rounded-3xl relative">
            <div className="absolute hover:bg-red-800 hover:h-20 hover:w-20 hover:rounded-t-lg bottom-0 left-0 hover:-z-50">h</div>
            <img src={plane} alt="plane w-full h-48 object-cover" />
            <h2 className="pt-4 font-open-sans font-bold">Best Flights</h2>
            <p className="font-poppins font-medium mt-4 w-[200px] ml-6">Engrossed listening. Park gate sell they west hard for the.</p>
        </div>
        <div className="my-4 flex flex-col items-center">
            <img src={mic} alt="mic w-full h-48 object-cover" />
            <h2 className="pt-4 font-open-sans font-bold">Local Events</h2>
            <p className="font-poppins font-medium mt-4 w-[200px] ml-6 ">Barton vanity itself do in it. Preferd to men it engrossed listening</p>
        </div>
        <div className="my-4 flex flex-col items-center">
            <img src={power} alt="power w-full h-48 object-cover" />
            <h2 className="pt-4 font-open-sans font-bold">Customization</h2>
            <p className="font-poppins font-medium mt-4 w-[200px] ml-6">We deliver outsourced
               aviation services for
                military customers
            </p>
        </div>
      </div>

      
    </div>
  )
}

export default Category
