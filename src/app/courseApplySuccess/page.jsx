import React from 'react'
import 'remixicon/fonts/remixicon.css'

const page = () => {
    return (
        <div className='h-full w-full overflow-hidden p-20 md:p-20 flex flex-wrap justify-center items-center'>

           <div className="shadow-lg shadow-zinc-800 rounded-lg p-10 mt-10">
           <div className="h-max w-full flex items-center justify-center">
                <i className="ri-checkbox-circle-line       text-[150px] font-thin text-green-400 "></i>
            </div>


            <div className="h-max w-full text-center text-3xl font-bold mb-20 ">
                <p>Congratulation! Your Apply is submitted successfully.</p>
                <p className='font-bold text-orange-600'>Course full name</p>
                <div className="h-max w-full  mt-10 font-bold flex flex-wrap items-center justify-center">
                    <p>Registraton number:</p>
                    <p className='font-bold text-orange-600 text-2xl'>kjhjh2kjhk2jk4909unoijoiuuen</p>
                </div>
            </div>


           </div>


            <div className="h-max w-full p-10 shadow-lg shadow-zinc-600 m-10 text-2xl rounded-lg bg-green-100">
                <p className='font-bold mb-10'>Now please pay fees of course to enroll in it</p>

                <div className="h-max w-full">
                    <h1 className='font-extrabold text-3xl mb-5 '>Payment Methods:</h1>
                    <h2 className='font-bold text-orange-500'>1: Physical Payment (Recommended)</h2>
                    <p className='font-medium ml-10 text-xl'>Go to institure and pay fee of course hand to hand</p>
                    <h2 className='font-bold text-orange-500'>2: Bank Account</h2>
                    <p className='font-medium ml-10 text-xl'>457545465758346474553545</p>
                </div>

            </div>


            <div className="h-max w-full p-10 shadow-lg shadow-zinc-600 m-10 text-xl rounded-lg bg-yellow-100">
                <h2 className='font-extrabold text-3xl mb-5'>NOTE:</h2>
                    <li>Keep your payment slip safe (we are not responsible if you lost it).</li>
                    <li>Fee is non refundable.</li>
                    <li>Class attendence is 80% compulsory</li>
            </div>




        </div>




    )
}

export default page