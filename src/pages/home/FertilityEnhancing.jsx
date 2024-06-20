import React from 'react'
import listIcon from '../../assets/images/list-icon.svg'
import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'
const FertilityEnhancing = () => {
  const list = [
    {
      id: '1',
      content: 'Turning couple into happy family is our motto',
    },
    {
      id: '2',
      content: 'Ethical Fertility care since 1993',
    },
  ]
  return (
    <section className='gap fertility-enhance'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 ms-auto '>
            <motion.h4
              className='text-white'
              variants={fadeIn('down', 0.2)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
            >
              Fertility Enhancing Programme
            </motion.h4>
            <motion.h3
              className='text-gradient'
              variants={fadeIn('right', 0.2)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
            >
              Ready to Personalize Your Program?
            </motion.h3>
            <motion.div
              className='transparent-list mt-5 mb-5'
              variants={fadeIn('down', 0.2)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
            >
              <ul>
                {list.map((item, index) => {
                  const { id, content } = item
                  return (
                    <motion.li
                      className='d-flex list'
                      key={id}
                      variants={fadeIn('down', 0.2)}
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
            <motion.button
              className='btn btn-primary btn-sm pe-3 ps-3 mt-3'
              variants={fadeIn('down', 0.2)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
            >
              Explore our Programe
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FertilityEnhancing
