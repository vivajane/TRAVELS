import jet from "../assets/jet.png";
import imageone from "../assets/imagee.png"
import imagetwo from "../assets/imageee.png"
import imagethree from "../assets/imageeee.png"
import imagefour from "../assets/imageeeee.png"


const Logos = () => {
  return (
    <div className="px-6 md:px-22 flex justify-around py-6">
        <img className="md:h-20 h-10 object-contain" src={imagefour} alt="image" />
        <img className="md:h-20 h-10 object-contain" src={jet} alt="imageone" />
        <img className="md:h-20 h-10 object-contain" src={imagethree} alt="imagetwo" />
        <img className="md:h-5 h-2 object-contain md:mt-8 mt-4" src={imagetwo} alt="imagethree" />
        <img className="md:h-5 h-2 object-contain md:mt-8 mt-4" src={imageone} alt="imagefour" />
      
    </div>
  )
}

export default Logos
