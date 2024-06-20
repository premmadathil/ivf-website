import React from 'react'
import AboutImage from '../../assets/images/about-img.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'
const HomeAboutSection = () => {
  const scrollBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }
  return (
    <section className='gap about-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 d-flex align-items-center justify-content-between'>
            <motion.img
              variants={fadeIn('left', 0.2)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
              className='img-fluid'
              src={AboutImage}
              alt='AboutImage'
            />
          </div>
          <motion.div
            className='col-lg-7 ps-4'
            variants={fadeIn('right', 0.2)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
          >
            <motion.h2
              className='heading-style'
              variants={fadeIn('up', 0.2)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
            >
              <span className='text-style'>About</span>Us
            </motion.h2>
            <motion.p
              variants={fadeIn('down', 0.2)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
            >
              The aim of any fertility treatment is to ensure you and your
              partner have a child. Before that happens, there are many hurdles
              to overcome: medical, emotional,with that in mind Dr Amal Calist
              started in 1993 Trivandrum fertility and IVF center near Little
              flower church at Chettikunnu gardens, Pothujenam lane Kumarapuram
              Trivandrum 11. We were able to turn many suffering couples into
              happy family We identify and address the many causes of
              infertility as Cause of the problem is not the same for every one.
            </motion.p>
            <motion.p
              variants={fadeIn('up', 0.2)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
            >
              We help you choose the treatment that is right for you,after
              discussing the treatment options.As science &technology grew we
              wanted to give the best and modern to the couples as all can not
              be offered in a clinic we have started the hospital near Indian
              oil pump in Kachani road Maruthenkuzhi Sasthamangalam Trivandrum
              11.
            </motion.p>
            <motion.p
              className='text-style text-semibold'
              variants={fadeIn('down', 0.2)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
            >
              Join us in sharing the best evidence to empower women and couples
            </motion.p>
            <button
              onClick={scrollBottom}
              className='btn btn-sm btn-primary ps-4 pe-4'
            >
              Contact
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HomeAboutSection
