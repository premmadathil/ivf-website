import React, { Fragment } from 'react'
import Header from '../../components/header'
import IVFBanner from '../../components/IVFbanner'
import AboutIvfImg from '../../assets/images/banner-img/about-ivf.jpg'
import SectionICV from './SectionICV'
import Footer from '../../components/footer/Footer'
import StartJourney from '../home/StartJourney'
import IndicationIVF from './IndicationIVF'
import RiskofIVF from './RiskofIVF'
import WhatIsIVF from '../home/WhatIsIVF'
import IVFICSI from './IVFICSI'

const AboutIVF = () => {
  return (
    <Fragment>
      <Header />
      <IVFBanner
        headding={'About IVF?'}
        description={'Trivandrum Fertility and IVF Center'}
        image={AboutIvfImg}
      />
      <main>
        <SectionICV />
        <IndicationIVF />
        <RiskofIVF />
        <WhatIsIVF />
        <IVFICSI />
        <StartJourney />
      </main>
      <Footer />
    </Fragment>
  )
}

export default AboutIVF
