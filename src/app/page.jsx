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










// app/page.tsx
export const metadata = {
  title: 'Brightlancer – Pakistan’s Leading eCommerce Skill-Building Academy',
  description: 'Empowering youth in Bannu and beyond with practical training in Amazon, Shopify, and freelancing to build successful digital careers.',
  keywords: ['Brightlancer', 'eCommerce training Pakistan', 'Amazon FBA courses', 'freelancing in Pakistan', 'digital skills Bannu'],
  openGraph: {
    title: 'Brightlancer – Pakistan’s Leading eCommerce Skill-Building Academy',
    description: 'Join Brightlancer to gain hands-on experience in eCommerce and freelancing, and become a successful digital entrepreneur.',
    url: 'https://brightlancer.vercel.app/',
    siteName: 'Brightlancer',
    images: [
      {
        url: '/meta-image.png',
        width: 800,
        height: 600,
        alt: 'Brightlancer Academy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};









const Home = () => {




  







  return (
    <div className='h-full w-full overflow-x-hidden pb-0 pt-20 sm:pt-32' >




      {/* This is the Navbar of Home screen */}
      <Navbar />







      {/* This is the hero section of Home */}
      <Hero />









      {/* This component contain the cards of which navigates to differenc section  */}
      <HomeNetworkCards />













      {/* This component contain the photo galarry of achievements on home and also mission  */}
      <HomeMissionAndAchievImg />












      {/* This componet contain the offers which is provided by brightlancer at home page */}
      <HomeOffer />








      {/* This compoennt contain all the projects which is done by brightlancers */}
      <HomeProject />















      {/* As seen as componetnt */}
      <HomeAsSeenAs />









      {/* THe compoent contain the list of icon of friend company */}
      <HomeOurFriends />










      {/* The footer fo home page */}
      <Footer />












      {/* this comp contain the privary and developer details */}
      <TermAndDevDetails />





    </div>
  )
}

export default Home