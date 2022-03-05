import React from 'react'
import PropTypes from 'prop-types'
import {Col, Container, Row} from 'react-bootstrap'
import styled from 'styled-components'
import {Heading, Text} from '../typography'
import Section from '../Section'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import MotionBox from '../MotionBox'
import {IntersectionObserver} from '../IntersectionObserver'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 330px;
  border-radius: 20px;
  padding: 30px 34px;
  background-image: url(${({backgroundImage}) => backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  :before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), rgba(25, 34, 66, 1));
  }

  & ul{
    height:0px !important;
    overflow:hidden !important;
    z-index:1;
    transition: all 0.3s;
  }

  &:hover ul{
    height:200px !important;
  }
`

function Services({title, items}) {
  return (
    <Section id="services">
      <IntersectionObserver id="services">
        <MotionBox>
          <Container>
            <Row>
              <Col xs={12}>
                <Heading size="sm" bold>
                  {title}
                </Heading>
              </Col>
              <Col xs={12}>
                <Row>
                  {items.map((item, index) => (
                    <Col key={item._key} md={6} className="mb-4 mx-auto">
                      <Card
                        backgroundImage={urlFor(item.backgroundImage)
                          .auto('format')
                          .fit('max')
                          .toString()}
                      >
                        <Text size="sm" bold color="white">
                          {item.title}
                        </Text>
                        {item.innerListItems && <ul style={{listStyle:'none',marginTop:'1rem'}}>
                          {item.innerListItems?.map((_item, index) => (
                            <li key={`inneritem-${index}-${_item}`}>
                              <Text
                                size="sm"
                                bold
                                color="white"
                              >
                                {_item}
                              </Text>
                            </li>
                          ))}
                        </ul>}
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </MotionBox>
      </IntersectionObserver>
    </Section>
  )
}

Services.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
}

export default Services
