import React from 'react'

const AboutProject = () => {
    return (
        <div className='min-h-[100vh] w-full flex flex-col md:flex-row flex-wrap  mt-20 p-5 lg:p-20 items-center justify-center'>



{/* 1st project */}
            <div className="h-[40vh] w-full sm:w-[50%] lg:w-[33.3%] flex items-center justify-end p-5 text-6xl  text-[#f05c2f] relative ">
                <div className="absolute top-[-10px]">
                    <div className="">OUR </div>
                    <div className="">Projects</div>
                </div>
            </div>




{/* 2nd project and soo on */}
            <div
                className="h-[80vh] w-full sm:w-[50%] lg:w-[33.3%] bg-[#f25d30] flex flex-wrap justify-center text-center p-5 border-1 border-zinc-400 items-center text-zinc-100 "
            >
                <img
                className='w-[50%]'
                src="https://www.enablers.org/assets-app/img/about-us-page/logos/enablers-white.png" alt="" />
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad praesentium ab quos, perspiciatis dolores.</p>
            </div>




            
                {
                    [1, 2, 3, 4, 5, 6].map((eachCard, index) => {
                        return (
                            <div 
                            className="h-[80vh] w-full sm:w-[50%] lg:w-[33.3%] flex flex-wrap justify-center text-center p-5 border-1 border-zinc-400 items-center  "
                             key={index}>
                                    <img src="https://www.enablers.org/public/assets-app/img/logos/enablers-logo-with-slogan-new.webp" alt="" />
                             <p className='text-lg'>{eachCard}Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad praesentium ab quos, perspiciatis dolores.</p>
                            </div>

                        )
                    })
                }










        </div>
    )
}

export default React.memo(AboutProject)