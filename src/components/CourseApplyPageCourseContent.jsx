import React, { useContext } from 'react'
import MyContext from '../context/MyContext'











const CourseApplyPageCourseContent = () => {



    let {currentClickedCourseData}= useContext(MyContext)





    

  return (
    <div className='h-max w-full p-3 md:p-10 text-center md:text-start'> 
        

        <div className="h-max w-full p-10">
            <h1 className='h-max w-full text-2xl md:text-3xl lg:text-4xl font-bold text-orange-400'>Course Breakdown</h1>
            <p className='text-xl md:text-2xl lg:text-3xl font-medium'>This is a complete overview of the actions you will take while building your business with the Brightlancers</p>
        </div>


        <div className="h-max w-full p-5 md:p-10">
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-zinc-900 mb-5'>Introduction & overview of TikTok Shop</h1>
            {
                currentClickedCourseData?.courseContent?.map((eachList)=>{
                    return (
                        <div 
                        key={eachList}
                        className="">
                            <i></i>
                            <p className='text-lg md:text-xl lg:text-2xl text-zinc-900 font-medium pl-10'>
                                {eachList}
                            </p>
                        </div>
                    )
                })
            }
            
        </div>










    </div>
  )
}

export default React.memo(CourseApplyPageCourseContent)