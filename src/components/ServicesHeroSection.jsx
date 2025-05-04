import React from 'react'

const ServicesHeroSection = () => {
    return (
        <div className='min-h-[50vh] w-full overflow-x-hidden p-10  relative'>

            {/* <img
                className='h-[90%] w-[90%] absolute top-0 left-0'
                src="" alt="" /> */}
            <div className="h-[90%] w-[95%] absolute top-0 left-0 bg-zinc-300 z-10 flex items-center overflow-hidden">
                <img src="https://scontent-mct1-1.xx.fbcdn.net/v/t39.30808-6/481459493_620974790793248_47965117865877089_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH9l2n6Xva-UHB_SU7bM6X9wusX9DRmzL7C6xf0NGbMvrXWL2UyuJRX4lpjsR2w5KIEPEqPYpOmPD31GnPAQ1_n&_nc_ohc=uiYgRyO6CfEQ7kNvwE46Rxr&_nc_oc=AdnMYigoKBbi2UgQox7d1Xe4DKOpl9C7kpUZd-V3YIxsGSSohqXrp1IBx4WWeWiY7Ls&_nc_zt=23&_nc_ht=scontent-mct1-1.xx&_nc_gid=LiVu93rbARmuKWMV4rQGIA&oh=00_AfHumyz-oqhK9gIDMmx40i3W1c04kfQWVzgJ6aHS1toEJg&oe=681A4CAF" alt="" />
            </div>
            <div className="h-[90%] w-[70%] absolute bottom-0 right-0 bg-[#f05c2f] "></div>


        </div>
    )
}

export default React.memo(ServicesHeroSection)