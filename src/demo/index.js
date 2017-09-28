import React, { Component } from 'react'
import { Button } from 'components/index'
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <Button>Hello World!</Button>
      </div>
    )
  }
}
export default styled(App)`
  padding: 1rem;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
