'use client';

import React from 'react'






const TermAndDevDetails = () => {
  return (
    <div className='h-max md:h-10 w-full text-[12px] md:text-sm text-zinc-200 font-medium overflow-x-hidden  flex flex-col sm:flex-row p-2 sm:p-0 justify-center  items-center mt-10 bg-zinc-800'>


      {/* <div className="h-5 sm:mr-10">Terms and conditions _ <span className='text-blue-500 underline'>Privacy and policy</span></div> */}


      <div onClick={() => {
        window.open("https://ik-portfolio-xi.vercel.app", "_blank")
      }}
        className="h-5 sm:mr-10 cursor-pointer"
      >

        Developed by
        <span className='text-blue-500 underline ml-2 '>IBRAHIM</span>
      </div>




      <div className="">copyright@Brightlancer</div>

    </div>
  )
}



export default React.memo(TermAndDevDetails)