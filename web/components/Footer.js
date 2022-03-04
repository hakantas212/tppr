import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'next/router'
import {Col, Container, Row} from "react-bootstrap";
import SVG from "react-inlinesvg";
import Section from "./Section";
import {Text} from "./typography";
import Style from './Footer.module.css'

function Footer({logo}) {
  const renderLogo = (logo) => {
    if (!logo || !logo.asset) {
      return null
    }

    if (logo.asset.extension === 'svg') {
      return <SVG src={logo.asset.url} />
    }

    return <img src={logo.asset.url} alt={logo.title} />
  }

  return (
    <Section backgroundColor="#27324F">
      <Container>
        <Row className={Style.footerRow}>
          <Col md={6} xs={12}>{renderLogo(logo)}</Col>
          <Col md={6} xs={12} className={Style.reservedContainer}>
            <Text size="md" color="white">All rights reserved.</Text>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

Footer.propTypes = {
  logo: PropTypes.shape({
    asset: PropTypes.shape({
      url: PropTypes.string,
      extension: PropTypes.string,
    }),
    logo: PropTypes.string,
    title: PropTypes.string,
  }),
}

export default withRouter(Footer)
