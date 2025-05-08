import React from 'react'
import classroom from '../../public/images/classroom.jpg'
import Image from 'next/image'

const CoursesHeroSection = () => {
  return (
    <div className='min-h-[50vh] w-full overflow-x-hidden p-10  relative'>

            
            <div className="h-full w-full  absolute top-0 left-0  z-10 flex items-center justify-center overflow-hidden">
                <img src="https://scontent-mct1-1.xx.fbcdn.net/v/t39.30808-6/481459493_620974790793248_47965117865877089_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH9l2n6Xva-UHB_SU7bM6X9wusX9DRmzL7C6xf0NGbMvrXWL2UyuJRX4lpjsR2w5KIEPEqPYpOmPD31GnPAQ1_n&_nc_ohc=uiYgRyO6CfEQ7kNvwE46Rxr&_nc_oc=AdnMYigoKBbi2UgQox7d1Xe4DKOpl9C7kpUZd-V3YIxsGSSohqXrp1IBx4WWeWiY7Ls&_nc_zt=23&_nc_ht=scontent-mct1-1.xx&_nc_gid=LiVu93rbARmuKWMV4rQGIA&oh=00_AfHumyz-oqhK9gIDMmx40i3W1c04kfQWVzgJ6aHS1toEJg&oe=681A4CAF" alt="" />
                {/* <Image
                    src="https://scontent-mct1-1.xx.fbcdn.net/v/t39.30808-6/481459493_620974790793248_47965117865877089_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH9l2n6Xva-UHB_SU7bM6X9wusX9DRmzL7C6xf0NGbMvrXWL2UyuJRX4lpjsR2w5KIEPEqPYpOmPD31GnPAQ1_n&_nc_ohc=uiYgRyO6CfEQ7kNvwE46Rxr&_nc_oc=AdnMYigoKBbi2UgQox7d1Xe4DKOpl9C7kpUZd-V3YIxsGSSohqXrp1IBx4WWeWiY7Ls&_nc_zt=23&_nc_ht=scontent-mct1-1.xx&_nc_gid=LiVu93rbARmuKWMV4rQGIA&oh=00_AfHumyz-oqhK9gIDMmx40i3W1c04kfQWVzgJ6aHS1toEJg&oe=681A4CAF"
                    height={400}
                    width={800}
                    alt='Classroom image of brightlacne'
                /> */}
            </div>


        </div>
  )
}

export default React.memo(CoursesHeroSection)