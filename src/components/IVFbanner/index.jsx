import React from 'react'
import './banner.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'

const IVFBanner = ({ headding, description, image }) => {
  return (
    <section className='banner'>
      <motion.img
        className='img-fluid'
        variants={fadeIn('down', 0.2)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        src={image}
        alt='#'
      />
      <div className='banner-content'>
        <motion.h2
          variants={fadeIn('right', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
        >
          {headding}
        </motion.h2>
        <motion.p
          variants={fadeIn('left', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}

export default IVFBanner
