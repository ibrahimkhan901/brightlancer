import React from 'react'

const ServicesDisclaimerAndWorks = () => {
    return (
        <div className='h-max w-full overflow-x-hidden p-5 md:p-10 lg:p-20'>




            {/* Disclainer portion */}
            <div className=" p-5 md:p-10 lg:p-20 bg-zinc-800 border-1 border-zinc-200 rounded-lg">

                <h1 className='text-[#e66e22] text-3xl font-extrabold'>Disclaimer</h1>
                <h3 className='text-sm md:text-2xl font-medium mb-5 text-zinc-200 mt-5'>Please read the following clauses carefully before engaging with any businesses listed here:</h3>


                <div className="text-sm md:text-xl font-medium space-y-4 text-zinc-200">


                    <div className="flex items-start gap-10">
                        <i className="ri-checkbox-blank-circle-fill             mt-1 text-sm"></i>
                        <p>Brightlancers Services Directory only serves as a platform to list service providers. Once a client enters into an agreement with any listed company, they are solely responsible for all proceedings.</p>
                    </div>

                    <div className="flex items-start gap-10">
                        <i className="ri-checkbox-blank-circle-fill             mt-1 text-sm"></i>
                        <p>The Brightlancers Services Directory operates solely for marketing and promotional purposes, helping to showcase registered businesses.</p>
                    </div>

                    <div className="flex items-start gap-10">
                        <i className="ri-checkbox-blank-circle-fill             mt-1 text-sm"></i>
                        <p>All businesses featured here are verified and registered users. Brightlancers is only responsible for listing and promoting these brands and is not liable for any agreements made between clients and providers.</p>
                    </div>

                    <div className="flex items-start gap-10">
                        <i className="ri-checkbox-blank-circle-fill             mt-1 text-sm"></i>
                        <p>User-submitted reviews may be displayed for each brand. Please follow our review posting guidelines for submitting feedback.</p>
                    </div>
                </div>



            </div>










            {/* How it works portion */}
            <div className="min-h-[80vh] w-full overflow-x-hidden  p-5 md:p-10 lg:p-20">


                <h1 className='text-3xl font-bold'>How Does It Work?</h1>
                <p className='text-xl font-medium mt-3'>Joining the Brightlancers Services Directory is simple. Just register your brand with us, submit the necessary details about your service domain, and our team will review your application.
                (If approved, your business will be listed and visible on this page.)</p>





                <div className="h-max w-full flex flex-col md:flex-row gap-10 md:gap-0 flex-wrap justify-center items-center gap-x-40 mt-20 mb-32">

                    <div className="h-32 w-56 flex flex-col gap-5 justify-center items-center">
                        <img
                            src="https://www.enablers.org/public/assets-app/img/Enablers-register-business-icon.png" alt="" />
                        <h1>register business</h1>
                    </div>
                    <div className="h-32 w-56 flex flex-col gap-5 justify-center items-center">
                        <img src="https://www.enablers.org/public/assets-app/img/Enablers-client-communication-icon.png" alt="" />
                        <h1>client communication</h1>
                    </div>
                    <div className="h-32 w-56 flex flex-col gap-5 justify-center items-center">
                        <img src="https://www.enablers.org/public/assets-app/img/Enablers-get-hired-icon.png" alt="" />
                        <h1>get hired</h1>
                    </div>

                </div>




{/* 
                <div className="h-max w-full flex justify-center">
                    <button className='h-max w-max p-3 px-10 bg-blue-500 text-zinc-100 rounded-md hover:bg-zinc-900 hover:text-zinc-200 transition-all duration-300'>__Get Membership</button>
                </div> */}


            </div>





        </div>
    )
}

export default React.memo(ServicesDisclaimerAndWorks)