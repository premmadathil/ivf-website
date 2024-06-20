import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn } from '../../varients'

const SectionEnhancing = () => {
  return (
    <section className='container'>
      <div className='text-center'>
        <div className='gap'>
          <motion.h4
            className='explore'
            variants={fadeIn('right', 0.2)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
          >
            Fertility Enhancing Programme
          </motion.h4>
          <motion.h2
            className='ready-to'
            variants={fadeIn('up', 0.2)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
          >
            Ready to Personalize <span className='d-block'>Your Program?</span>
          </motion.h2>
        </div>
      </div>
    </section>
  )
}

export default SectionEnhancing
