
'use client';

import React, { useContext, useEffect } from 'react'
import CourseApplyPageHeroSection from '../../components/CourseApplyPageHeroSection'
import CourseApplyPageCourseContent from '../../components/CourseApplyPageCourseContent'
import MyContext from '../../context/MyContext'
import { useRouter } from 'next/navigation';























const CourseApplyPage = () => {



  let {
    currentClickedCourseData,
    setCurrentNavContext
  } = useContext(MyContext)
  let router = useRouter()





  useEffect(() => {
    if (!currentClickedCourseData || currentClickedCourseData == "") {
      router.push("/courses")
      setCurrentNavContext("COURSES")
    }
  }, [currentClickedCourseData])


















  return (
    <div className=''>




      {/* <Navbar/> */}







      <CourseApplyPageHeroSection />









      <CourseApplyPageCourseContent />










    </div>
  )
}

export default CourseApplyPage