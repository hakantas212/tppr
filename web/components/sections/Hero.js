import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import {Col, Container, Row} from "react-bootstrap";
import {motion} from "framer-motion";
import styled from "styled-components";
import Particles from "react-tsparticles";
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'
import ChevronDown from "../icons/ChevronDown";
import {jump} from "../../utils/jump";
import {IntersectionObserver} from "../IntersectionObserver";

const HeroWrapper = styled.div`
  height: 101vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const HeroContent = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 162px;
`

const Heading = styled.h1`
  color: white;
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 53px;
  @media (max-width: 992px) {
    font-size: 24px;
  }
`

const Img = styled.img`
  margin-bottom: 53px;
`

const ScrollDown = styled.div`
  position: absolute;
  margin-bottom: 40px;
  left: 50%;
  bottom: 0;
  margin-left: -25px;
  height: 50px;
  width: 50px;
`

const options = {
  fullScreen: {
    enable: false
  },
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  interactivity: {
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.1,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff"
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.1,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.1,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
}

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

function Hero({heading, backgroundImage, image, tagline, ctas}) {
  const style = backgroundImage
    ? {
        backgroundImage: `url("${urlFor(backgroundImage).width(2000).auto('format').url()}")`,
      }
    : {}

  return (
    <HeroWrapper style={style}>
      <IntersectionObserver id="home">
          <Container>
            <Row>
              <Col>
                <HeroContent>
                  {image && <Img src={urlFor(image).auto('format').fit('max').toString()} alt=""/>}
                  {heading && <Heading dangerouslySetInnerHTML={{__html: heading}} />}
                  <div>{tagline && <SimpleBlockContent blocks={tagline} />}</div>
                  {ctas && (
                    <div className="text-center">
                      {ctas.map((cta) => (
                        <Cta {...cta} key={cta._key} />
                      ))}
                    </div>
                  )}
                  <Particles id="header_particles" options={options} style={{position: "absolute", top: 0, left: 0}} />
                </HeroContent>
              </Col>
            </Row>
          </Container>
        <ScrollDown
          as={motion.div}
          animate={{y: 20, opacity: [0, 1 ,0]}}
          transition={{repeat: Infinity, duration: 2}}
        >
          <a
            href="#"
            className="d-flex justify-content-center align-items-center h-100 w-100"
            onClick={(e) => {
              e.preventDefault();
              jump("specialisations");
            }}
          >
            <ChevronDown />
          </a>
        </ScrollDown>
      </IntersectionObserver>
    </HeroWrapper>
  )
}

Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  image: PropTypes.object,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object),
}

export default Hero
