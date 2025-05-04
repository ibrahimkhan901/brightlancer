import React from 'react'

const Footer = () => {
    return (
        <footer
            className='h-max w-full overflow-x-hidden text-center  flex flex-col gap-10 md:flex-row justify-center md:justify-between  p-5 md:px-20 mt-20 relative'>




            <div className="h-1 bg-zinc-300 w-full absolute top-0 right-0"></div>




            {/* Quick Links */}
            <div className='w-full'>
                <h3 className="h-max  font-bold text-xl text-[#F05C2F] mb-2">Quick Links</h3>
                <ul>
                    <li>Home</li>
                    <li>Courses</li>
                    <li>Services</li>
                </ul>
            </div>

            {/* Courses */}
            <div  className='w-full'>
                <h3 className=" font-bold text-xl text-[#F05C2F] mb-2">Popular Courses</h3>
                <ul>
                    <li>Amazon FBA</li>
                    <li>TikTok Shop</li>
                    <li>Freelancing</li>
                </ul>
            </div>

            {/* Contact */}
            <div className='w-full'>
                <h3 className="  font-bold text-xl text-[#F05C2F] mb-2">Contact</h3>
                <p>Address</p>
                <p>WhatsApp</p>
                <p>Email</p>
            </div>

            {/* </div> */}


        </footer>
    )
}

export default React.memo(Footer)