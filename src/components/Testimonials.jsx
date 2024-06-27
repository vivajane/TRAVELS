import fullstop from "../assets/fullstop.png"
import test from "../assets/test.png"
const Testimonials = () => {
  return (
    <div className="px-6 md:px-24 md:flex gap-x-64 md:mt-16 py-14">
        <div>
            <h3 className="text-clear font-poppins font-semibold text-lg px-auto  ">TESTIMONIALS</h3>

            <h1 className="text-top font-volkhov text-3xl font-bold">What People Are Saying <br /> About Us</h1>

            <img className="py-16" src={fullstop} alt="fullstop" />
        </div>
        <div className="text-clear font-poppins relative ">
            <div className=" bg-slate-50 py-4 rounded-lg px-6 md:mt-2 mt-14">
            <p  className="text-sm font-[400px] pb-8">
            “On the Windows talking painted pasture yet its <br /> express parties use. Sure last upon he same as <br /> knew next. Of believed or diverted no.”
            </p>
            <h3 className="text-base font-semibold ">Mike taylor</h3>
            <p className="text-sm font-[400px] py-3">Lahore Pakistan</p>
            <img className="absolute md:top-[-40px] md:left-[-70px] top-[-72px] left-[-20px]" src={test} alt="test" />
            </div>
            <div className="px-14 md:py-4 py-2">
                <h3 className="text-base font-semibold">Chris Thomas</h3>
                <p className="text-sm font-[400px]">CEO of Red Button</p>
            </div>

        </div>
      
    </div>
  )
}

export default Testimonials
