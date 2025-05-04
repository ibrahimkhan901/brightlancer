import React from 'react'

const HomeAsSeenAs = () => {
  return (
    <div className='min-h-[100vh] w-full overflow-x-hidden p-10 '>



      <div className="h-[20vh] w-full overflow-x-hidden">
        <h1 className='text-2xl text-center md:text-start md:text-4xl text-zinc-900'>As Seen As</h1>
        <p className='text-xl text-center md:text-start text-zinc-700 font-medium pl-2'>to help brands grow in the hyperconnected age</p>
      </div>



      <div className="h-max sm:h-full w-full ">
        <img src="https://www.enablers.org/public/assets-app/img/Enablers-media-group.webp" alt="" />
      </div>






{/* 
      <div className="h-max w-full overflow-x-hidden flex justify-center">

        <button className='w-max  bg-blue-600  p-3 rounded-sm px-10 mt-10 outline-none border-none text-sm cursor-pointer text-zinc-100'>
          ___FINDOUT MORE....
        </button>
      </div>
 */}



    </div>
  )
}

export default React.memo(HomeAsSeenAs)