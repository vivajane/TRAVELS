import message from "../assets/message.png";
import logo from "../assets/groupppp.png"
import spiral from "../assets/spiral.png"
const Suscribe = () => {
  return (
    <div className="px-6 md:px-24 bg-suscribe md:w-[1050px] w-[350px] mx-auto md:h-[307px] h-[300px] rounded-tl-[140px] relative">
        <p className="font-poppins font-semibold text-xs md:text-xl text-purple py-12 px-auto text-center">Subscribe to get information, latest news and other <br />
        interesting offers about Cobham</p>
        <form className="md:flex gap-2 md:mx-60 font-xs text-center px-auto mx-auto ">
            <input className="px-4 py-2 mb-4 rounded md:w-72 w-30" type="text" placeholder="Your email" />
            <button className="bg-gradient-to-r from-left to-right px-4 pl-6 pr-4 rounded">Suscribe</button>
        </form>
        <img className="md:absolute hidden md:top-[-20px] md:right-[-60px] top-[-20px] right-[-20px]" src={message} alt="message w-[100px]" />
        <img src={logo} className="md:absolute hidden bottom-[-50px] right-[20px] md:bottom-[-50px] md:right-[-70px]" alt="logo" />
        <img className="md:absolute hidden top-0 right-0" src={spiral} alt="spi" />
        <img className="md:absolute hidden top-[140px] left-[-50px]" src={spiral} alt="spiral" />
      
    </div>
  )
}

export default Suscribe
