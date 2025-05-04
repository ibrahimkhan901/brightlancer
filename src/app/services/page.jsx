import React from 'react'
import Navbar from '../../components/Navbar'
import ServicesHeroSection from '../../components/ServicesHeroSection'
import ServicesListCards from '../../components/ServicesListCards'
import ServicesDisclaimerAndWorks from '../../components/ServicesDisclaimerAndWorks'
import Footer from '../../components/Footer'
import HomeOurFriends from '../../components/HomeOurFriends'
import TermAndDevDetails from '../../components/TermAndDevDetails'

const Services = () => {
    return (
        <div className='bg-zinc-100 pt-20 sm:pt-32'>


            {/* The common navbar which  is also common in home and about */}
            <Navbar />










            {/* hero sectino of services */}
            <ServicesHeroSection />












            <ServicesListCards/>










            <ServicesDisclaimerAndWorks/>







            {/* <HomeOurFriends/> */}








            <Footer/>


















            <TermAndDevDetails/>






        </div>
    )
}

export default Services