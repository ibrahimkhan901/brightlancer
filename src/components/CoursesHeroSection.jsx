import React from 'react'
import classroom from '../../public/images/classroom.jpg'
import Image from 'next/image'

const CoursesHeroSection = () => {
  return (
    <div className='min-h-[50vh] w-full overflow-x-hidden p-10  relative'>

      {/* <img
        className='h-[90%] w-[90%] absolute top-0 left-0'
        src="" alt="" /> */}
      <div className="h-[90%] w-[95%] absolute top-0 left-0 bg-zinc-300 z-10 flex items-center overflow-hidden">
      <Image
        src={classroom}
        height={400}
        width={800}
        alt='The classroom image of brightlancers'
        className='h-max w-full object-center overflow-hidden'
        />
      </div>    <div className="h-[90%] w-[70%] absolute bottom-0 right-0 bg-[#f05c2f] "></div>


    </div>
  )
}

export default React.memo(CoursesHeroSection)