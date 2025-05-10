'use client';



import React from 'react'

const ContactOption = () => {



    function handlePhoneNoCopyBtnClick() {
        navigator.clipboard.writeText("+92 337 9863424")
    }







    function handleWhatsappPhoneNoCopyBtnClick() {
        navigator.clipboard.writeText("+92 337 9863424")
    }






    function handleEmailCopyBtnClick() {
        navigator.clipboard.writeText("officialbrightlancer@gmail.com")
    }







    function handlePhoneCallBtnClick() {
        window.location.href = "tel:03355844441"
    }




    function handleWhatsappChatBtnClick() {
        window.open("https://wa.me/923379863424")
    }





    function handleEmailMessageBtnClick() {
        window.location.href = "mailto:officialbrightlancer@gmail.com?subject=Hello&body=I%20want%20to%20ask%20something"
    }








    return (
        <div className=' w-full overflow-x-hidden p-5 sm:p-10 mt-20'>



            <div className="h-max w-full text-2xl md:text-4xl font-bold text-orange-500 underline text-center sm:text-start ">
                <h1 className=''>Get In Touch</h1>
                <h1 className='pb-3'>We'd love to hear you</h1>
            </div>











            <div className="h-max w-full p-10 flex flex-wrap gap-5  font-bold text-2xl justify-center items-center">


                <div className="h-max w-full sm:w-max flex flex-col gap-5 justify-center items-center shadow-md shadow-zinc-600 p-5">
                    <i className="ri-phone-line       text-8xl font-extralight text-[#374151]"></i>
                    <h1 >Phone Number</h1>
                    <div className="h-max w-full flex gap-x-2 justify-center">
                        <button
                            onClick={handlePhoneNoCopyBtnClick}
                            className=' text-sm p-2 px-5 bg-[#F3F4F6] border-1 border-zinc-400 rounded-md'>Copy Number</button>
                        <button
                            onClick={handlePhoneCallBtnClick}
                            className='text-sm p-2 px-5 bg-[#374151] text-zinc-200 rounded-md'>Call </button>
                    </div>
                </div>


                <div className="h-max w-full sm:w-max flex flex-col gap-5 justify-center items-center shadow-md shadow-zinc-600 p-5">
                    <i className="ri-whatsapp-fill     text-8xl font-extralight text-[#25D366]"></i>
                    <h1>Whatapp</h1>
                    <div className="h-max w-full flex gap-x-2">
                        <button
                            onClick={handleWhatsappPhoneNoCopyBtnClick}
                            className='text-sm p-2 px-5 bg-[#F3F4F6] border-1 border-zinc-400 rounded-md'>Copy Number</button>
                        <button
                            onClick={handleWhatsappChatBtnClick}
                            className='text-sm p-2 px-5 bg-[#374151] text-zinc-200 rounded-md'>Chat</button>
                    </div>
                </div>


                <div className="h-max w-full sm:w-max flex flex-col gap-5 justify-center items-center shadow-md shadow-zinc-600 p-5">
                    <i className="ri-mail-line        text-8xl font-extralight text-[#374151]"></i>
                    <h1>Email</h1>
                    <div className="h-max w-full flex gap-x-2">
                        <button
                            onClick={handleEmailCopyBtnClick}
                            className='text-sm p-2 px-5 bg-[#F3F4F6] border-1 border-zinc-400 rounded-md'>Copy Address</button>
                        <button
                            onClick={handleEmailMessageBtnClick}
                            className='text-sm p-2 px-5 bg-[#374151] text-zinc-200 rounded-md'>Email</button>
                    </div>
                </div>



            </div>










        </div>
    )
}

export default React.memo(ContactOption)