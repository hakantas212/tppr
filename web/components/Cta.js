import React from 'react'
import PropTypes from 'prop-types'
import {Button} from "react-bootstrap";
import {jump} from "../utils/jump";

function cta({title, link}) {
  return <Button onClick={() => jump(link)} variant="primary">{title}</Button>
}

cta.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default cta
