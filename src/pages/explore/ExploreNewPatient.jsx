import React from 'react'
import ExploreNewCard from '../../components/IVF-explore-card'
import icon01 from '../../assets/images/explore-new-icons/icon-1.png'
import icon02 from '../../assets/images/explore-new-icons/icon-2.png'
import icon03 from '../../assets/images/explore-new-icons/icon-3.png'
import icon04 from '../../assets/images/explore-new-icons/icon-4.png'
import icon05 from '../../assets/images/explore-new-icons/icon-5.png'
import icon06 from '../../assets/images/explore-new-icons/icon-6.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'

const ExploreNewPatient = () => {
  const exploreNewData = [
    {
      id: '001',
      heading: 'Fertility Consultation',
      image: icon01,
      content: [
        'Get a clear understanding of your fertility options and create your plan with an expert.',
        'For patients interested in building a family through conception services like IUI or IVF. During this consultation, you will meet at length with a fertility specialist to discuss fertility fundamentals and make a plan for your personal family-building journey.',
      ],
    },
    {
      id: '002',
      heading: 'Egg Freezing',
      image: icon02,
      content: [
        'Egg freezing is a 10-14 day cycle in which your ovaries are stimulated to grow mature eggs. The eggs are harvested during a short out-patient procedure and then frozen for future use.',
        'For those looking to preserve their fertility. This appointment is the first step to securing your future fertility through egg freezing. This appointment is typically followed by a full diagnostic work-up',
      ],
    },
    {
      id: '003',
      heading: 'Male Fertility Consultation',
      image: icon03,
      content: [
        'Get a clear understanding of your fertility options and create your plan with an expert.',
        'For male patients who wish to undergo a fertility evaluation. This includes a consultation, venipuncture, and a semen analysis.',
      ],
    },
    {
      id: '004',
      heading: 'Gynecology',
      image: icon04,
      content: [
        'TFC is now accepting new gynecology patients at this time. Patients who have previously seen a TFCgynecologist for a GYN Consultation or Annual Well Woman Exam may use the form below to schedule follow-up visits. One of our team members will be in touch with you at the earliest to schedule your appointment.',
      ],
    },
    {
      id: '005',
      heading: 'Pulse Assessment',
      image: icon05,
      content: [
        'Check-in with an expert on your reproductive potential. This is for patients interested in learning more about their fertility.',
      ],
    },
    {
      id: '006',
      heading: 'Egg Freezing Consultation',
      image: icon06,
      content: [
        'For those looking to preserve their fertility. Get a clear understanding of your fertility preservation options and create your plan with an expert.',
      ],
    },
  ]
  return (
    <section className='gap explore-new'>
      <header className='text-center'>
        <motion.h2
          className='heading-style'
          variants={fadeIn('right', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
        >
          <span className='text-style'>Explore</span> New Patient Visits
        </motion.h2>
      </header>
      <div className='container'>
        <motion.div className='row mt-4'>
          {exploreNewData.map((list, index) => {
            return <ExploreNewCard key={index} data={list} index={index} />
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default ExploreNewPatient
