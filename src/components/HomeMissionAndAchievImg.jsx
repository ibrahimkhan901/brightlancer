import React from 'react'
import Image from 'next/image'


import {
    awardTakingImg3,
    awardTakingImg4,
} from "../utils/Images.js"










const HomeMissionAndAchievImg = () => {


    const imagesArray = [
        awardTakingImg3,
        awardTakingImg4
    ]
















    return (
        <div className='h-max w-full overflow-x-hidden overflow-y-hidden flex flex-col p-10 py-20 '>

            {/* Photo gallary which contain all the achievements of brighlancers */}
            <div className="h-max w-full flex flex-wrap justify-center items-center gap-2 mb-5 ">

                {
                    imagesArray.map((eachImage, index) => {
                        return (
                            <Image
                                src={eachImage}
                                alt='Award Taking Image'
                                height={400}
                                width={800}
                                key={index}
                                className='h-auto w-auto sm:w-[40%] md:w-[30%] rounded-lg '
                            />
                        )
                    })
                }


            </div>





            {/* Mission explained section */}
            <div className="h-max w-full flex flex-col sm:flex-row ">

                {/* Mission explanation text */}
                <div className="h-max sm:h-[100vh]  w-full sm:w-1/2 bg-zinc-800 p-5 sm:p-10 sm:pt-20 text-zinc-200 text-center sm:text-start">

                    <h3 className='text-3xl sm:text-4xl mb-5 text-orange-400 font-extrabold '>OUR MISSION</h3>
                    <p className='text-md md:text-lg font-light'>
                        At Brightlancer Technologies, our mission is to empower the youth of Pakistan—especially from Khyber Pakhtunkhwa (KPK) and ex-FATA regions—by equipping them with future-ready digital skills. We are committed to helping students unlock their potential, enabling them to earn millions through freelancing, remote jobs, and global opportunities. With over 10,000 students already trained, we focus on practical, income-generating e-skills backed by international certifications. In collaboration with NAVTTC, KPIT Board, and the Ministry of ICT, we’re creating real pathways to success for underserved communities. Brightlancer is more than just an education platform—it’s a nationwide movement for youth empowerment. We believe every student deserves access to the global digital economy, and we’re here to bridge the gap between learning and earning. By turning raw talent into job-ready professionals, we are shaping a self-reliant, tech-enabled generation that will lead Pakistan into a brighter, digitally-driven future.
                    </p>

                </div>













                {/* other some analytics */}
                <div className=" h-max sm:h-[100vh] w-full sm:w-1/2  bg-zinc-900 flex flex-wrap gap-x-20 gap-y-10 justify-center p-10 py-32">







                    <div className="h-14 w-40 flex">

                        <i className="ri-building-4-line     text-6xl text-orange-400 font-extralight flex"></i>

                        <div className="w-40 text-xl text-zinc-200">
                            <h6>10,000+</h6>
                            <p className='w-36 text-sm'>NEW BUSINESS IN PAKISTAN</p>
                        </div>


                    </div>





                    <div className="h-14 w-40 flex">

                        <i className="ri-global-line      text-6xl text-orange-400 font-extralight flex"></i>

                        <div className="w-40 text-xl text-zinc-200">
                            <h6>5+ Million PKR</h6>
                            <p className='w-36 text-sm'>EXPORTS FOR THE WORLDWIDE</p>
                        </div>

                    </div>










                    <div className="h-14 w-40 flex">

                        <i className="ri-user-star-line      text-6xl text-orange-400 font-extralight flex"></i>

                        <div className="w-40 text-xl text-zinc-200">
                            <h6>500+</h6>
                            <p className='w-36 text-sm'>FREELANCERS</p>
                        </div>

                    </div>



                </div>














            </div>




        </div>
    )
}

export default React.memo(HomeMissionAndAchievImg)