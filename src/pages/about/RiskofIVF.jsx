import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn } from '../../varients'

const RiskofIVF = () => {
  return (
    <section className='gap riskof'>
      <div className='container'>
        <header className='text-center'>
          <motion.h2
            className='header-style mb-5'
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.7 }}
          >
            <span className='text-style'>Risks of</span> IVF
          </motion.h2>
        </header>
        <motion.p
          className='text-center mt-4'
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.7 }}
        >
          When performed by an experienced professional like those at Trivandrum
          Fertility, the risks to the parent of a future child are minimal.
          Research has shown that the benefits and high success rate of this
          common procedure greatly outweigh these risks, making IVF a reliable
          and safe fertility solution for parents seeking a way to make their
          dreams of parenthood a reality.
        </motion.p>
      </div>
    </section>
  )
}

export default RiskofIVF
