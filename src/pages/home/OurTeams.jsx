import React from 'react'
import { motion } from 'framer-motion'
import teamOne from '../../assets/images/teams/amal.jpg'
import teamTwo from '../../assets/images/teams/vijesh.jpg'
import IVFSwiper from '../../components/IVF-Swiper'
import { fadeIn } from '../../varients'

const OurTeams = () => {
  const sliderData = [
    {
      id: '001',
      name: 'Dr. Amal Calist B',
      image: teamOne,
      designation: [
        'MBBS,MD (Obstetrics & gynaecology)',
        'DGO, MSc CLI / EMB Leed united kingdom,',
        'PHD in Reproductive Medicine & IVF Germany',
      ],
    },
    {
      id: '002',
      name: 'Dr. Amal Calist B',
      image: teamTwo,
      designation: ['Head Embryology', 'Team PRIMS'],
    },
  ]
  return (
    <section className='gap our-teams'>
      <div className='container-fluid text-center'>
        <motion.h2
          className='heading-style mb-5'
          variants={fadeIn('left', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
        >
          <span className='text-style'>Our</span> Team
        </motion.h2>
      </div>
      <div className='teams-content container'>
        <div className='row'>
          <div className='col-xl-4'>
            <motion.h2
              variants={fadeIn('right', 0.2)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
            >
              Behind every success is an expert team
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.2)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
            >
              An expert team including an experienced doctor, embryologist and a
              personal IVF Coordinator has your health as its first priority and
              works to ensure the best possible results.
            </motion.p>
          </div>
          <div className='col-xl-8'>
            <motion.div
              className='image-wrapper'
              variants={fadeIn('down', 0.2)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
            >
              <IVFSwiper count={2} cards={sliderData} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeams
