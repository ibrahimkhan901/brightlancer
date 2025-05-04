import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import AboutWhoAmI from '../../components/AboutWhoAmI.jsx'
import AboutProject from '../../components/AboutProject.jsx'
import AboutExecutiveMsg from '../../components/AboutExecutiveMsg.jsx'
import AboutOurAchievments from '../../components/AboutOurAchievments.jsx'
import AboutOtherPart from '../../components/AboutOtherPart.jsx'
import Footer from '../../components/Footer.jsx'
import HomeOurFriends from '../../components/HomeOurFriends.jsx'
import TermAndDevDetails from '../../components/TermAndDevDetails.jsx'




const About = () => {
  return (
    <div className='pt-20 sm:pt-32'>





      {/* Navbar which is common to home also */}
      <Navbar />







      {/* contain the upper side images and also who am i section */}
      <AboutWhoAmI />








      {/* contain the project cards */}
      <AboutProject />







      <AboutExecutiveMsg />










      <AboutOurAchievments />








      <AboutOtherPart />














      {/* <HomeOurFriends /> */}














      <Footer />






















      <TermAndDevDetails />











    </div>
  )
}

export default About