import React, { Fragment } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer/Footer'
import HeroSection from '../../components/hero'

import GreetingSection from './GreetingSection'
import HomeAboutSection from './HomeAboutSection'
import VisionMissionSection from './VisionMissionSection'
import OurServiceSection from './OurServiceSection'
import WhyChooseSection from './WhyChooseSection'
import IsKnowFor from './IsKnowFor'
import ParentHood from './ParentHood'
import FertilityEnhancing from './FertilityEnhancing'
import OurTeams from './OurTeams'
import WhatIsIVF from './WhatIsIVF'
import ClientTestimonials from './ClientTestimonials'
import StartJourney from './StartJourney'

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <main>
        {/* ================ */}
        <GreetingSection />
        <HomeAboutSection />
        <VisionMissionSection />
        <OurServiceSection />
        <WhyChooseSection />
        <IsKnowFor />
        <ParentHood />
        <FertilityEnhancing />
        <OurTeams />
        <WhatIsIVF />
        <ClientTestimonials />
        <StartJourney />
        {/* ================ */}
      </main>
      <Footer />
    </Fragment>
  )
}

export default Home
