'use client';

import React, { useContext } from 'react'
import {coursesDataArray} from '../utils/CoursesDataArray.js'
import MyContext from '../context/MyContext.jsx'
import { useRouter } from 'next/navigation.js'
import Logo from '../../public/images/Logo.webp'
import Image from 'next/image.js';













const CoursesCards = () => {



let router= useRouter()



let {setCurrentClickedCourseData}= useContext(MyContext)









    function handleCourseApplyBtnClick(courseData){
        setCurrentClickedCourseData(courseData)
        router.push("/courseApplyPage")
    }









    return (
        <div>



            <div className="mt-20 ">
                <h1 className='text-2xl lg:text-4xl font-bold px-10 mb-3 '>ECOMMERCE TRAINING PROGRAMS THAT WORKS</h1>
                <p className='text-xl lg:text-2xl font-medium px-10'>Step beyond your comfort zone — Brightlancers brings you practical, results-driven training designed to ignite your entrepreneurial journey and digital growth.</p>
            </div>







            <div className="h-max w-full overflow-x-hidden p-10 flex flex-wrap gap-5 justify-center items-center">

                {
                    coursesDataArray.map((eachData, index) => {
                        return (
                            <div
                                key={index}
                                className="min-h-96 w-80 border-1 p-3 md:p-2 pb-5 border-zinc-300 hover:shadow-md transition-all duration-600    shadow-zinc-800 text-center">

                                <div className="h-full w-full relative">
                                    <div className="custom_gray_glassy_effect h-full w-full absolute top-0 right-0"></div>
                                    
                                    <Image
                                        src={Logo}
                                        height={400}
                                        width={800}
                                        alt='Background image of course card'
                                        className=' w-full mb-5 rounded-md'
                                    />
                                    {/* <img
                                        className='h-max w-full mb-5 rounded-md'
                                        src="https://imgs.search.brave.com/OP5tmI1gaTotwGLRpaIsEemIgsuPKRgUrmyiwLh79SA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kM2Yx/aXlmeHh6OGkxZS5j/bG91ZGZyb250Lm5l/dC9jb3Vyc2VzL2Nv/dXJzZV9pbWFnZS82/MmY0OWE4OTBmY2Yu/anBn" alt="" /> */}
                                    <h1
                                        className='h-max w-[90%] absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-zinc-100'>
                                        {eachData.courseName}
                                    </h1>
                                </div>

                                <p
                                    className='text-xl font-medium  px-5 mb-6'
                                >
                                    {eachData.courseDescription}
                                </p>


                                <h1 className='text-2xl text-start px-10 font-extrabold '>Starting At</h1>
                                <h1 className='text-2xl text-start px-10 font-extrabold mb-3'>{eachData.courseStartingData}</h1>


                                <button 
                                onClick={()=>{handleCourseApplyBtnClick(eachData)}}
                                className='h-max w-full bg-blue-600 py-2 text-zinc-100 rounded-lg'>Apply</button>

                            </div>
                        )
                    })
                }

            </div>


        </div>
    )
}

export default React.memo(CoursesCards)