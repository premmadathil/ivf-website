import React, { Fragment } from 'react'
import Header from '../../components/header'
import StartJourney from '../home/StartJourney'
import Footer from '../../components/footer/Footer'

import bannerImg from '../../assets/images/banner-img/explore-banner.jpg'
import IVFBanner from '../../components/IVFbanner'
import SectionEnhancing from './SectionEnhancing'
import ExploreNewPatient from './ExploreNewPatient'
const Explore = () => {
  return (
    <Fragment>
      <Header />
      <IVFBanner
        headding={'Explore'}
        description={'Trivandrum Fertility and IVF Center'}
        image={bannerImg}
      />
      <main>
        <SectionEnhancing />
        <ExploreNewPatient />
        <StartJourney />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Explore
