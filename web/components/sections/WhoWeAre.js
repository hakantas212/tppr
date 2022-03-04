import React from "react";
import PropTypes from "prop-types";
import {Col, Container, Row} from "react-bootstrap";
import {Heading, Text} from "../typography";
import imageUrlBuilder from '@sanity/image-url'
import Cta from '../Cta'
import Section from "../Section";
import SimpleBlockContent from "../SimpleBlockContent";
import MotionBox from "../MotionBox";
import {IntersectionObserver} from "../IntersectionObserver";
import styled from "styled-components";
import client from '../../client'

const Img = styled.img`
  margin-bottom: 53px;
`
function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

function WhoWeAre({title, description, background, button}) {
  return (
    <Section backgroundColor="#27324F" id="woweare">
      <IntersectionObserver id="woweare">
        <MotionBox>
          <Container>
            <Row>
              <Col md={6}>
                <Heading size="sm" bold color="white" style={{marginBottom: 46}}>{title}</Heading>
                <Text color="white" size="md">
                  <SimpleBlockContent blocks={description} />
                </Text>
                <Img src={urlFor(background).auto('format').fit('max').toString()} alt=""/>
                <Cta {...button} />
              </Col>
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
  button: PropTypes.obkect
}

export default WhoWeAre
