import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'
const GreetingSection = (variants) => {
  return (
    <Fragment>
      <section className='gap greeting-from text-center'>
        <div className='container'>
          <motion.h2
            className='heading-style'
            variants={fadeIn('left', 0.2)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
          >
            <span className='text-style'>Greeting from</span> PERSIS group
          </motion.h2>

          <motion.p
            className='col-xl-9 mx-auto'
            variants={fadeIn('right', 0.2)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
          >
            Persis Group Affiliated Institutions (PRIMS Hospital, Trivandrum
            Fertility and IVF center,Trivandrum Diagnostic Center)are
            established with the aim of providing high quality health care to
            the public. We have started a charity wing to help out the
            underprivileged Seeking Support from all of you
          </motion.p>
        </div>
      </section>
      <div className='container'>
        <section className='empty-gap'></section>
      </div>
    </Fragment>
  )
}

export default GreetingSection
