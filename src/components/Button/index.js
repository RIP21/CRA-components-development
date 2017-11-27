import React from 'react'
import PT from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 0.5em 1em;
  background-color: #007878;
  color: white;
  font-family: Trebuchet MS, sans-serif;
  border-radius: 1em;
  font-size: 16px;
`

/**
 * A regular button
 */
const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
)

Button.propTypes = {
  /** Button label */
  children: PT.string.isRequired,
}

export default Button
