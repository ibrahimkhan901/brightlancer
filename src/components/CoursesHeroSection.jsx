import React from 'react'
import classroom from '../../public/images/classroom.jpg'
import Image from 'next/image'
import {
  classBannerImage2
} from '@/utils/Images.js'






const CoursesHeroSection = () => {
  return (
    <div className='h-[40vh] md:h-[60vh] w-full overflow-x-hidden p-10 mt-10  x'>


      <div className="h-full w-full   z-10 flex items-center justify-center overflow-hidden">
        <Image
          src={classBannerImage2} 
          height={400}
          width={800}
          alt='Classroom image of brightlacne'
        />
      </div>


    </div>
  )
}

export default React.memo(CoursesHeroSection)