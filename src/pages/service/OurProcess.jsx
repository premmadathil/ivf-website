import React from 'react'
import IVFCard from '../../components/card'

import Fertility from '../../assets/images/fertility.png'
import Treatment from '../../assets/images/treatment.png'
import Enhancing from '../../assets/images/enhancing.png'
import MaleInfect from '../../assets/images/maleInfect.png'
import ReGenerate from '../../assets/images/re-generate.png'
import ReProduct from '../../assets/images/re-product.png'
import Comprehencive from '../../assets/images/comprehensive.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'
const OurProcess = () => {
  const cardData = [
    {
      id: '1',
      image: Fertility,

      heading: 'Fertility evaluation and Testing',
      content:
        'Our team of fertility specialist can evaluate your situation, conduct test to determine if there is an underlying cause of your infertility, and recommend a range of infertility treatments to help you conceive and have a baby',
    },
    {
      id: '2',
      image: Treatment,
      heading: 'Treatment for all Medical condition Related to Infertility',
      content:
        'If you have polycystic ovary syndrome ,fibroids, or endometriosis our Reproductive team will recommend the appropriate treatment to improve your fertility',
    },
    {
      id: '3',
      image: Enhancing,
      heading: 'Fertility enhancing Surgical procedures',
      content:
        "Our theater is equipped with Laparoscopy and hysteroscopic surgeryInstrumentation from  Karl Storz Endoskope, Tuttlingen, Germany. Ovarian cysts can also interfere with fertility, and laparoscopy surgery can remove them. Tubal blockages can prevent the fertilisation of the egg, and laparoscopy surgery can diagnose tubal blockage and may help in removing certain blockages. Pelvic anatomy can be restored in Endometriosis and fertility improves. Hysteroscopy the preferred method of treatment of Asherman's syndrome, intrauterine septa, removal of foreign bodies, polyps and submucus myomas.",
    },
    {
      id: '4',
      image: MaleInfect,
      heading: 'Male Infertility',
      content:
        'Medical and Surgical treatment including surgical retrieval of sperms from the testis',
    },
    {
      id: '5',
      image: ReGenerate,
      heading: 'Regenerative Medicine',
      content:
        "The regenerative medicine technique in POR is based on obtaining the patient's own platelet rich plasma from her blood sample. Once the plasma has been prepared and enriched with growth factors, it is injected into her ovaries. This is a process with no allergic reactions, as it is an autologous treatment.",
    },
    {
      id: '6',
      image: ReProduct,
      heading: 'Reproductive Immunology',
      content:
        'Adjuvant immunotherapy treatments in IVF aim to improve the outcome of assisted reproductive technology (ART) in both the general ART population as well as in subgroups such as patients with recurrent miscarriage or implantation failure',
    },
    {
      id: '7',
      image: Comprehencive,
      heading: 'Comprehensive Stress reduction Programme',
      content:
        'Infertility can cause anxiety and put stress on relationships .Our team can help you with this process through consultations , Couple and individual support',
    },
  ]
  return (
    <section className='gap our-process'>
      <div className='container'>
        <header className='text-center'>
          <motion.h2
            className='heading-style'
            variants={fadeIn('up', 0.2)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
          >
            <span className='text-style'>Our</span> Process
          </motion.h2>
        </header>
        <div className='card-list'>
          {cardData.map((item, index) => {
            const { image, heading, content, id } = item
            return (
              <IVFCard
                key={id}
                image={image}
                heading={heading}
                content={content}
                isHome={false}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurProcess
