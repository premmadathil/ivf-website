import React, { useState, useEffect, Fragment } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import BigLogo from '../../assets/images/logo.png'
import RightLogo from '../../assets/images/right-logo.png'
import { pageLinks } from './data'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

const Header = () => {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      setShow(false)
    } else {
      setShow(true)
    }
    setLastScrollY(currentScrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  const pageTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <Fragment>
      <div className={`fixed-header ${show ? 'nav-visible' : 'nav-hidden'}`}>
        <Navbar expand='lg' className='bg-body-tertiary'>
          <Container fluid>
            <Navbar.Brand href='/'>
              <img src={BigLogo} alt='BigLogo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                {pageLinks.map((link) => {
                  const { id, text, href } = link
                  return (
                    <NavLink
                      onClick={pageTop}
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                      }
                      key={id}
                      to={href}
                    >
                      {text}
                    </NavLink>
                  )
                })}
              </Nav>
              <img src={RightLogo} alt='RightLogo' />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Fragment>
  )
}

export default Header
