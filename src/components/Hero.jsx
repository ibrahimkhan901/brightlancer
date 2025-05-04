import React from 'react'
import Image from 'next/image'










const Hero = () => {





    return (
        <div className='h-max w-full overflow-x-hidden flex mb-[-20px]  md:mb-20 '>


            {/* The div which contain the text content about plateform in hero section */}
            <div className="h-full w-[45%] p-5 pt-0 pl-18 hidden md:block">

                <h6 className='font-extrabold text-2xl lg:text-3xl mb-5 '>
                    Pakistan’s Leading eCommerce Skill-Building Academy
                </h6>
                <p className='font-sans font-semibold text-xl lg:text-2xl mb-10 '>
                    Brightlancers is empowering the youth of Pakistan—especially in Bannu and surrounding regions—to build digital careers, grow online businesses, and become successful entrepreneurs in the world’s largest eCommerce markets.</p>


                {/* <img src="https://www.enablers.org/public/assets-app/img/awards/awards.webp" alt="" /> */}

                <Image
                    src="https://www.enablers.org/public/assets-app/img/awards/awards.webp"
                    alt='Logo of Brightlancers'
                    width={800}
                    height={400}
                />

            </div>










            {/* The div which contain the sliding images section */}
            <div className="h-96 md:h-[500px] w-full md:w-[55%] relative overflow-hidden">
                <div className="h-full w-full md:w-[95%] md:h-[90%] absolute top-[-50px] left-0  z-[100] pt-16 md:pt-5">
                    <img
                        className="h-full w-full object-contain"  // <-- use object-contain
                        src="https://www.enablers.org/public/storage/uploads/admin/slider-images//hVJjLRqWwUm8AwsJAAPbPv2jJACkHH77GtyXjCD3.webp"
                        alt="Slider Image"
                    />
                </div>

                <div className="w-[80%] h-40 hidden md:block bg-orange-600 absolute bottom-48 lg:bottom-32 xl:bottom-24  right-0"></div>
            </div>








        </div>
    )
}

export default React.memo(Hero)