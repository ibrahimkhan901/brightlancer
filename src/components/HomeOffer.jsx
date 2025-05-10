import React from 'react'
import Image from 'next/image'
import {
    bilalSirImg,
    qaiserSirImg,
    navttvIsl,
    tradeTestingBoard,
    pakistanSoftwareExpertBoard,
    pakistanEngCouncil,
    fbr,
    securityExcCommision,
    scienceAndTech,
    DistrictYouthOffice,
    GovtKPK
} from '@/utils/Images.js'





















const HomeOffer = () => {




    const collaberatedIntArray = [
        navttvIsl,
        tradeTestingBoard,
        pakistanSoftwareExpertBoard,
        pakistanEngCouncil,
        fbr,
        securityExcCommision,
        scienceAndTech,
        DistrictYouthOffice,
        GovtKPK
    ]


    return (
        <div className='min-h-[100vh] w-full overflow-x-hidden py-10 px-5 md:px-20 '>

            {/* Heading of offer section also with  its little explanation */}
            <div className="h-[20vh] w-full mb-5">
                <h1 className='text-2xl md:text-4xl text-orange-500 text-center md:text-start mb-5 md:mb-0 font-extrabold'>WHAT'S WE OFFER</h1>
                <p className='text-xl text-zinc-700 font-medium pl-2 text-center sm:text-start'>We’re a team of passionate, dedicated people who have one overreaching goal – Your Success is Our Success</p>
            </div>












            {/* The cards which contian the offers */}
            <div className="min-h-[50vh]  flex flex-col md:flex-row ">

                <div className=" bg-zinc-800 text-zinc-100 p-10">
                    <div className="flex justify-between items-center pr-3 mb-5">
                        <h1 className='text-3xl text-orange-500 font-extrabold'>TRAINING PROGRAM</h1>
                        <i className="ri-group-line      text-5xl font-extralight  text-orange-500 mb-5"></i>
                    </div>
                    <p className='text-md sm:text-xl'>Learn directly from experienced professionals and gain hands-on skills to start your own Amazon and eCommerce business. Brightlancers focuses on empowering youth with practical training, preparing them to contribute to Pakistan’s digital economy.</p>
                    <br></br>
                    <p className='text-md sm:text-xl'>We aim to develop entrepreneurial thinking—building business creators, not just job seekers. Our core training programs and video-based sessions open doors to multiple freelancing and online income opportunities.</p>

                    {/* <button className='w-max  bg-zinc-900 p-2 rounded-sm px-10 mt-10'>
                        ___FINDOUT MORE....
                    </button> */}
                </div>




                <div className=" bg-orange-600 text-zinc-100 p-10">
                    <div className="flex justify-between items-center pr-3 mb-5">
                        <h1 className='sm:text-3xl flex flex-1 text-zinc-800 font-extrabold text-2xl '>WORLD CLASS SERVICES</h1>
                        <i className="ri-group-line      text-5xl font-extralight  text-zinc-900 mb-5"></i>
                    </div>
                    <p className='text-xl'>Brightlancers is dedicated to providing top-tier eCommerce solutions for individuals and businesses. From idea to execution, we work openly with learners, clients, and partners to deliver reliable strategies that boost online business success</p>
                    <br></br>
                    <p className='text-xl'>Our mission is to build a strong business mindset—empowering people to launch and scale their ventures confidently, and to compete with global brands without limitations.</p>

                </div>
            </div>
















            {/* This contain the ceo and coo images of brightlancer */}
            <div className="min-h-[40vh] w-full overflow-x-hidden mt-20">

                <div className="min-h-[20vh] w-full overflow-x-hidden  mb-10">
                    <h1 className='text-2xl md:text-4xl text-orange-500 text-center sm:text-start mb-5 sm:mb-0 font-extrabold'>REMOVING BARRIER IN ECOMMERCE SUCCESS</h1>
                    <p className='text-lg sm:text-xl text-zinc-700 font-medium pl-2 text-center sm:text-start'>We’re a team of passionate and committed professionals driven by one clear goal — your success is our success.</p>
                </div>






                <div className="min-h-[60vh] w-full flex flex-col md:flex-row justify-center items-center ">



                    <div className="h-full w-full md:w-1/2 p-5 rounded-lg flex justify-center items-center">
                        <div className="h-max  overflow-y-hidden w-max relative flex flex-col justify-center items-center  ">

                            <Image
                                className='  h-[350px]    w-[350px]  rounded-lg '
                                src={bilalSirImg}
                                height={300}
                                width={800}
                                alt='Brightlancer Teacher image'
                            />

                            <div className="bg-orange-400 font-bold w-full p-5 flex justify-center items-center  rounded-br-lg ">
                                <h1 className='text-xl '>ENGR BILAL SALEEM </h1>
                            </div>

                        </div>


                    </div>



                    <div className="h-full w-full  md:w-1/2 p-5 rounded-lg flex justify-center items-center">
                        <div className="h-max  overflow-y-hidden w-max relative flex flex-col justify-center items-center">
                            <Image
                                className=' h-[350px]    w-[350px]  rounded-lg shadow-lg shadow-orange-300'
                                src={qaiserSirImg}
                                height={300}
                                width={800}
                                alt='Brightlancer Teacher image'
                            />

                            <div className="bg-orange-400 font-bold w-full p-5 flex justify-center items-center  rounded-br-lg ">
                                <h1 className='text-xl '>ENGR BILAL SALEEM </h1>
                            </div>

                        </div>
                    </div>

                </div>
            </div>



























            {/* This contain the icon with which brightlancer already collaberated with */}
            <div className="min-h-[40vh] w-full overflow-x-hidden mt-20">



                <div className="h-max w-full overflow-x-hidden">
                    <h1 className='text-2xl md:text-4xl text-orange-500 text-center md:text-start mb-5 md:mb-0 font-extrabold'>COLLABERATED WITH</h1>
                    <p className='text-lg md:text-xl text-zinc-700 font-medium pl-2 text-center md:text-start'>We proudly collaborate with government bodies and private organizations in our mission to make Pakistan a leading eCommerce hub, starting from the grassroots in regions like Bannu.</p>
                </div>

                <div className="h-max w-full overflow-x-hidden flex flex-wrap justify-center gap-4">

                    {
                        collaberatedIntArray.map((eachLogo, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-40 w-40 border-1 border-zinc-200 flex justify-center items-center">
                                    <Image
                                        src={eachLogo}
                                        height={300}
                                        width={300}
                                        alt='collaberated with logos'
                                    />
                                </div>

                            )
                        })
                    }
                </div>






            </div>









        </div>
    )
}

export default React.memo(HomeOffer)