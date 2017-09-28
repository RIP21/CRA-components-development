import React from 'react'
import PT from 'prop-types'
import { Button as SButton } from 'semantic-ui-react'

/**
 * Our wrapper component around semantic-ui button
 * For more props visit
 * [semantic-ui-button](https://react.semantic-ui.com/elements/button#button-example-button)
 */
const Button = ({ children, ...rest }) => (
  <SButton {...rest}>{children}</SButton>
)

Button.propTypes = {
  /** Button label */
  children: PT.any,
  ...SButton.propTypes,
}

export default Button
