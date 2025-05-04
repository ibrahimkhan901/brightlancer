import React from 'react'
import CoursesHeroSection from '../../components/CoursesHeroSection'
import Navbar from '../../components/Navbar'
import CoursesCards from '../../components/CoursesCards'
import Footer from '../../components/Footer.jsx'
import HomeOurFriends from '../../components/HomeOurFriends.jsx'
import TermAndDevDetails from '../../components/TermAndDevDetails.jsx'

const Courses = () => {
  return (
    <div className='pt-2 sm:pt-32'>
        




        <Navbar/>



        <CoursesHeroSection/>




        <CoursesCards/>




        <Footer/>



        {/* <HomeOurFriends/> */}




        <TermAndDevDetails/>




    </div>
  )
}

export default Courses