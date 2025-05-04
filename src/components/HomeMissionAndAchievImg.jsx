import React from 'react'
import Image from 'next/image'
import AwardTakingImg1 from "../../public/images/AwardTaking1.webp"
import AwardTakingImg2 from "../../public/images/AwardTaking2.webp"
import AwardTakingImg3 from "../../public/images/AwardTaking3.webp"
import AwardTakingImg4 from "../../public/images/AwardTaking4.webp"
import AwardTakingImg5 from "../../public/images/AwardTaking5.webp"
import AwardTakingImg6 from "../../public/images/AwardTaking6.webp"
import AwardTakingImg7 from "../../public/images/AwardTaking7.webp"
import AwardTakingImg8 from "../../public/images/AwardTaking8.webp"
import AwardTakingImg9 from "../../public/images/AwardTaking9.webp"




const HomeMissionAndAchievImg = () => {
    return (
        <div className='h-max w-full overflow-x-hidden overflow-y-hidden flex flex-col p-10 py-20 '>

            {/* Photo gallary which contain all the achievements of brighlancers */}
            <div className="h-max w-full flex flex-wrap justify-center items-center gap-2 mb-5 ">

                {
                    [AwardTakingImg1, AwardTakingImg2, AwardTakingImg3, AwardTakingImg4, AwardTakingImg5, AwardTakingImg6, AwardTakingImg7].map((eachImage, index) => {
                        return (
                            <Image
                                src={eachImage}
                                alt='Award Taking Image'
                                height={400}
                                width={800}
                                key={index}
                                className='h-max w-full sm:w-[50%] md:w-[30%] '
                            />
                        )
                    })
                }


            </div>





            {/* Mission explained section */}
            <div className="min-h-[100vh] w-full flex flex-col sm:flex-row">

                {/* Mission explanation text */}
                <div className="h-max sm:h-[100vh]  w-full sm:w-1/2 bg-zinc-800 p-10 py-20 text-zinc-200">

                    <h1 className='text-3xl sm:text-4xl mb-5'>OUR MISSION</h1>
                    <p className='text-lg font-light'>Brightlancers is committed to making Pakistan—especially the youth of Bannu—a powerful force in the global eCommerce industry. Our team is fully focused on helping individuals become skilled entrepreneurs and work on international platforms like Amazon and Shopify. We aim to create thousands of digital earning opportunities through practical training and mentorship.</p>
                    {/* 
                    <button className='w-max  bg-blue-600 p-2 rounded-sm px-10 mt-10'>
                        ___FINDOUT MORE....
                    </button> */}
                </div>













                {/* other some analytics */}
                <div className=" h-max sm:h-[100vh] w-full sm:w-1/2  bg-zinc-900 flex flex-wrap gap-x-20 gap-y-10 justify-center p-10 py-32">







                    <div className="h-14 w-40 flex">

                        <i className="ri-building-4-line     text-6xl text-orange-600 font-extralight flex"></i>

                        <div className="w-40 text-xl text-zinc-200">
                            <h1>10,000+</h1>
                            <p className='w-36 text-sm'>NEW BUSINESS IN PAKISTAN</p>
                        </div>


                    </div>





                    <div className="h-14 w-40 flex">

                        <i className="ri-global-line      text-6xl text-orange-600 font-extralight flex"></i>

                        <div className="w-40 text-xl text-zinc-200">
                            <h1>5+ Million PKR</h1>
                            <p className='w-36 text-sm'>EXPORTS FOR THE WORLDWIDE</p>
                        </div>

                    </div>










                    <div className="h-14 w-40 flex">

                        <i className="ri-user-star-line      text-6xl text-orange-600 font-extralight flex"></i>

                        <div className="w-40 text-xl text-zinc-200">
                            <h1>500+</h1>
                            <p className='w-36 text-sm'>FREELANCERS</p>
                        </div>

                    </div>



                </div>














            </div>




        </div>
    )
}

export default React.memo(HomeMissionAndAchievImg)