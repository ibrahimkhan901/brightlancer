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


        <div className="mt-0 flex flex-col-reverse lg:flex-row w-full bg-zinc-900 overflow-x-hidden mb-[-20px] md:mb-20 pt-32">







            {/* Text Section (on bottom for small, left for md+) */}
            <div className="w-full lg:w-1/2 p-5  sm:pt-10 sm:pl-18  xl:mt-10 text-zinc-100 text-center sm:text-start">
                <h1 className="font-extrabold text-2xl lg:text-4xl mb-5 text-[#fd6a0e]">
                    Brightlancer Technologies
                </h1>
                <p className="font-sans font-medium text-lg lg:text-xl mb-10 text-shadow-zinc-400">
                    Brightlancer Technologies is a leading e-skills and digital education platform dedicated to empowering the youth of Pakistan. Focused on practical learning and globally recognized certifications, Brightlancer has equipped over 10,000 students with in-demand digital skills—enabling them to earn, grow, and compete in international markets. Our mission is to unlock economic opportunities through skill development, innovation, and career-oriented training.
                    Brightlancer Technologies, in collaboration with NAVTTC, KPIT Board, and ICT, empowers youth—especially in KPK and ex-FATA—with e-skills and international certifications. Over 10,000 students have been trained to earn and thrive in the global digital economy.
                    We focus on practical, in-demand skills that open doors to freelancing, remote jobs, and entrepreneurship.
                    Our mission is to bridge the skill gap and create a self-reliant, tech-enabled generation across Pakistan.                                </p>
            </div>






            {/* The sliding image container */}
            <div className="h-max    w-full lg:w-1/2 overflow-hidden p-5 mb-10 sm:mb-0  ">
                <div
                    className="relative flex items-start justify-start h-max  w-full overflow-x-hidden snap-x snap-mandatory scroll-smooth z-10 rounded-lg">
                    {imagesArray.map((src, index) => (
                        <div key={index}
                            style={{ transform: `translateX(${-(currentSlideValue)}%)` }}
                            className="flex-shrink-0 w-full snap-start xl:mt-10 relative transition-all duration-1000">
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