"use client";
import React, { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import Image from 'next/image'
import {
    awardTakingImg2,
    awardTakingImg3,
    awardTakingImg4,
    awardTakingImg5,
    awardTakingImg6,
    seminarImg1,
    droneImg1,
    droneImg2
} from "../utils/Images.js"











const Hero = () => {

    const [currentSlideValue, setCurrentSlideValue] = useState(0)

    const imagesArray = [
        droneImg1,
        droneImg2,
        awardTakingImg5,
        awardTakingImg4,
        awardTakingImg6,
        awardTakingImg2,
        awardTakingImg3,
        seminarImg1
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
        }, 4500);

        return () => clearTimeout(timer);
    }, [currentSlideValue]);














    return (


        <div className="mt-0 flex flex-col-reverse md:flex-row w-full bg-zinc-900 overflow-x-hidden mb-[-20px] md:mb-20">







            {/* Text Section (on bottom for small, left for md+) */}
            <div className="w-full md:w-1/2 p-5  pt-10 pl-18  lg:mt-10 text-zinc-100 ">
                <h1 className="font-extrabold text-2xl lg:text-4xl mb-5 text-[#fd6a0e]">
                    Brightlancer Technologies
                </h1>
                <p className="font-sans font-medium text-lg lg:text-xl mb-10 text-shadow-zinc-400">
                    Brightlancers is empowering the youth of Pakistan—especially in Bannu
                    and surrounding regions—to build digital careers, grow online
                    businesses, and become successful entrepreneurs in the world’s
                    largest eCommerce markets.
                </p>
            </div>






            {/* The sliding image container */}
            <div className="h-max    w-full md:w-1/2 overflow-hidden p-5 mb-10 sm:mb-0  ">
                <div
                    className="relative flex items-start justify-start h-max  w-full overflow-x-hidden snap-x snap-mandatory scroll-smooth z-10 rounded-lg">
                    {imagesArray.map((src, index) => (
                        <div key={index}
                            style={{ transform: `translateX(${-(currentSlideValue)}%)` }}
                            className="flex-shrink-0 w-full snap-start relative transition-all duration-1000">
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
                        className="ri-arrow-right-line   absolute top-1/2 -translate-y-1/2 left-2 rotate-180  z-20 text-zinc-100 border-2 select-none outline-none rounded-full border-zinc-100 text-3xl"></i>
                    <i
                        onClick={handleRightIconClick}
                        className="ri-arrow-right-line   absolute top-1/2 -translate-y-1/2 right-2  z-20 text-zinc-100 border-2 select-none outline-none rounded-full border-zinc-100 text-3xl"></i>

                </div>
            </div>










        </div>
    )
}

export default React.memo(Hero)