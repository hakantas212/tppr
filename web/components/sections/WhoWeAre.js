import React from "react";
import PropTypes from "prop-types";
import {Col, Container, Row} from "react-bootstrap";
import {Heading, Text} from "../typography";
import Section from "../Section";
import SimpleBlockContent from "../SimpleBlockContent";
import MotionBox from "../MotionBox";
import {IntersectionObserver} from "../IntersectionObserver";

function WhoWeAre({title, description}) {
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
}

export default WhoWeAre
