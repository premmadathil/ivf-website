import React from 'react'
import circleIcon from '../../../assets/images/add-button.svg'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../varients'
const TeamsCard = ({ name, designation, image }) => {
  return (
    <div className='teams-card-wrapper'>
      <div className='card-content-wrapper'>
        <div className='teams-image-wrapper'>
          <img className='img-fluid' src={image} alt='#' />
        </div>
        <motion.div
          className='ps-3 mt-3'
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
          <motion.h4
            variants={fadeIn('left', 0.2)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
          >
            {name}
          </motion.h4>
          <motion.div
            className='designation'
            variants={fadeIn('right', 0.2)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
          >
            {designation.map((desi, index) => {
              return (
                <p key={index} className='m-0 mb-1'>
                  {desi}
                </p>
              )
            })}
          </motion.div>
        </motion.div>
        <div className='readmore'>
          <p>
            Read More <img src={circleIcon} alt='circleIcon' />
          </p>
        </div>
      </div>
    </div>
  )
}

export default TeamsCard
