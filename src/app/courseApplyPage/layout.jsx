



export const metadata = {
    title: 'Enroll – Brightlancer Academy, Bannu',
    description: 'Ready to start your e-commerce journey? Apply now to join Brightlancer Academy’s comprehensive training programs, including Amazon, Shopify, and digital marketing courses.',
    keywords: [
      'Enroll Brightlancer Academy',
      'Apply for E-commerce Courses',
      'Freelance Training Application',
      'Brightlancer Academy Admission',
    ],
  
    openGraph: {
      title: 'Enroll – Brightlancer Academy',
      description: 'Apply today and start your journey to becoming an e-commerce professional. Brightlancer Academy offers expert-led courses in Bannu.',
      url: 'https://brightlancer.vercel.app/enroll',
      siteName: 'Brightlancer Academy',
      images: [
        {
          url: '/images/Logo.webp',
          width: 1200,
          height: 630,
          alt: 'Brightlancer Academy Enrollment',
        },
      ],
      locale: 'en_PK',
      type: 'website',
    },
  
    twitter: {
      card: 'summary_large_image',
      title: 'Enroll – Brightlancer Academy, Bannu',
      description: 'Apply now to enroll in Brightlancer Academy’s top e-commerce courses and begin your freelancing career.',
      images: ['/images/Logo.webp'],
    },
  };
  
  
  



  export default function Layout({ children }) {
    return <>{children}</>;
  }
  