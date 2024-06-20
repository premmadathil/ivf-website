import React from 'react'
import { useNavigate } from 'react-router-dom'
import ServiceCard from '../../components/servce-card/ServiceCard'

import Tablets from '../../assets/images/tablets.png'
import Insemini from '../../assets/images/insemination.png'
import InVitro from '../../assets/images/in-vitro.png'
import FertilitySurgery from '../../assets/images/fertility-surgery.png'
import MaleInfect from '../../assets/images/male-infection.png'
import ReProduct from '../../assets/images/re-productive.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'

const OurServiceSection = () => {
  const serviceCardData = [
    {
      id: '1',
      image: Tablets,
      serviceName: 'Fertility medication',
    },
    {
      id: '2',
      image: Insemini,
      serviceName: 'Intrauterine Insemination',
    },
    {
      id: '3',
      image: InVitro,
      serviceName: 'In vitro fertilization',
    },
    {
      id: '4',
      image: FertilitySurgery,
      serviceName: 'Fertility surgery',
    },
    {
      id: '5',
      image: MaleInfect,
      serviceName: 'Male Infertility treatment',
    },
    {
      id: '6',
      image: ReProduct,
      serviceName: 'Regenerative &Reproductive Immunology Medicine',
    },
  ]
  const navigate = useNavigate()

  const clickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    navigate('/our-services')
  }
  return (
    <section className='gap our-service text-center'>
      <div className='container'>
        <motion.h2
          className='heading-style'
          variants={fadeIn('down', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
        >
          <span className='text-style'>Our </span>
          Services
        </motion.h2>
        <motion.p
          className='col-xl-9 mx-auto'
          variants={fadeIn('right', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
        >
          At Trivandrum Fertility & IVF CenterTFC , we offer a full range of
          fertility services tailored to fit your needs. The exact evaluation
          and treatment will vary among individuals.Your treatment is also
          influenced by any previous evaluations and treatments you may have
          had.
        </motion.p>

        <div className='card-section'>
          <div className='row'>
            {serviceCardData.map((item, index) => {
              const { id, image, serviceName } = item
              return (
                <motion.div
                  key={id}
                  className='col-lg-4 d-flex'
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
                  <ServiceCard
                    image={image}
                    isService={true}
                    serviceName={serviceName}
                    delay={index * 0.1}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
        <motion.p
          className='col-xl-9 mx-auto mt-3'
          variants={fadeIn('down', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
        >
          Our goal is to provide you with diagnostic and therapeutic options
          customized for you, as an individual or couple, in order to maximize
          your potential for building your family.
        </motion.p>
        <motion.button
          className='btn btn-sm ps-4 pe-4 btn-primary mt-3'
          variants={fadeIn('down', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
          onClick={clickHandler}
        >
          More Services
        </motion.button>
      </div>
    </section>
  )
}

export default OurServiceSection