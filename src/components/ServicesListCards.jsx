'use client';
import React from 'react'
import { servicesDataArray } from '../utils/ServicesDataArray'
import 'remixicon/fonts/remixicon.css'
import { useRouter } from 'next/navigation';









const ServicesListCards = () => {


    let router = useRouter()


    return (
        <div>











            {/* The cards container */}
            <div className="h-max w-full p-10 flex flex-wrap gap-3 justify-center  ">



                {
                    servicesDataArray.map((eachData, index) => {
                        return (

                            <div
                                key={index}
                                className="min-h-72 w-80 p-5 rounded-lg flex flex-col justify-center items-center text-center border-1 border-zinc-400">



                                <i className={`${eachData.iconClass}    h-28 text-7xl text-[#f05c2f] flex justify-center items-center font-thin `}></i>


                                <div className="h-20 flex items-center text-2xl">
                                    {eachData.serviceName}
                                </div>


                                <div className="text-md text-zinc-600 text-center mt-5">
                                    {eachData.serviceDescription}
                                </div>



                     
                                <button
                                    onClick={() => { router.push("/contact") }}
                                    className='h-max w-full rounded-lg  p-2 px-5 mt-16 bg-blue-500 text-zinc-200 mx-5'>Contact</button>




                            </div>

                        )
                    })
                }









            </div>













        </div>
    )
}

export default React.memo(ServicesListCards)