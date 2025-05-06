"use client";
import React, { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import Image from 'next/image'
import AwardTakingImg1 from "../../public/images/AwardTaking1.webp"
import AwardTakingImg2 from "../../public/images/AwardTaking2.webp"
import AwardTakingImg3 from "../../public/images/AwardTaking3.webp"
import AwardTakingImg4 from "../../public/images/AwardTaking4.webp"
import AwardTakingImg5 from "../../public/images/AwardTaking5.webp"
import AwardTakingImg6 from "../../public/images/AwardTaking6.webp"
import AwardTakingImg7 from "../../public/images/AwardTaking7.webp"











const Hero = () => {

    const [currentSlideValue, setCurrentSlideValue] = useState(0)

    const imagesArray = [
        AwardTakingImg1,
        AwardTakingImg2,
        AwardTakingImg3,
        AwardTakingImg4,
        AwardTakingImg5,
        AwardTakingImg6,
        AwardTakingImg7
    ]









    function handleLeftIconClick(e) {
        // console.log("clicked on right click")
        if (currentSlideValue != 0) {
            setCurrentSlideValue(prev => prev - 100)
        }
    }


    function handleRightIconClick(e) {
        if (currentSlideValue >= ((imagesArray.length) * 100) - 100) {
            setCurrentSlideValue(0)
        } else {
            setCurrentSlideValue(prev => prev + 100);
        }
    }





    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentSlideValue >= ((imagesArray.length) * 100) - 100) {
                setCurrentSlideValue(0)
            } else {
                setCurrentSlideValue(prev => prev + 100);
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, [currentSlideValue]);







    //     useEffect(()=>{
    // console.log(currentSlideValue)
    //     },[currentSlideValue])





    return (


        <div className="min-h-48  flex flex-col-reverse md:flex-row w-full overflow-x-hidden mb-[-20px] md:mb-20">







            {/* Text Section (on bottom for small, left for md+) */}
            <div className="w-full md:w-1/2 p-5 pt-0 pl-18 hidden md:block ">
                <h1 className="font-extrabold text-2xl lg:text-3xl mb-5">
                    Pakistan’s Leading eCommerce Skill-Building Academy
                </h1>
                <p className="font-sans font-medium text-sm lg:text-xl mb-10 text-shadow-zinc-400">
                    Brightlancers is empowering the youth of Pakistan—especially in Bannu
                    and surrounding regions—to build digital careers, grow online
                    businesses, and become successful entrepreneurs in the world’s
                    largest eCommerce markets.
                </p>
            </div>






            {/* The sliding image container */}
            <div className=" md:h-56 lg:h-72 w-full md:w-1/2 overflow-hidden p-5 ">
                <div
                    className="relative flex items-start justify-start h-max md:h-[500px] w-full overflow-x-hidden snap-x snap-mandatory scroll-smooth z-10">
                    {imagesArray.map((src, index) => (
                        <div key={index}
                            style={{ transform: `translateX(${-(currentSlideValue)}%)` }}
                            className="flex-shrink-0 w-full snap-start relative transition-all duration-700">
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                width={800}
                                height={400}
                                className="h-full w-full object-contain rounded-md"
                            />



                        </div>
                    ))}


                    <i
                        onClick={handleLeftIconClick}
                        className="ri-arrow-right-line   absolute top-1/2 left-2 rotate-180 -translate-y-1/2 z-20 text-zinc-100 border-2 select-none outline-none rounded-full border-zinc-100 text-3xl"></i>
                    <i
                        onClick={handleRightIconClick}
                        className="ri-arrow-right-line   absolute top-1/2 right-2 -translate-y-1/2 z-20 text-zinc-100 border-2 select-none outline-none rounded-full border-zinc-100 text-3xl"></i>

                </div>
            </div>










        </div>
    )
}

export default React.memo(Hero)