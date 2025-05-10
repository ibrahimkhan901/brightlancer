import React from 'react'
import ServicesHeroSection from '../../components/ServicesHeroSection'
import ServicesListCards from '../../components/ServicesListCards'
import ServicesDisclaimerAndWorks from '../../components/ServicesDisclaimerAndWorks'








// app/services/page.tsx
export const metadata = {
    title: 'Our Services – Brightlancer',
    description: 'Explore Brightlancer’s range of services including eCommerce solutions, digital marketing, and business consultancy.',
    keywords: ['Brightlancer services', 'eCommerce solutions', 'digital marketing Pakistan', 'business consultancy Bannu'],
    openGraph: {
      title: 'Our Services – Brightlancer',
      description: 'Brightlancer offers comprehensive services to help you succeed in the digital marketplace.',
      url: 'https://brightlancer.vercel.app/services',
      siteName: 'Brightlancer',
      images: [
        {
          url: '/meta-image.png',
          width: 800,
          height: 600,
          alt: 'Brightlancer Services',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };

  






  
const Services = () => {
    return (
        <div className='pt-20 sm:pt-32'>









            {/* hero sectino of services */}
            <ServicesHeroSection />












            <ServicesListCards/>










            <ServicesDisclaimerAndWorks/>







        </div>
    )
}

export default Services