import React from 'react'

const AboutProject = () => {
    return (
        <div className="h-full w-full overflow-x-hidden p-5">




            <div className="text-orange-600 h-max w-full flex justify-center items-center mt-20 font-bold text-3xl sm:text-4xl lg:text-5xl ">
                OUR PROJECTS
            </div>






            <div className='min-h-[100vh] w-full flex flex-col sm:flex-row flex-wrap   p-5 lg:p-20 items-center justify-center'>

         

                {/* 2nd project and soo on
                <div
                    className="h-max w-full sm:w-[50%] lg:w-[33.3%] flex flex-wrap gap-y-20 justify-center text-center p-10 border-1 border-zinc-400 items-center  bg-[#f25c2f]"
                >
                    <img
                        className='w-1/2'
                        src="https://www.enablers.org/assets-app/img/about-us-page/logos/enablers-white.png" alt="" />
                    <p className='text-lg text-zinc-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad praesentium ab quos, perspiciatis dolores.</p>
                </div> */}





                {
                    [1, 2, 3, 4, 5, 6].map((eachCard, index) => {
                        return (
                            <div
                                className="h-max w-full sm:w-[50%] lg:w-[33.3%] flex flex-wrap gap-y-20 justify-center text-center p-10 border-1 border-zinc-400 items-center  "
                                key={index}>
                                <img src="https://www.enablers.org/public/assets-app/img/logos/enablers-logo-with-slogan-new.webp" alt="" />
                                <p className='text-lg'>{eachCard}Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad praesentium ab quos, perspiciatis dolores.</p>
                            </div>

                        )
                    })
                }










            </div>




        </div>

    )
}

export default React.memo(AboutProject)