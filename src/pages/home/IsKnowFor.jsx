import React from 'react'
import ServiceCard from '../../components/servce-card/ServiceCard'

import Hope from '../../assets/images/hope.png'
import Family from '../../assets/images/family.png'
import Parents from '../../assets/images/parents.png'

import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'

const IsKnowFor = () => {
  const serviceCardData = [
    {
      id: '1',
      image: Hope,
      serviceName: 'A place where you don’t lose your hopes',
    },
    {
      id: '2',
      image: Family,
      serviceName: 'A place where we help you complete your own family',
    },
    {
      id: '3',
      image: Parents,
      serviceName: 'A place where couples come, but they go back as parents',
    },
  ]

  return (
    <section className='gap is-knowfor'>
      <div className='container-fluid'>
        <motion.h2
          className='heading-style'
          variants={fadeIn('down', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
        >
          <span className='text-style d-block'>Trivandrum Fertility</span>& IVF
          Center (TFC) PRIMS Hospital is known for.
        </motion.h2>
      </div>
      <div className='container'>
        <div className='card-section'>
          <div className='row'>
            {serviceCardData.map((item) => {
              const { id, image, serviceName } = item
              return (
                <div key={id} className='col-lg-4 d-flex '>
                  <ServiceCard
                    image={image}
                    isService={false}
                    serviceName={serviceName}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <motion.p
          className='mt-5'
          variants={fadeIn('up', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
        >
          With all these noble thoughts, our expert Dr Amal Calist brought his
          brainchild into existence in December 1993. Last 30 years we have
          helped couples to make healthy family This center is a patient
          referral one TFC provides advanced assisted reproduction as well as
          Modern treatment for Failed IVF , PCO, POR, Endometriosis, and Male
          Infertility in Trivandrum.
        </motion.p>
        <motion.p
          className='mt-5'
          variants={fadeIn('down', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
        >
          TFC is one of the best IVF centers in Trivandrum and is consistently
          rated by patients and fellow gynecologists to be one of the top
          Fertility clinics in Trivandrum. Get the best fertility treatment at
          TFC with Dr.Amal Calist B, India's leading Fertility specialist,
          Gynecologist and Laparoscopic surgeon.
        </motion.p>
      </div>
      <motion.div
        className='container mt-5'
        variants={fadeIn('right', 0.2)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
      >
        <section className='specialised'>
          <p className='m-0 p-0'>
            Get the best fertility treatment at TFC with Dr.AmalCalist B,
            India's leading Fertility{' '}
            <span className='d-block'>
              specialist, Gynaecologist and Laparoscopic surgeon.
            </span>
          </p>
        </section>
        <section className='mt-5 mb-5 practice'>
          <h2>We Don't Practice Donor & Surrogacy</h2>
        </section>
        <section className='empty-gap'></section>
      </motion.div>
    </section>
  )
}

export default IsKnowFor
