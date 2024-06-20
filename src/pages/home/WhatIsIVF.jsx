import React from 'react'
import LadyDr from '../../assets/images/whatis-girl.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'
import { useNavigate, useLocation } from 'react-router-dom'

const WhatIsIVF = () => {
  const navigate = useNavigate()
  let location = useLocation()
  const isAbout = location.pathname === '/about-us'

  const pageNavigate = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    navigate('/about-us')
  }
  return (
    <section className='gap whatis-ivf'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 position-relative'>
            <motion.img
              className='img-fluid lady-dr'
              src={LadyDr}
              alt='LadyDr'
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.7 }}
            />
          </div>
          <div className='col-lg-6 text-white'>
            <article className='mb-5'>
              <motion.h2
                className='mb-4'
                variants={fadeIn('left', 0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.7 }}
              >
                <span className='text-style text-border'>What Is</span> IVF?
              </motion.h2>
              <motion.p
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.7 }}
              >
                In-vitro Fertilization, otherwise referred to as IVF, is the
                process of fertilizing a mother’s egg outside of her body before
                transferring an embryo to the womb. In short, it involves
                removing an egg, or eggs, from the mother’s ovary to fertilize
                with the father’s sperm before transplanting them into her womb.
              </motion.p>
            </article>
            <motion.h2
              className='mb-4'
              variants={fadeIn('left', 0.2)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.7 }}
            >
              <span className='text-style text-border d-inline-block '>
                What Does the
              </span>{' '}
              IVF Procedure Involve?
            </motion.h2>
            <motion.p
              variants={fadeIn('left', 0.2)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.7 }}
            >
              Some women may begin IVF with a fertility medication to stimulate
              the production of eggs to increase chances of obtaining a
              successful pregnancy. Once the eggs are ready, they will be
              transferred from the mother’s ovaries to a secure, sterile
              location to be fertilized with the father’s sperm. Incubation
              takes a few days, during which time the embryos are monitored for
              growth until they can be planted into the uterus of the mother or
              freezed (Vitrification).
            </motion.p>
            {!isAbout && (
              <motion.button
                onClick={pageNavigate}
                className='btn btn-sm btn-primary ps-3 pe-3'
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.7 }}
              >
                Know More
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsIVF
