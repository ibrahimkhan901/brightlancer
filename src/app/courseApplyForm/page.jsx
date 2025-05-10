'use client';



import React, { useContext, useState, useEffect } from 'react'
import axiosReqSender from '../../utils/AxiosReq';
import MyContext from '../../context/MyContext';
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader';









const CourseApplyForm = () => {




    let { currentClickedCourseData,
        setCurrentNavContext,
        setApplyCourseData
    } = useContext(MyContext)
    let [loaderVisibiliy, setLoaderVisibility] = useState(null)
    let router = useRouter()



    let [formData, setFormData] = useState({
        username: '',
        fatherName: "",
        cnicNo: '',
        email: '',
        password: '',
        phoneNo: "",
        gender: "male",
        country: "",
        city: '',
        fullAddress: "",
        refferedBy: "facebook",
        agreeOrNot: false,
        courseId: ''
    })










    useEffect(() => {
        if (!currentClickedCourseData || currentClickedCourseData == "") {
            router.push("/courses")
            setCurrentNavContext("COURSES")
        }
    }, [currentClickedCourseData])






    function handleChange(event) {
        let { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));


        if (name == "agreeOrNot") {
            setFormData(prev => ({
                ...prev,
                [name]: event.target.checked
            }));
        }


    }
















    async function handleSubmit(event) {
        event.preventDefault()
        setLoaderVisibility("visible")
        try {



            const updatedFormData = {
                ...formData,
                courseId: currentClickedCourseData.id
            };

            // const result =  coursesDataArray.find(item => item.id == updatedFormData.courseId)
            // console.log(result)

            let method = "post";
            let url = "/api/courseApply"
            let data = updatedFormData
            let response = await axiosReqSender(method, url, data);


            if (response) {
                setLoaderVisibility(null)
            }





            if (response.data.success == true) {
                setApplyCourseData(response.data.courseApplyData)

                // sending the req to backend to send the email to user
                
                
                alert("Applied Successfully")
                router.push("/courseApplySuccess")
                
                
                
                let emailSendingResponse= await axiosReqSender("post", "/api/sendEmail", {courseApplyId :response.data.courseApplyData?._id})
                console.log(emailSendingResponse?.data)
            }





            // setFormData({
            //     username: '',
            //     fatherName: "",
            //     cnicNo: '',
            //     email: '',
            //     password: '',
            //     phoneNo: "",
            //     gender: "male",
            //     country: "",
            //     city: '',
            //     fullAddress: "",
            //     refferedBy: "facebook",
            //     agreeOrNot: false,
            //     courseId: ''
            // })






        } catch (error) {
            setLoaderVisibility(null)
            console.log(error)
        }

    }




















    return (
        // main div
        <div className='h-full w-full overflow-x-hidden  p-0 sm:p-10 md:p-16 lg:p-20'>



            {/* container */}
            <div className="h-full w-full bg-zinc-100 p-5 pt-10 shadow-md shadow-zinc-500">





                {/* heading */}
                <div className="h-max w-full  font-bold text-2xl sm:text-3xl md:text-4xl mb-10 p-3">
                    Kindly fill the form to apply for <span className='text-orange-400'>{currentClickedCourseData.courseName}</span>
                </div>









                {/* Form  */}
                <form
                    onSubmit={handleSubmit}
                    className='h-full w-full overflow-x-hidden flex flex-wrap  gap-x-3 md:gap-x-10 gap-y-10 justify-center items-center'
                >


                    <label
                        className='h-full w-[40%] flex flex-col gap-0 text-xl text-zinc-700'>
                        Name
                        <input
                            className='h-12 w-full border-1 border-gray-500 p-2 px-5 rounded-md'
                            type="text"
                            onChange={handleChange}
                            value={formData.username}
                            name='username'
                            placeholder='Enter your name....'
                            required
                        />
                    </label>


                    <label
                        className='h-full w-[40%] flex flex-col gap-0 text-xl text-zinc-700'>
                        Father name
                        <input
                            className='h-12 w-full border-1 border-gray-500 p-2 px-5 rounded-md'
                            type="text"
                            onChange={handleChange}
                            value={formData.fatherName}
                            name='fatherName'
                            placeholder='Enter your Father name....'
                        // required
                        />
                    </label>



                    <label
                        className='h-full w-[40%] flex flex-col gap-0 text-xl text-zinc-700'>
                        CNIC number
                        <input
                            className='h-12 w-full border-1 border-gray-500 p-2 px-5 rounded-md'
                            type="number"
                            onChange={handleChange}
                            value={formData.cnicNo}
                            name='cnicNo'
                            placeholder='Enter your CNIC number....'
                            required
                        />
                    </label>





                    <label
                        className='h-full w-[40%] flex flex-col gap-0 text-xl text-zinc-700'>
                        Email
                        <input
                            className='h-12 w-full border-1 border-gray-500 p-2 px-5 rounded-md'
                            type="text"
                            onChange={handleChange}
                            value={formData.email}
                            name='email'
                            placeholder='Enter your email....'
                            required
                        />
                    </label>



                    <label
                        className='h-full w-[40%] flex flex-col gap-0 text-xl text-zinc-700'>
                        Phone number
                        <input
                            className='h-12 w-full border-1 border-gray-500 p-2 px-5 rounded-md'
                            type="number"
                            onChange={handleChange}
                            value={formData.phoneNo}
                            name='phoneNo'
                            placeholder='Enter your phone number....'
                            required
                        />
                    </label>



                    <label
                        className='h-full w-[40%] flex flex-col gap-0 text-xl text-zinc-700'>
                        Password
                        <input
                            className='h-12 w-full border-1 border-gray-500 p-2 px-5 rounded-md'
                            type="text"
                            onChange={handleChange}
                            value={formData.password}
                            name='password'
                            placeholder='Enter your password....'
                        // required
                        />
                    </label>



                    <label
                        className='h-full w-[40%] flex flex-col gap-0 text-xl text-zinc-700'>
                        Gender
                        <select
                            className='h-12 w-full border-1 border-gray-500 p-2 px-5 rounded-md'
                            onChange={handleChange}
                            value={formData.gender}
                            name='gender'
                            id=""
                            required
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>



                    <label
                        className='h-full w-[40%] flex flex-col gap-0 text-xl text-zinc-700'>
                        Country
                        <input
                            className='h-12 w-full border-1 border-gray-500 p-2 px-5 rounded-md'
                            type="text"
                            onChange={handleChange}
                            value={formData.country}
                            name='country'
                            placeholder='Enter your country....'
                        // required
                        />
                    </label>



                    <label
                        className='h-full w-[40%] flex flex-col gap-0 text-xl text-zinc-700'>
                        City
                        <input
                            className='h-12 w-full border-1 border-gray-500 p-2 px-5 rounded-md'
                            type="text"
                            onChange={handleChange}
                            value={formData.city}
                            name='city'
                            placeholder='Enter your city....'
                        // required
                        />
                    </label>



                    <label
                        className='h-full w-[40%] flex flex-col gap-0 text-xl text-zinc-700'>
                        Full Address
                        <input
                            className='h-12 w-full border-1 border-gray-500 p-2 px-5 rounded-md'
                            type="text"
                            onChange={handleChange}
                            value={formData.fullAddress}
                            name='fullAddress'
                            placeholder='Enter your full address....'
                            required
                        />
                    </label>








                    <label
                        className='h-full w-[80%] sm:w-[85%] flex flex-col gap-0 text-sm md:text-xl text-zinc-600 md:text-zinc-700'
                    >
                        Who Reffered you brightlancer
                        <select
                            className='h-12 w-full border-1 border-gray-500 p-2 px-5 rounded-md'
                            onChange={handleChange}
                            value={formData.refferedBy}
                            name='refferedBy'
                        // required
                        >
                            <option value="facebook">FACEBOOK</option>
                            <option value="school">SCHOOL</option>
                            <option value="friends">FRIENDS</option>
                            <option value="collage">COLLAGE</option>
                            <option value="tiktok">TIKTOK</option>
                            <option value="youtube">YOUTUBE</option>
                            <option value="seminar">SEMINAR</option>

                        </select>
                    </label>












                    {/* Terms and conditon  */}
                    <div className="h-full w-full p-5 border-1 border-zinc-300 bg-zinc-50 rounded-lg">
                        <h1 className='text-2xl text-center sm:text-start sm:text-3xl lg:text-4xl  '>Terms & Conditions</h1>
                        <h1 className='text-2xl sm:text-3xl lg:text-4xl mt-5'>Refund Process:</h1>
                        <li>Refund can be made in the following categories:</li>
                        <li>100% refund before induction class</li>
                        <li>After induction class, there is no refund policy at all.</li>
                        <li>Refund shall be processed in 14 working days after providing the bank details.</li>
                        <h1 className='text-2xl sm:text-3xl lg:text-4xl mt-5'>Updated Rules for Student Transfer:</h1>
                        <li>Transfer from one group to another or from one training to another will only be entertained before the 2nd class.</li>
                        <li>No transfer will be done after 2nd class. (Induction session is referred to as Class 1).</li>
                    </div>




                    {/* agree or not checkbox */}
                    <label
                        className='h-full w-full flex  gap-3 text-xl text-zinc-700 items-center '
                        htmlFor="">

                        <input
                            className='h-5 w-5'
                            type="checkbox"
                            onChange={handleChange}
                            value={formData.agreeOrNot}
                            name='agreeOrNot'
                            required
                        />
                        I agree with terms and condition
                    </label>


                    {/* submit button */}
                    <button
                        className='h-full w-full bg-blue-600 py-2 rounded-lg text-zinc-50 text-xl relative'
                        type='submit'>


                        Submit


                        <div
                            className='absolute top-1/2 right-1/3 -translate-y-1/2'
                            style={{ display: loaderVisibiliy ? "block" : "none" }}
                        >
                            <Loader height={20} width={20} />
                        </div>



                    </button>





                </form>







            </div>






        </div>
    )
}

export default CourseApplyForm