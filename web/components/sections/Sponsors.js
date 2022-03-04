import React from "react";
import PropTypes from "prop-types";
import {Col, Container, Row} from "react-bootstrap";
import Slider from "react-slick";
// eslint-disable-next-line import/no-unresolved
import imageUrlBuilder from "@sanity/image-url";
import {Heading} from "../typography";
import Section from "../Section";
import client from "../../client";
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

function NextArrow({className, onClick}) {
  return <ChevronRight className={className} onClick={onClick} />
}

function PrevArrow({className, onClick}) {
  return <ChevronLeft className={className} onClick={onClick}/>
}

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 3000,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};

function Sponsors({title, items}) {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12}>
            <Heading size="sm" bold textAlign="center" style={{marginBottom: 55}}>{title}</Heading>
          </Col>
          <Col xs={{offset:1,span:10}} sm={{offset:0,span:12}}>
            <Slider {...settings}>
              {
                items.map((item) => (
                  <div key={item._key}>
                    <img src={item.image && urlFor(item.image).auto('format').fit('max').toString()} alt=""/>
                  </div>
                ))
              }
            </Slider>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

Sponsors.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func
}

NextArrow.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
}

PrevArrow.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default Sponsors
