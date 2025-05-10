'use client';


import React from 'react'
import { useRouter } from 'next/navigation'

const Footer = () => {


    let router = useRouter()




    return (
        <footer
            className='h-max w-full overflow-x-hidden text-center  flex flex-col gap-10 md:flex-row justify-center md:justify-between  p-5 md:px-20 mt-20 relative select-none'>




            {/* <div className="h-1 bg-zinc-300 w-full absolute top-0 right-0 "></div> */}




            {/* Quick Links */}
            <div className='w-full '>
                <h3 className="h-max  font-bold text-xl text-[#F05C2F] mb-2">Quick Links</h3>
                <ul className='cursor-pointer'>
                    <li onClick={()=>{router.push("/")}}>Home</li>
                    <li onClick={()=>{router.push("/courses")}}>Courses</li>
                    <li onClick={()=>{router.push("/services")}}>Services</li>
                </ul>
            </div>

            {/* Courses */}
            <div  className='w-full'>
                <h3 className=" font-bold text-xl text-[#F05C2F] mb-2">Popular Courses</h3>
                <ul className='cursor-pointer'>
                    <li onClick={()=>{router.push("/courses")}}>Amazon FBA</li>
                    <li onClick={()=>{router.push("/courses")}}>TikTok Shop</li>
                    <li onClick={()=>{router.push("/services")}}>Freelancing</li>
                </ul>
            </div>

            {/* Contact */}
            <div className='w-full'>
                <h3 className="  font-bold text-xl text-[#F05C2F] mb-2">Contact</h3>
                <p onClick={()=>{router.push("/contact")}}>Address</p >
                <p onClick={()=>{router.push("/contact")}}>WhatsApp</p>
                <p onClick={()=>{router.push("/contact")}}>Email</p>
            </div>

            {/* </div> */}


        </footer>
    )
}

export default React.memo(Footer)