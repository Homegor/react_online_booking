import React from "react"
import PropTypes from "prop-types"

import Accordion from "react-bootstrap/Accordion"

const AccordionField = ({ title, index, children }) => {
  return (
    <div>
      <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey={index}>
          <Accordion.Header>{title}</Accordion.Header>
          <Accordion.Body>{children}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

AccordionField.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default AccordionField
