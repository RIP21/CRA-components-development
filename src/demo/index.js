import React from 'react'
import PT from 'prop-types'
import { Button } from 'components'
import styled from 'styled-components'
import 'normalize.css/normalize.css'

const App = ({ className }) => (
  <div className={className}>
    <Button>Hello World!</Button>
  </div>
)

App.propTypes = {
  className: PT.string,
}

App.defaultProps = {
  className: '',
}

export default styled(App)`
  padding: 1rem;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
