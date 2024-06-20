import React from 'react'
import IVFSwiper from '../../components/IVF-Swiper'
import clientImg from '../../assets/images/testimonail_01.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'

const ClientTestimonials = () => {
  const testimonialData = [
    {
      id: '001',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      name: 'john Vargees',
      image: clientImg,
    },
    {
      id: '002',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      name: 'john Vargees',
      image: clientImg,
    },
    {
      id: '003',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      name: 'john Vargees',
      image: clientImg,
    },
  ]
  return (
    <section className='gap teztimonials'>
      <div className='container-fluid text-center'>
        <motion.h2
          className='heading-style'
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.7 }}
        >
          <span className='text-style'>What Our</span> Clients Say
        </motion.h2>
      </div>
      <div className='container'>
        <div className='testimonial-wrapper'>
          <IVFSwiper count={3} cards={testimonialData} isTestimonial={true} />
        </div>
      </div>
    </section>
  )
}

export default ClientTestimonials
