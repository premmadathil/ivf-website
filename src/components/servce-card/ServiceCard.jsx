import React from 'react'
import './service-card.css'
import { fadeIn } from '../../varients'
import { motion } from 'framer-motion'
const ServiceCard = ({ image, serviceName, isService, delay }) => {
  return (
    <motion.section
      className='service-card-wrapper'
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView='show'
      transition={{ delay }}
      viewport={{ once: true, amount: 0.7 }}
    >
      <div className={isService ? 'content-section' : 'text-left'}>
        <img src={image} alt='images' />
        <p className={isService ? 'service-name' : 'not-service-text'}>
          {serviceName}
        </p>
      </div>
    </motion.section>
  )
}

export default ServiceCard
