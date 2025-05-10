import Image from 'next/image'
import React from 'react'


import {
  awardTakingImg5
} from "../utils/Images.js"











const AboutWhoAmI = () => {












  return (
    <div className='h-full w-full overflow-x-hidden' >



      {/* here the images is rendered */}
      <div className="h-full sm:h-[48vh] overflow-hidden w-full flex flex-col sm:flex-row mb-20">


        <Image
          src={awardTakingImg5}
          alt='Image in About'
          height={400}
          width={800}
          className='h-max w-full sm:w-1/2'
        />


        <div className="bg-[#ee7020] h-full w-full md:w-1/2 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl text-zinc-900 font-bold p-10 text-center">
          Pakistan's Best Ecommerce Plateform
        </div>


   
      </div>










      {/* who am i section */}
      <div className=" w-full flex flex-col sm:flex-row gap-x-10 text-center sm:text-start">

        <div className="h-full w-full sm:w-[35%] p-5 text-[#f05c2f] font-extrabold text-4xl flex justify-center sm:justify-end">WHO WE ARE</div>
        <div className="h-full w-full sm:w-[75%] p-5 text-xl font-medium">Brightlancers is on a mission to empower Pakistan—starting from Bannu—as a rising force in the global eCommerce landscape. Our team is fully dedicated to helping individuals unlock their entrepreneurial potential and succeed on international platforms like Amazon, Shopify, and beyond.

          Since our inception, Brightlancers has been delivering cutting-edge training programs, enabling youth to launch profitable eCommerce ventures and build sustainable digital careers. We are committed to driving digital innovation, boosting entrepreneurship, and helping Pakistan become a major global hub for digital skills and online business.
        </div>
      </div>


    </div>
  )
}

export default React.memo(AboutWhoAmI)