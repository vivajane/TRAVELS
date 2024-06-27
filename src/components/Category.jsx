import satelite from "../assets/satelliteDish.png"
import plane from "../assets/flight.png"
import mic from "../assets/mic.png"
import power from "../assets/power.png";
import star from "../assets/groupppp.png"
const Category = () => {
  return (
    <div className='md:px-24 px-6 mt-4 relative'>
      <h3 className="font-poppins text-center text-category font-semibold md:text-lg text-sm">CATEGORY</h3>
      <h1 className="volkhov font-bold md:text-4xl text-2xl text-center mx-auto my-3 text-fav">We Offer Best Services</h1>
      <img src={star} alt="star" className="absolute top-0 right-3 pr-16" />
      <div className='font-poppins grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto mb-16'>
        <div className="mb-4 mt-12 flex flex-col items-center">
            <img src={satelite} alt="satelite w-full h-48 object-cover" />
            <h2 className="pt-4 font-open-sans font-bold">Calculated Weather</h2>
            <p className="font-poppins font-medium mt-4 w-[200px] ml-6">Built Wicket longer admire do barton vanity itself do in it</p>
        </div>
        <div className="mb-4 flex flex-col items-center py-0">
            {/* <div className="absolute  bottom-0 left-0"></div> */}
            <img src={plane} alt="plane w-full h-48 object-cover" />
            <h2 className="pb-4 font-open-sans font-bold">Best Flights</h2>
            <p className="font-poppins font-medium w-[200px] ml-6">Engrossed listening. Park gate sell they west hard for the.</p>
        </div>
        <div className="mb-4 flex flex-col items-center mt-12">
            <img src={mic} alt="mic w-full h-48 object-cover" />
            <h2 className="pt-4 font-open-sans font-bold">Local Events</h2>
            <p className="font-poppins font-medium mt-4 w-[200px] ml-6 ">Barton vanity itself do in it. Preferd to men it engrossed listening</p>
        </div>
        <div className="mb-4 flex flex-col items-center mt-12">
            <img src={power} alt="power w-full h-48 object-cover" />
            <h2 className="pt-8 font-open-sans font-bold">Customization</h2>
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
