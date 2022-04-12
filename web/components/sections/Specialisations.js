import React from "react";
import PropTypes from "prop-types";
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";
import {Heading, Text} from "../typography";
import Section from "../Section";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import MotionBox from "../MotionBox";
import {IntersectionObserver} from "../IntersectionObserver";

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  justify-content: space-between;
  @media (min-width: 410px) {
    grid-template-columns: repeat(3, min-content);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, min-content);
  }
`

const Item = styled.div`
  margin-bottom: 60px;
  text-align: center;
`

const Img = styled.img`
  margin-bottom: 12px;
`

function Specialisations({title, items}) {
  return (
    <Section id="specialisations">
      <IntersectionObserver id="specialisations">
        <MotionBox>
            <Container>
              <Row>
                <Col xs={12}>
                  <Heading style={{marginBottom: 45}} size="sm" bold>{title}</Heading>
                </Col>
                <Col xs={12}>
                  <Items>
                    {items.map((item, index) => (
                      <Item key={item._key}>
                        <Img src={item.backgroundImage && urlFor(item.backgroundImage).auto('format').fit('max').toString()} alt="specialisation image"/>
                        <Text size="sm" bold style={{whiteSpace: "nowrap"}}>{item.title}</Text>
                      </Item>
                    ))}
                  </Items>
                </Col>
              </Row>
            </Container>
        </MotionBox>
      </IntersectionObserver>
    </Section>
  )
}

Specialisations.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
}

export default Specialisations
