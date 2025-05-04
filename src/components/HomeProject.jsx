import React from 'react'

const HomeProject = () => {
    return (
        <div className='min-h-[80vh] w-full overflow-x-hidden p-10 py-18 relative'>









            <div className='   min-h-[100vh] w-full text-zinc-200    overflow-x-hidden  flex flex-row flex-wrap relative  justify-center gap-0 items-center overflow-hidden'>


                {/* this div is just to mask the image with glassy effect */}
                <div className="custom_low_glassy_effect     h-full w-full absolute top-0 right-0 z-[2]"></div>
                <img
                    className='   h-full w-full absolute top-0 right-0 z-[1] '
                    src="https://imgs.search.brave.com/_UVtmEnbGSltTSHbxPUJJirYmRtTeZ8OxV-hTMHNiP8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5Lzk3Lzg4LzM4/LzM2MF9GXzk5Nzg4/Mzg1Nl9veHpqMTg2/aFdhaDJBbTZpaUR5/RUVjaVJFVlhKZWh0/NC5qcGc" alt="" />





                {/* First card */}
                <div className="  h-max md:h-[50vh] w-max md:w-[1/2] lg:w-[33.3%] z-10 border-1 border-zinc-500 m-0 flex flex-col items-center py-5">
                    <h1 className='text-3xl mb-4 text-zinc-300'> OUR PROJECTS</h1>
                    <p className='text-md mb-4 text-zinc-300 font-medium pl-2 text-center'>Established in 2018, Enablers has continuously been working to make Pakistan a growing eCommerce hub, enabling the youth to build an entrepreneurial mindset</p>
                    {/* <button className='w-max  bg-transparent  p-3 rounded-sm px-10 mt-10 outline-none border-1 border-zinc-200 text-sm cursor-pointer text-zinc-100'>
                        ___FINDOUT MORE....
                    </button> */}
                </div>







                {/* Other 5 cards */}
                {
                    [1, 2, 3, 4, 5].map((eachCard, index) => {
                        return (
                            <div key={index} className='   h-max md:h-[50vh]  w-full md:w-[50%] lg:w-[33.3%] z-10 border-1 border-zinc-500 m-0 flex flex-col items-center py-5' >
                                <h1 className=' text-2xl md:text-3xl mb-4 text-zinc-300'>{eachCard}ROBOOSTERS</h1>
                                <p className='text-md mb-4 text-zinc-300 font-medium pl-2 text-center'>Established in 2018, Enablers has continuously been working to make Pakistan a growing eCommerce hub, enabling the youth to build an entrepreneurial mindset</p>
                                <i className="ri-briefcase-2-fill      text-5xl  text-zinc-100 font-extralight flex"></i>

                            </div>
                        )


                    })



                }





            </div>







        </div>
    )
}

export default React.memo(HomeProject)