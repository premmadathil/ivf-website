import React from 'react'
import listIcon from '../../assets/images/list-icon.svg'
import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'

const IndicationIVF = () => {
  const list = [
    {
      id: '1',
      content: 'Blocked or removed fallopian tubes',
    },
    {
      id: '2',
      content: 'Unexplained Infertility',
    },
    {
      id: '3',
      content: 'Polycystic ovarian syndrome (PCOS)',
    },
    {
      id: '4',
      content: 'Endometriosis',
    },
    {
      id: '5',
      content: 'Irregular ovulation cycles',
    },
    {
      id: '6',
      content: 'Male factor infertility',
    },
  ]
  return (
    <section className='gap indication-ivf why-choose-us'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-6 ms-auto ps-4'>
            <motion.h2
              className='heading-style'
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.7 }}
            >
              <span className='text-style'>Indications </span> For IVF?
            </motion.h2>
            <div className='listing-wrapper'>
              <motion.p
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.7 }}
              >
                There are many reasons why a couple may turn to IVF to achieve
                pregnancy. Your doctor will discuss your needs and unique
                situation with you prior to determining whether this is the
                right fertility solution for you. In general, the procedure may
                be recommended for women and couples experiencing any of the
                following:
              </motion.p>
              <ul>
                {list.map((item) => {
                  const { id, content } = item
                  return (
                    <motion.li
                      className='d-flex list'
                      key={id}
                      variants={fadeIn('down', 0.2)}
                      initial='hidden'
                      whileInView='show'
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

export default IndicationIVF
