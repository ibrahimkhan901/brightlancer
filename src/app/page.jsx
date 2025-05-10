import AboutProject from '@/components/AboutProject'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HomeAsSeenAs from '../components/HomeAsSeenAs'
import HomeMissionAndAchievImg from '../components/HomeMissionAndAchievImg'
import HomeNetworkCards from '../components/HomeNetworkCards'
import HomeOffer from '../components/HomeOffer'
import HomeOurFriends from '../components/HomeOurFriends'
import HomeProject from '../components/HomeProject'
import Navbar from '../components/Navbar'
import TermAndDevDetails from '../components/TermAndDevDetails'
import MyContext from '../context/MyContext'















const Home = () => {












  return (
    <div className='h-full w-full overflow-x-hidden pb-0 ' >




      {/* This is the hero section of Home */}
      <Hero />









      {/* This component contain the cards of which navigates to differenc section  */}
      <HomeNetworkCards />













      {/* This component contain the photo galarry of achievements on home and also mission  */}
      <HomeMissionAndAchievImg />












      {/* This componet contain the offers which is provided by brightlancer at home page */}
      <HomeOffer />








      {/* This compoennt contain all the projects which is done by brightlancers */}
      
      
      {/* <HomeProject /> */}

     <AboutProject/>

















    </div>
  )
}

export default Home