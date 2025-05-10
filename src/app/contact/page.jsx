import React from 'react'
import ContactOption from '../../components/ContactOption'
import ContactSocialLinks from '../../components/ContactSocialLinks'






export const metadata = {
  title: 'Contact Us – Brightlancer Academy, Bannu',
  description: 'Get in touch with Brightlancer Academy for inquiries about our e-commerce courses, admissions, or other services. Visit us at Shadman Plaza, Bannu or contact us online.',
  keywords: [
    'Contact Brightlancer Academy',
    'E-commerce Academy Bannu',
    'Freelance Training Bannu',
    'Brightlancer Contact Information',
  ],

  openGraph: {
    title: 'Contact Us – Brightlancer Academy',
    description: 'Need help or more information? Get in touch with Brightlancer Academy, your go-to source for e-commerce training in Bannu.',
    url: 'https://brightlancer.vercel.app/contact',
    siteName: 'Brightlancer Academy',
    images: [
      {
        url: '/images/Logo.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Brightlancer Academy',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us – Brightlancer Academy, Bannu',
    description: 'Reach out to Brightlancer Academy for any questions about our courses or services. Visit us in Bannu or contact us online.',
    images: ['/images/Logo.webp'],
  },
};









  
const Contact = () => {
    return (
        <div className='pt-10 sm:pt-20'>






            <ContactOption />







            <ContactSocialLinks />






        </div>
    )
}

export default Contact