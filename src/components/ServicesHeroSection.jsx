import Image from 'next/image'
import React from 'react'
import {
    classBannerImage
} from '@/utils/Images.js'

const ServicesHeroSection = () => {
    return (
        <div className='min-h-[50vh] w-full overflow-x-hidden p-10  relative'>

            
            <div className="h-full w-full absolute top-0 left-0  z-10 flex items-center justify-center overflow-hidden">
                 <Image
                    src={classBannerImage}
                    height={400}
                    width={800}
                    alt='Classroom image of brightlacne'
                /> 
            </div>


        </div>
    )
}

export default React.memo(ServicesHeroSection)