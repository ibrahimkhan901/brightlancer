import Image from 'next/image'
import React from 'react'
import {
    qaiserSirImg,
    bilalSirImg
} from '@/utils/Images.js'
const AboutExecutiveMsg = () => {
    return (
        <div className='min-h-[100vh] w-full p-10 mt-10'>




            {/* heading */}
            <div className="text-2xl md:text-4xl  text-[#f05c2f] mb-5 font-extrabold text-center sm:text-start">
                EXECUTIVE MESSAGE
            </div>







            {/* The photo and messeges */}
            <div className="min-h-[100vh] w-full flex flex-col sm:flex-row p-3 lg:p-10  ">



                {/* CEO image and photo */}
                <div className="h-max w-full sm:w-1/2  lg:px-10 mb-10 p-6 flex justify-center flex-col">

                    <div className="h-max w-full sm:w-1/2  mb-10 flex justify-center items-center flex-col">
                        <Image
                            src={qaiserSirImg}
                            height={400}
                            width={800}
                            alt='Brightlacner Teacher image'
                        />
                        <div className="h-max w-full  flex justify-center items-center p-2 bg-[#f05c2f]">
                            <h1 className='h-max w-max textlg  sm:text-xl bg-[#f05c2f] px-2 text-zinc-100'>ENGR QAISER IQBAL</h1>
                        </div>

                    </div>

                    <p className='text-sm md:text-[15px] lg:text-lg text-center md:text-start  '>I believe growth is essential for every Pakistani to thrive in this fast-moving, tech-driven era. We are living in the age of digital transformation, and the sooner we embrace this change, the faster we move towards success. True success comes not only from academic knowledge but also from strong character and direct industry exposure. At Brightlancers, we are fully committed to nurturing young talent and building a culture of innovation, entrepreneurship, and real-world skills.</p>

                </div>




                {/* COO image and photo */}

                <div className="h-max w-full sm:w-1/2  lg:px-10 mb-10 p-6">

                    <div className="h-max w-full sm:w-1/2  mb-10 flex justify-center items-center flex-col ">
                        <Image
                            src={bilalSirImg}
                            height={400}
                            width={800}
                            alt='Brightlacner Teacher image'
                        />

                        <div className="h-max w-full  flex justify-center items-center p-2 bg-[#f05c2f]">
                            <h1 className='h-max w-max text-lg  sm:text-xl bg-[#f05c2f] px-2 text-zinc-100'>ENGR QAISER IQBAL</h1>
                        </div>
                    </div>

                    <p className='text-sm md:text-[15px] md:text-lg text-center md:text-start '>I strongly believe that the youth of Pakistan have incredible potential—but many face challenges when it comes to choosing the right career path. At Brightlancers, our mission is to guide them with clarity and purpose, helping them align their skills with real opportunities in the digital world. I’m confident that our youth are the driving force behind Pakistan’s future in the global eCommerce and tech industry, and it’s our responsibility to empower and support them in every step of their journey.</p>

                </div>






            </div>












        </div>
    )
}

export default React.memo(AboutExecutiveMsg)