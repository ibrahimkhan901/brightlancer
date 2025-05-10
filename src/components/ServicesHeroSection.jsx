import Image from 'next/image'
import React from 'react'
import {
    classBannerImage
} from '@/utils/Images.js'










const ServicesHeroSection = () => {
    return (
        <div className=' h-[40vh] md:h-[60vh] w-full overflow-x-hidden p-10 mt-10  x'>

            
            <div className="h-full w-full   z-10 flex items-center justify-center overflow-hidden">
                 <Image
                    src={classBannerImage}
                    height={400}
                    width={2000}
                    alt='Classroom image of brightlacne'
                /> 
            </div>


        </div>
    )
}

export default React.memo(ServicesHeroSection)