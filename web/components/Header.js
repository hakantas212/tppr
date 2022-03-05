import React, {useContext, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'next/router'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import {useWindowScroll} from 'react-use'
import {jump} from '../utils/jump'
import {GlobalContext} from './GlobalStore'
import Style from './Header.module.css'
import client from '../client.js'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

const urlFor = (source) => {
  return builder.image(source)
}

const BurgerButtonWrapper = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
`

const BurgerButton = styled(Button)`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 35px;
  height: 35px;
`

const BurgerButtonIcon = styled.div`
  cursor: pointer;
  border-radius: 1px;
  height: 2px;
  width: 35px;
  background: white;
  position: absolute;
  left: 0;
  top: 50%;
  display: block;
  content: '';

  &:before,
  &:after {
    cursor: pointer;
    border-radius: 1px;
    height: 2px;
    width: 35px;
    background: white;
    position: absolute;
    left: 0;
    top: 50%;
    display: block;
    content: '';
    transition: all 0.5s ease-in-out;
  }

  &:before {
    top: -10px;
  }

  &:after {
    top: 10px;
  }

  ${({open}) =>
    open &&
    `
    background: transparent;
    &::before,
    &::after {
      top: 0;
    }
    &::after {
      transform: rotate(-135deg);
    }
    &::before {
      transform: rotate(135deg);
    }
  `}
`

function Header({router, title, navItems, logo, darkLogo}) {
  const [open, setOpen] = useState(false)
  const {state} = useContext(GlobalContext)
  const {y} = useWindowScroll()
  const [headerBg,setHeaderBg] = useState(Style.dark_navbar)

  useEffect(()=>{
    if(!open) setTimeout(()=>{setHeaderBg(Style.dark_navbar)},500)
    else setHeaderBg(Style.open_navbar)
  },[open])

  const renderLogo = (logo) => {
    if (!logo || !logo.asset) {
      return null
    }

    if (logo.asset._type === 'reference') {
      return <img src={urlFor(logo.asset._ref)} alt={logo.title} />
    }

    if (logo.asset.extension === 'svg') {
      return <SVG src={logo.asset.url} />
    }

    return <img src={logo.asset.url} alt={logo.title} />
  }

  const responsiveBackground = () => {
    if (open) return Style.open_navbar
    return Style.dark_navbar
  }

  return (
    <Navbar
      className={`p-0 m-0 ${headerBg}`}
      style={!open ? {borderBottomLeftRadius:"0px"} : {}}
      expand="lg"
      expanded={open}
      bg={y > 100 && !open && 'dark'}
    >
      <Container>
        <Navbar.Brand
          href="#"
          onClick={(e) => {
            e.preventDefault()
            jump('__next')
          }}
        >
          {renderLogo(open ? darkLogo : logo)}
        </Navbar.Brand>
        <BurgerButtonWrapper className="d-lg-none d-block" style={{marginRight:'-35px'}}>
          <BurgerButton variant="link" className="position-absolute" onClick={() => setOpen(!open)}>
            <BurgerButtonIcon open={open} />
          </BurgerButton>
        </BurgerButtonWrapper>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link
              active={state.id === 'home' && state.inView}
              href="#"
              onClick={() => {
                jump('__next')
                setOpen(false)
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#"
              active={state.id === 'specialisations' && state.inView}
              onClick={() => {
                jump('specialisations')
                setOpen(false)
              }}
            >
              Specialisations
            </Nav.Link>
            <Nav.Link
              href="#"
              active={state.id === 'services' && state.inView}
              onClick={() => {
                jump('services')
                setOpen(false)
              }}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#"
              active={state.id === 'woweare' && state.inView}
              onClick={() => {
                jump('woweare')
                setOpen(false)
              }}
            >
              Who We Are?
            </Nav.Link>
            <Button
              variant={'primary'}
              active={state.id === 'contactus' && state.inView}
              onClick={() => {
                jump('contactus')
                setOpen(false)
              }}
            >
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Header.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.shape({
      slug: PropTypes.string,
    }),
    events: PropTypes.any,
  }),
  title: PropTypes.string,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  logo: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
      _type: PropTypes.string,
      url: PropTypes.string,
      extension: PropTypes.string,
    }),
    logo: PropTypes.string,
    title: PropTypes.string,
  }),
  darkLogo: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
      _type: PropTypes.string,
      url: PropTypes.string,
      extension: PropTypes.string,
    }),
    darkLogo: PropTypes.string,
    title: PropTypes.string,
  }),
}

export default withRouter(Header)
