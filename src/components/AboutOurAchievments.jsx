import React from 'react'
import Image from 'next/image'

import {
    awardTakingImg2,
    awardTakingImg3,
    awardTakingImg4,
    awardTakingImg5,
    awardTakingImg6,
    seminarImg1
} from "../utils/Images.js"









const AboutOurAchievments = () => {




    let achievementsArray = [
        "Saqib Azhar was recognized as a high achiever in the National Youth Awards.",
        "In KPK, Brightlancers has partnered with the United Nations on a collaborative project to empower youth.",
        "Brightlancers' notable contributions and accomplishments have earned them national and international recognition.",
        "Introduced Brightlancers Academy’s innovative training programs focusing on digital skills and eCommerce in Pakistan.",
        "Brightlancers actively participates as Board Patrons of Youth Parliament & Members of Youth General Assembly.",
        "Brightlancers has partnered with over 150 organizations to provide valuable opportunities for youth in Pakistan.",
        "The Brand of the Year Award for Best eCommerce Skill Learning Platform in Pakistan has been awarded to Brightlancers.",
        "Brightlancers received multiple awards from government officials for their impactful contributions to youth development.",
        "Brightlancers introduced Degree Programs integrated with eCommerce skills in Pakistan’s education system.",
        "To advance Pakistan's digital economy, Saqib Azhar has been named as the IT Advisor to the Prime Minister of Pakistan, Mr. Shahbaz Sharif."
    ]



       const imagesArray = [
           awardTakingImg5,
           awardTakingImg3,
            awardTakingImg2,
            awardTakingImg4,
            awardTakingImg6,
            seminarImg1
        ]
    









    return (
        <div className=' w-full overflow-x-hidden p-10 '>




            {/* Heading */}
            <div className="text-3xl text-center md:text-start  lg:text-4xl  text-[#f05c2f] mb-10 font-extrabold ">
                <div className="  md:text-4xl">OUR</div>
                <div className="  md:text-4xl">ACHIEVEMENTS</div>
            </div>











            {/* descripttion with side image and also some icons at the bottom */}
            <div className="h-max w-full flex flex-col md:flex-row justify-center text-center lg:justify-start md:text-start gap-x-10 mb-10">


                <div className="h-full md:w-[100%]">
                    <p className='mb-5'>
                        Brightlancers has been recognized for its outstanding contribution to empowering Pakistan’s youth in the digital and eCommerce space. We are proud to have been awarded the Best eCommerce Academy of the Year in 2023 and 2024. Our dedication has earned us accolades such as Brand of the Year and Fastest Growing Digital Education Platform in 2024.

                        Recently, Brightlancers has also received international recognition from prestigious bodies like the United Nations Youth Program for our significant impact on the youth of Pakistan, helping them step into the world of eCommerce and digital entrepreneurship.
                    </p>
                    
                </div>




            </div>














 
            {/* The images of achievements section */}
            <div className="h-full w-full  flex items-center flex-wrap justify-center">

                {
                  imagesArray.map((eachImage, index) => {
                        return (
                           
                            <Image  
                            key={index}
                            src={eachImage}
                            alt="Award taking image"
                            height={400}
                            width={800}
                            className='h-max w-full sm:w-[50%] md:w-[30%] '
                            />
                        
                        )
                    })
                }
            </div>











            {/* Other achievement  */}
            <div className=" w-full flex flex-col-reverse lg:flex-row justify-center lg:justify-start text-center sm:text-start sm:p-10">


                <div className="h-full w-full p-6">
                    {
                        achievementsArray.map((eachAchieve, index) => {
                            return (
                                <div
                                    key={index}
                                    className="font-medium">
                                    {eachAchieve}
                                    <div className="h-[1px] w-full bg-zinc-300 mb-4"></div>
                                </div>

                            )
                        })
                    }
                </div>













            </div>













        </div>
    )
}

export default React.memo(AboutOurAchievments)