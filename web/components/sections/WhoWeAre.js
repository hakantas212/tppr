import React from 'react'
import PropTypes from 'prop-types'
import {Col, Container, Row} from 'react-bootstrap'
import {Heading, Text} from '../typography'
import imageUrlBuilder from '@sanity/image-url'
import Cta from '../Cta'
import Section from '../Section'
import SimpleBlockContent from '../SimpleBlockContent'
import MotionBox from '../MotionBox'
import {IntersectionObserver} from '../IntersectionObserver'
import client from '../../client.js'
import styled from "styled-components";
import Style from './WhoWeAre.module.css'

const Img = styled.img`
  margin-left:auto
`

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

function WhoWeAre({title, description, background, button,items}) {
  const SectionStyle = {
    backgroundImage: `url(${urlFor(background).auto('format').fit('max').toString()})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
  }
  return (
    <Section backgroundColor="#27324F" id="woweare" style={SectionStyle}>
      <IntersectionObserver id="woweare">
        <MotionBox>
          <Container className={Style.container}>
            <Row>
              <Col lg={{order: 'first', span: 6}} xs={12} className={Style.textColumn}>
                <Heading size="sm" bold color="white">
                  {title}
                </Heading>
                <Text color="white" size="md">
                  <SimpleBlockContent blocks={description} />
                </Text>
                <Cta {...button} />
              </Col>
              <Col lg={{order: 'last', span: 6}} xs={{order: 'first', span: 12}} className={Style.imageColumn}>
                <Img src="hero_logo_special.png" alt="hero_logo" />
              </Col>
            </Row>
            <Row style={{alignItems:'center',justifyContent:'space-between',padding:'0vw 8vw'}}>
              {
                items?.map((item,index)=>(
                  <Col key={`sponsorlogo-${index}`} xl={2} lg={3} md={4} sm={6} style={{marginTop:'3rem',textAlign:'center'}}>
                    <img src={urlFor(item).auto('format').fit('max').toString()}/>
                    </Col>
                ))
              }
            </Row>
          </Container>
        </MotionBox>
      </IntersectionObserver>
    </Section>
  )
}

WhoWeAre.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  background: PropTypes.object,
  button: PropTypes.object,
  items:PropTypes.arrayOf(PropTypes.object)
}

export default WhoWeAre
