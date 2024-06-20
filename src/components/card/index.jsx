import React from 'react'
import './card.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'
const IVFCard = ({ image, heading, content, isHome }) => {
  const words = heading.split(' ')
  const firstWord = words[0]

  return (
    <motion.section
      className='card-wrapper'
      variants={fadeIn('up', 0.2)}
      initial={'hidden'}
      whileInView={'show'}
      viewport={{ once: true, amount: 0.7 }}
    >
      <div className='card-content'>
        <div className='img-wrapper'>
          {<img className='card-image' src={image} alt='image' />}
        </div>
        <div className={isHome ? 'card-text-home' : 'card-text'}>
          <h6 className={isHome ? 'heading-style mb-1' : ''}>
            {isHome ? (
              <>
                <object className='text-style'>{firstWord}</object>{' '}
                {words.slice(1).join(' ')}
              </>
            ) : (
              heading
            )}
          </h6>
          <p>{content}</p>
        </div>
      </div>
    </motion.section>
  )
}

export default IVFCard
