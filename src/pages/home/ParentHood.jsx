import React from 'react'

import { motion } from 'framer-motion'
import listIcon from '../../assets/images/list-icon.svg'
import { fadeIn } from '../../varients'
const ParentHood = () => {
  const listLeft = [
    {
      id: '1',
      content: 'All infertility treatment - Basic and Advanced under one roof',
    },
    {
      id: '2',
      content:
        'Experienced Clinicians Andrologist, Embryologist and Psychologist',
    },
    {
      id: '3',
      content:
        'Highly advanced IVF Laboratory with modern Assisted reproductive techniques to enhance IVF success',
    },
    {
      id: '4',
      content:
        'Advanced theater facility with Drager (German) Anesthesia unit and Maquet Getinge (Sweden) Surgical lights',
    },
    {
      id: '5',
      content: 'Comprehensive Male and Female fertility evaluation',
    },
    {
      id: '6',
      content: 'Clear Diagnosis of the cause of Infertility',
    },
    {
      id: '7',
      content: 'Personalized time and perfected treatment solutions for couple',
    },
    {
      id: '8',
      content: 'Personalized Treatment Plan',
    },
  ]

  const listRight = [
    {
      id: '1',
      content: 'New treatment options for low ovarian reserve patients',
    },
    {
      id: '2',
      content: 'High IUI success rate',
    },
    {
      id: '3',
      content:
        'Consistent IVF success rates at par with International standards',
    },
    {
      id: '4',
      content:
        'Azoospermia and other Male problems -Advanced treatment can help you father your own genetic child',
    },
    {
      id: '5',
      content: 'Best embryo implantation and take home baby rate',
    },
    {
      id: '6',
      content:
        'Trusted Fertility center dedicated to help couples experience the wonderful bond of parenthood',
    },
    {
      id: '7',
      content:
        'Center for unexplained Infertility, Recurrent pregnancy loss and screening of genetic disorders',
    },
    {
      id: '8',
      content:
        'Compassionate staff and patient counselors and hand holding from start to finish',
    },
  ]

  return (
    <section className='parent-hood gap pt-0'>
      <div className='container-fluid'>
        <motion.h2
          className='heading-style'
          variants={fadeIn('down', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
        >
          YOUR PATHWAY TO PARENTHOOD
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
        >
          Trivandrum Fertility and IVF Center, PRIMS Hospital
        </motion.p>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 d-flex mt-4'>
            <motion.div
              className='list-wrapper'
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
              <ul>
                {listLeft.map((item, index) => {
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
            </motion.div>
          </div>
          <div className='col-lg-6 d-flex mt-4'>
            <motion.div
              className='list-wrapper'
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
              <ul>
                {listRight?.map((item, index) => {
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ParentHood
