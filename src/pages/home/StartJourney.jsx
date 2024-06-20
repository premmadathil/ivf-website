import React, { Fragment, useState } from 'react'
import smallImg from '../../assets/images/profile.png'
import thinking from '../../assets/images/thinking_sad.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'
import { ToastContainer, toast } from 'react-toastify'
const StartJourney = () => {
  const [values, setValues] = useState({ name: '', phone: '', email: '' })
  const [errors, setErrors] = useState({ name: false, phone: false })

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/
    return phoneRegex.test(phone)
  }

  const fomSubmit = (e) => {
    e.preventDefault()
    const newErrors = {
      name: !values.name,
      phone: !validatePhoneNumber(values.phone),
    }
    if (!newErrors.name && !newErrors.phone) {
      console.log('form submitted', values)
      toast.success('Thank you')
      setValues({ name: '', phone: '', email: '' })
      setErrors({ name: false, phone: false })
    } else {
      if (values.name === '') {
        toast.error('Please Enter Name.')
      } else if (values.phone === '' || newErrors.phone) {
        toast.error('Enter Phone Number. (Must be 10 digits)')
      }
      setErrors(newErrors)
    }
  }

  const formChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setValues({ ...values, [name]: value })

    if (errors[name]) {
      setErrors({ ...errors, [name]: false })
    }
  }

  return (
    <Fragment>
      <ToastContainer position='top-center' autoClose={3000} theme='dark' />
      <section className='gap pt--0 start-journey'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-xl-4 journey-card'>
              <motion.h2
                className='heading-style text-white'
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.7 }}
              >
                Why am i not getting pregnant ?
              </motion.h2>
              <motion.div
                className='card prgn-card'
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.7 }}
              >
                <div className='card-title'>
                  <h4>Dive into the Details with</h4>
                </div>
                <div className='card-details'>
                  <img src={smallImg} alt='smallImg' />
                  <div className='contetnt'>
                    <h2>Dr Amal Calist B</h2>
                    <p>
                      Former Chief Consultant Fertility Clinic SAT Hospital
                      Medical college Trivandrum
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className='col-xl-3 hiden-card journey-card'>
              <motion.img
                src={thinking}
                className='img--fluid thinking'
                alt='thinking'
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.7 }}
              />
            </div>
            <motion.div
              className='col-xl-5'
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.7 }}
            >
              <div className='start-journey-form-wrap'>
                <h2>Start your journey.</h2>
                <p>
                  At Trivandrum Fertility Center, PRIMS Hospital, We offer a
                  full-suite of fertility services, including conception care,
                  egg freezing, fertility testing and wellness & consultant
                  services.
                </p>

                <form className='form-group journey-form' onSubmit={fomSubmit}>
                  <input
                    type='text'
                    placeholder='Name (Required)'
                    className={
                      errors.name
                        ? 'form-control mb-2 is-error'
                        : 'form-control mb-2'
                    }
                    name='name'
                    value={values.name}
                    onChange={formChange}
                  />
                  <input
                    type='email'
                    placeholder='Email'
                    className='form-control mb-2'
                    name='email'
                    value={values.email}
                    onChange={formChange}
                  />
                  <input
                    type='Phone'
                    placeholder='Phone (Required)'
                    className={
                      errors.phone
                        ? 'form-control mb-2 is-error'
                        : 'form-control mb-2'
                    }
                    name='phone'
                    value={values.phone}
                    onChange={formChange}
                  />
                  {errors.phone && (
                    <span className='text-error'>Phone must be 10 digits</span>
                  )}
                  <div>
                    <button className='btn btn-sm btn-primary mt-4 ps-3 pe-3'>
                      Send Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default StartJourney
