import React, { Fragment } from 'react'
import Header from '../../components/header'
import IVFBanner from '../../components/IVFbanner'
import bannerImg from '../../assets/images/banner-img/service_banner.jpg'
import ServiceDetails from './ServiceDetails'
import StartJourney from '../home/StartJourney'
import Footer from '../../components/footer/Footer'
import OurProcess from './OurProcess'
const OurServices = () => {
  return (
    <Fragment>
      <Header />
      <IVFBanner
        headding={'Our Services'}
        description={'Trivandrum Fertility and IVF Center'}
        image={bannerImg}
      />
      <main>
        <ServiceDetails />
        <OurProcess />
        <StartJourney />
      </main>
      <Footer />
    </Fragment>
  )
}

export default OurServices
