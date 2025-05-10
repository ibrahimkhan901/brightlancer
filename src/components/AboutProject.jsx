import React from 'react'
import projectDataArray from '@/utils/projectDataArray'
import Image from 'next/image'

















const AboutProject = () => {




    return (
        <div className="h-full w-full overflow-x-hidden p-5">




            <div className="text-orange-600 h-max w-full flex justify-center items-center mt-20 font-bold text-3xl sm:text-4xl lg:text-5xl ">
                OUR PROJECTS
            </div>






            <div className=' w-full flex flex-col sm:flex-row flex-wrap   p-5 items-center justify-center gap-5'>




                {
                    projectDataArray.map((eachProject, index) => {
                        return (
                            <div
                                className="min-h-[650px] py-10 w-full sm:w-[40%] lg:w-[30%] flex flex-wrap gap-y-20  text-center p-10 shadow-md shadow-zinc-700 rounded-lg"
                                key={index}>
                                <Image
                                    src={eachProject.projectUrl}
                                    height={300}
                                    width={800}
                                    alt='project of brightlancer'
                                    className='rounded-md'
                                />
                                <div className="">
                                    <h1 className='text-2xl md:text-3xl text-orange-500 font-extrabold mb-5'>{eachProject.projectName}</h1>
                                    <p className='text-lg'>{eachProject.projectDesc}</p>
                                </div>
                            </div>

                        )
                    })
                }










            </div>




        </div>

    )
}

export default React.memo(AboutProject)