
'use client';

import React from 'react'

const ContactSocialLinks = () => {





    function handleFacebookGotoBtnClick() {
        window.open("https://www.facebook.com/profile.php?id=100086421969134&name=xhp_nt__fb__action__open_user", "__blank")
    }



    function handleTiktokGotoBtnClick() {
        window.open("https://www.tiktok.com/@brightlancer.ecommerce?_t=ZS-8vviHwhICNV&_r=1", "__blank")
    }




    function handleYoutubeGotoBtnClick() {
        window.open("https://www.youtube.com/@getbrands6813", "__blank")
    }





    return (
        <div className=' w-full overflow-x-hidden p-10'>



            <h1 className='h-max w-max text-2xl md:text-4xl font-bold text-orange-500 underline '>Social Media </h1>



            <div className="h-max w-full p-10 flex flex-wrap gap-5  font-bold text-2xl  justify-center items-center">

                <div className="h-max w-full sm:w-max flex flex-col gap-5 justify-center items-center shadow-md shadow-zinc-600 p-10">
                    <i className="ri-facebook-circle-fill         text-8xl font-extralight text-[#1877F2]"></i>
                    <h1>Facebook</h1>
                    <button
                        onClick={handleFacebookGotoBtnClick}
                        className='text-sm p-2 px-5 bg-[#1877F2] text-zinc-200 rounded-md'>Go to </button>
                </div>


                <div className="h-max w-full sm:w-max flex flex-col gap-5 justify-center items-center shadow-md shadow-zinc-600 p-10">
                    <i className="ri-tiktok-fill           text-8xl font-extralight text-[#000000]"></i>
                    <h1>Tiktok</h1>
                    <button
                        onClick={handleTiktokGotoBtnClick}
                        className='text-sm p-2 px-5 bg-[#000000] text-zinc-200 rounded-md'>Go to </button>
                </div>


                <div className="h-max w-full sm:w-max flex flex-col gap-5 justify-center items-center shadow-md shadow-zinc-600 p-10">
                    <i className="ri-instagram-line      text-8xl font-extralight text-[#E1306C]"></i>
                    <h1>Instagram</h1>
                    <button className='text-sm p-2 px-5 bg-[#E1306C] text-zinc-200 rounded-md'>Go to </button>
                </div>



                <div className="h-max w-full sm:w-max flex flex-col gap-5 justify-center items-center shadow-md shadow-zinc-600 p-10">
                    <i className='ri-twitter-x-line     text-8xl font-extralight text-[#000000]'></i>
                    <h1>Twitter-X</h1>
                    <button className='text-sm p-2 px-5 bg-[#000000] text-zinc-200 rounded-md'>Go to </button>
                </div>


                <div className="h-max w-full sm:w-max flex flex-col gap-5 justify-center items-center shadow-md shadow-zinc-600 p-10">
                    <i className="ri-youtube-fill         text-8xl font-extralight text-[#FF0000]"></i>
                    <h1>Youtube</h1>
                    <button
                        onClick={handleYoutubeGotoBtnClick}
                        className='text-sm p-2 px-5 bg-[#FF0000] text-zinc-200 rounded-md'>Go to </button>
                </div>


            </div>



        </div>
    )
}

export default React.memo(ContactSocialLinks)