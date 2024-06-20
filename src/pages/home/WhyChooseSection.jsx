import React from 'react'
import listIcon from '../../assets/images/list-icon.svg'
import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'
const WhyChooseSection = () => {
  const list = [
    {
      id: '1',
      content: 'Certified Nationally Recognized Fertility Specialist',
    },
    {
      id: '2',
      content:
        'Formerly Chief consultant and Teaching Faculty, Fertility Unit SAT Hospital medical College Trivandrum and Government Medical College Trichur and Alleppey',
    },
    {
      id: '3',
      content: 'More than 30 years of Experience.',
    },
    {
      id: '4',
      content:
        'Expert Fertility Specialist providing Compassionate Care and counselling.',
    },
    {
      id: '5',
      content: 'Advanced training from many International Bodies.',
    },
    {
      id: '6',
      content: 'Successful Patient referral center.',
    },
    {
      id: '7',
      content: 'Cutting edge ART technology.',
    },
    {
      id: '8',
      content: 'Personalized Treatment Plan.',
    },
    {
      id: '9',
      content:
        'Pregnancy rates above National average at par with International Standards.',
    },
    {
      id: '10',
      content: 'Comprehensive Stress reduction Programme.',
    },
  ]
  return (
    <section className='gap why-choose-us'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-5 ms-auto ps-4'>
            <motion.h2
              className='heading-style'
              variants={fadeIn('left', 0.2)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
            >
              <span className='text-style'>Why</span> Choose TFC ?
            </motion.h2>
            <div
              className='listing-wrapper'
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
              viewport={{ once: true, amount: 0.7 }}
            >
              <ul>
                {list.map((item, index) => {
                  const { id, content } = item
                  return (
                    <motion.li
                      className='d-flex list'
                      key={id}
                      variants={fadeIn('up', 0.2)}
                      initial='hidden'
                      whileInView='show'
                      transition={index * 0.1}
                      viewport={{ once: true, amount: 0.7 }}
                    >
                      <img className='me-2' src={listIcon} alt='listIcon' />
                      {content}
                    </motion.li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
