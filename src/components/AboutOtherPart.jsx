import React from 'react'

const AboutOtherPart = () => {
    return (
        <div className='min-h-[100vh] w-full overflow-x-hidden p-5 md:p-10 mb-10 '>




















            <div className="min-h-[50vh] py-10 lg:h-[100vh] w-full  flex flex-col items-center justify-center bg-zinc-300 text-2xl sm:text-3xl">
                <h1 className='text-3xl sm:text-4xl text-[#f05c2f] mb-7'>OUR CAMPUSES</h1>
                <p className='w-[70%] text-center mt-5'>We have one of the fastest-growing chains of campuses across Pakistan and expanding internationally, empowering youth through modern eCommerce education.</p>
                <p className='mt-10 text-zinc-600 underline'>Find Our Campuses</p>
            </div>




















            <div className="h-max w-full p-0 lg:p-10 flex flex-col lg:flex-row gap-x-10 mt-10">





                <div className="h-max w-full lg:w-[50%] bg-[#f05c2f] p-10 text-zinc-100">


                    <h1 className='text-2xl mb-3'>Our VALUES</h1>
                    <p className='font-medium text-lg'>At Brightlancers, we focus on empowering individuals by enhancing their practical skills and guiding them toward a successful digital future. We provide growth-driven opportunities and foster an environment where innovation, excellence, and long-term success are at the core of everything we do.</p>



                    <h1 className='text-2xl mb-3 mt-10 '>At Brightlancers, we aim to become:</h1>
                    <p className='font-medium text-lg'>A leading force in shaping Pakistan’s eCommerce and digital economy.
                        A key contributor to the social, intellectual, and professional development of our youth.
                        A committed community of entrepreneurs ready to compete in global markets
                    </p>


                </div>





                {/* The left side card */}
                <div className="h-max w-full flex flex-col md:flex-row flex-wrap">


                    <div className="h-80 w-full md:w-[50%] border-1 md:border-0 border-zinc-500 bg-zinc-100 flex flex-col gap-4 justify-center items-center">
                        <img src="https://www.enablers.org/public/assets-app/img/Enablers-innvation-icon.png" alt="" />
                        <h1>INNOVATION</h1>
                    </div>
                    <div className="h-80 w-full md:w-[50%] border-1 md:border-0 border-zinc-500 bg-zinc-950 flex flex-col gap-4 justify-center items-center text-zinc-100">
                        <img src="https://www.enablers.org/public/assets-app/img/Enablers-innvation-icon.png" alt="" />
                        <h1>ACCOUNTABILITY</h1>
                    </div>
                    <div className="h-80 w-full md:w-[50%] border-1 md:border-0 border-zinc-500 bg-zinc-950 flex flex-col gap-4 justify-center items-center text-zinc-100">
                        <img src="https://www.enablers.org/public/assets-app/img/Enablers-innvation-icon.png" alt="" />
                        <h1>TRANSPARENCY & INTEGRITY</h1>
                    </div>
                    <div className="h-80 w-full md:w-[50%] border-1 md:border-0 border-zinc-500 bg-zinc-100 flex flex-col gap-4 justify-center items-center">
                        <img src="https://www.enablers.org/public/assets-app/img/Enablers-innvation-icon.png" alt="" />
                        <h1>EXCELLENCE</h1>
                    </div>


                </div>



            </div>

















            <div className="min-h-[100vh] w-full overflow-x-hidden p-10 mt-10 text-center md:text-start">
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-[#f05c2f] mb-7'>COMMINITY IMPACT</h1>
                <p className='font-medium text-md text-center md:text-start md:text-xl mt-5'>Thousands of individuals have benefitted from Brightlancers' practical training and 100+ skill-based courses designed to equip youth with real eCommerce and freelancing skills. In response to high unemployment, Brightlancers introduced accessible, affordable, and hands-on learning opportunities that have empowered many to launch their careers as virtual assistants, freelancers, and online business owners.</p>
                <p className='font-medium text-md text-center md:text-start md:text-xl mt-5'>A new generation is now under training—dedicated to transforming Pakistan, especially regions like Bannu, into a powerful eCommerce hub.</p>
                <p className='font-medium text-md text-center md:text-start md:text-xl mt-5'>Team Brightlancers continues to deliver specialized programs and expert-led mentorship, enabling many to achieve financial independence and a high-income lifestyle. The dedication of the Brightlancers leadership has earned widespread appreciation.</p>
                <p className='font-medium text-md text-center md:text-start md:text-xl mt-5'>Government bodies, academic institutions, and public-sector organizations have acknowledged Brightlancers' role in reshaping Pakistan’s digital future. Hundreds of success stories prove how Brightlancers is actively leading the charge in Pakistan’s eCommerce revolution.</p>
            </div>

















        </div>
    )
}

export default React.memo(AboutOtherPart)