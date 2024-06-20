import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn } from '../../../varients'

const TestimonialCard = ({ content, name, image }) => {
  return (
    <motion.section
      className='testimonial-card'
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial={'hidden'}
      whileInView={'show'}
      viewport={{ once: true, amount: 0.7 }}
    >
      <div className='teams-image-wrapper'>
        <motion.img
          variants={fadeIn('right', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
          className='img-fluid'
          src={image}
          alt='#'
        />
      </div>
      <motion.div
        className='ps-3 mt-3 pb-4'
        variants={fadeIn('left', 0.2)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className='designation'>
          <p className='m-0 mb-1 mt-2 pe-2'>{content}</p>
        </div>
        <motion.h5
          className='mt-2 font-weight-bold pt-2 '
          variants={fadeIn('left', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
        >
          {name}
        </motion.h5>
      </motion.div>
    </motion.section>
  )
}

export default TestimonialCard
