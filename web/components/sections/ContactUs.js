import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Button, Col, Container, Form, Row} from 'react-bootstrap'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'
import {Heading, Text} from '../typography'
import Section from '../Section'
import client from '../../client'
import {IntersectionObserver} from '../IntersectionObserver'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const SocialMediaList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  > li {
    margin-right: 42px;
    &:last-child {
      margin-right: 0;
    }
  }
`

const Img = styled.img`
  margin-bottom: 50px;
`

const Link = styled.a`
  text-decoration: none;
`

function ContactUs({title, email, phone, media}) {
  const [_email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    console.log({
      email: _email,
      name: name,
      message: message,
    })
  }

  return (
    <Section id="contactus">
      <IntersectionObserver id="contactus">
        <Container>
          <Row className="align-items-center">
            <Col xs={12}>
              <Heading size="sm" bold style={{marginBottom: 64}}>
                {title}
              </Heading>
            </Col>
            <Col lg={{order: 1, span: 4}} xs={{order: 3, span: 12}} className="mb-5 mb-lg-0">
              <img className="w-100" src="contact_us.png" alt="contact_us" />
            </Col>
            <Col
              lg={{order: 2, span: 4}}
              xs={{order: 4, span: 12}}
              className="text-center mb-5 mb-lg-0"
            >
              <Img src="hero_logo.svg" alt="hero_logo" />
              <Link href={`mailto:${email}`}>
                <Text className="mb-4" color="#A0A3BD">
                  {email}
                </Text>
              </Link>
              <Link href={`tel:${phone}`}>
                <Text className="mb-4" color="#A0A3BD">
                  {phone}
                </Text>
              </Link>
              <SocialMediaList>
                {media
                  ? media.map((entity) => (
                      <li key={entity._key}>
                        <a href={entity.link} target="_blank" rel="noreferrer">
                          <img
                            src={urlFor(entity.image).auto('format').fit('max').toString()}
                            alt={entity.title}
                          />
                        </a>
                      </li>
                    ))
                  : ''}
              </SocialMediaList>
            </Col>
            <Col lg={4} xs={{order: 2, span: 12}}>
              <Form onSubmit={sendEmail}>
                <Form.Group className="mb-4" controlId="formBasicName">
                  <Form.Control
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    size="lg"
                    placeholder="Name"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Control
                    value={_email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    size="lg"
                    placeholder="E-Mail"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicMessage">
                  <Form.Control
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    as="textarea"
                    size="lg"
                    rows={3}
                    placeholder="Message"
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="text-white"
                    style={{marginBottom: '1rem'}}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </IntersectionObserver>
    </Section>
  )
}

ContactUs.propTypes = {
  title: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  media: PropTypes.array,
}

export default ContactUs
