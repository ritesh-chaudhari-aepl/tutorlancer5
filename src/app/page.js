import AboutUs from '@/pages/AboutUs'
import Contact from '@/pages/Contact'
import Download from '@/pages/Download'
import Features from '@/pages/Features'
import Footer from '@/pages/Footer'
import HeroSection from '@/pages/HeroSection'
import Instructor from '@/pages/Instructor'
import Pricing from '@/pages/Pricing'
import Services from '@/pages/Services'
import Sessions from '@/pages/Sessions'
import Testimonials from '@/pages/Testimonials'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <HeroSection/>
      <Services />
      <AboutUs />
      <Features />
      <Sessions />
      <Pricing />
      <Testimonials />
      <Instructor />
      <Contact />
      <Download />
      <Footer />
    </>
  )
}
