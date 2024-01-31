import { GiGrowth } from "react-icons/gi";
import { Button } from "./ui/button";
import Qanda from "./qanda";
import { motion } from "framer-motion";

const Hero = () => {
    return <div>
        <section className="text-gray-600 body-font pt-28">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <p>Welcome to,</p>
      <h1 className="title-font text-4xl  lg:text-7xl mb-4 font-bold text-gray-900">Techy 
        <span>Softwares</span>
      </h1>
      <p className="mb-8 font-semibold leading-relaxed">Empower your business with our cutting-edge software solutions designed to propel your digital endeavors to new heights. Enter a realm where innovation converges with efficiency, and let Techy Softwares be your guiding force toward unprecedented technological advancement.</p>
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded-full  shadow-black shadow-2xl  " alt="hero" src="/hero.jpg"/>
    </div>
  </div>
</section>
<hr  />
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded shadow-black shadow-2xl" alt="hero" src="/hero2.jpg"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Embark on a journey towards success with us,</h1>
      <span className="mb-8 leading-relaxed items-start">
        <ul className="text-left lg:ml-60 space-y-2 text-gray-700 text-xl font-bold ">
        <li >⚫Pioneering excellence in digital solutions</li>
        <li >⚫Elevating brands and nurturing growth</li>
        <li>⚫Delivering dynamic & personalized experiences</li>
        </ul>
        </span>
        
      
    </div>
    <div className="pt-10 font-semibold" >
        <Button size={"lg"} variant={"outline"} className="flex"><GiGrowth className="text-2xl mr-2 "/>Grow with Us!</Button>
    </div>
  </div>
</section>
<Qanda/>
    </div>;
}



export default Hero;