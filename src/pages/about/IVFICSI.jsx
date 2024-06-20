import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'

const IVFICSI = () => {
  return (
    <section className='gap ivficsi'>
      <div className='container'>
        <header className='text-center'>
          <motion.h2
            className='header-style mb-5'
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.7 }}
          >
            <span className='text-style'>IVF Or</span> ICSI?
          </motion.h2>
        </header>
        <motion.p
          className='text-center'
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.7 }}
        >
          Majority of our patients are recommended to do ICSI as it enables us
          to receive more quality embryos. Both of these procedures have similar
          rates and outcomes for achieving successful pregnancies, so neither is
          superior over the other, but one may be better suited for different
          situations.
        </motion.p>
        <motion.p
          className='text-center'
          variants={fadeIn('down', 0.6)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.7 }}
        >
          The main difference between the two procedures is how the sperm is
          introduced to the egg. With IVF, the sperm and egg are added in a dish
          together and allowed to spontaneously fertilize. With ICSI, the sperm
          is directly injected into the egg with a tiny needle under a
          microscope. With either procedure, there is an incubation period to
          allow the embryo to mature before being transplanted.
        </motion.p>
      </div>
    </section>
  )
}

export default IVFICSI
