'use client';
import React from 'react'
import { servicesDataArray } from '../utils/ServicesDataArray'
import 'remixicon/fonts/remixicon.css'
import { useRouter } from 'next/navigation';









const ServicesListCards = () => {
    

    let router= useRouter()


    return (
        <div>





{/* For searching soem services */}
            <div className=''>
                <input type="text" />
            </div>







{/* The cards container */}
            <div className="h-max w-full p-10 flex flex-wrap gap-3 justify-center  ">



                {
                    servicesDataArray.map((eachData, index) => {
                        return (

                            <div
                                key={index}
                                className="min-h-72 w-80 p-5 rounded-lg flex flex-col justify-center items-center text-center border-1 border-zinc-400">


                                {/* <div className={`  h-max w-[50%] flex justify-center `}>

                                    <img 
                                    className='h-28'
                                    src="https://www.enablers.org/public/storage/uploads/admin/service-categories-images//Y3kBwKZGAZiqg17bE4235lMAiup5oLVXT7Mt3Hkc.png" alt="" />
                                </div>
 */}


                                <i className={`${eachData.iconClass}    h-28 text-7xl text-[#f05c2f] flex justify-center items-center font-thin `}></i>


                                <div className="h-20 flex items-center text-2xl">
                                    {eachData.serviceName}
                                </div>


                                <div className="text-md text-zinc-600 text-center mt-5">
                                    {eachData.serviceDescription}
                                </div>



{/* 
                                <div className="mt-5 font-medium mb-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas, reiciendis laborum minus enim corporis.
                                </div> */}


                                <button 
                                onClick={()=>{router.push("/contact")}}
                                className='h-max w-full rounded-lg  p-2 px-5 mt-16 bg-blue-500 text-zinc-200 mx-5'>Contact</button>

                                {/* <div className="h-24 w-full flex justify-center items-center px-10 p-5 gap-x-6 text-sm shadow-md shadow-zinc-400 mt-10">

                                    <div className="h-full w-1/2 ">
                                        <div className="h-1/2 mb-5">
                                            <img src="https://www.enablers.org/public/storage/uploads/admin/services-images//EsgOJRYkxxgEdyGHTkTA9hAaxvKwk1iVtFZGtqDM.png" alt="" />
                                        </div>
                                        <button className='text-[9px] rounded-sm  bg-blue-500 text-zinc-100 px-2 p-1'>Visit Website</button>
                                    </div>


                                    <div className="h-full w-1/2">
                                        <div className="h-1/2 mb-5">
                                            <img src="https://www.enablers.org/public/storage/uploads/admin/services-images//WH727RwwhrNe6K6Qq5pCOhb0MQ6fwtqg3nmBNMUA.png" alt="" />
                                        </div>
                                        <button className=' text-[9px] rounded-sm  bg-blue-500 text-zinc-100 px-2 p-1'>Visit Website</button>
                                    </div>
                                </div> */}


                                

                            </div>

                        )
                    })
                }









            </div>













        </div>
    )
}

export default React.memo(ServicesListCards)