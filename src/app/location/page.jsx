'use client';

import React from 'react'
import { location } from '@/utils/Images';
import Image from 'next/image';





const Location = () => {







  function handleViewOnMapBtnClick(){
    try{
      window.open("https://www.google.com/maps/search/?api=1&query=32.98268794679011, 70.606047579313")
    }catch(err){
      throw new Error("The map is not opened", err)
    }
  }



















  return (
    <div className='pt-20 '>




      <div className='p-3 md:p-10'>



        <div className="min-h-[50vh] w-full overflow-x-hidden p-10 flex flex-col-reverse md:flex-row  gap-x-10">
         
         
          <div className="h-full w-full md:w-1/2 xl:pt-20 flex items-center justify-center  text-center flex-col gap-8">
            <h1 className='h-max text-xl md:text-2xl lg:text-3xl font-bold text-center p-2 pt-5 text-orange-500'>Brightlancers Behind Shadman Plaza, Railway Road, Bannu, Khyber Pakhtunkhwa, Pakistan</h1>
            <button
              onClick={handleViewOnMapBtnClick}
              className='h-max w-max p-3 px-16 bg-blue-600 rounded-md text-zinc-100 cursor-pointer'>View on map </button>
          </div>

          <Image
          src={location}
          height={300}
          width={800}
          className='h-full w-full md:w-1/2 rounded-md'
          alt='location image of brightlancers'
          />


        </div>











      </div>






    </div>
  )
}

export default Location