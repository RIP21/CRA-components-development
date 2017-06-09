Set of the reusable components made of `semantic-ui-react` as a base

100% compatible with projects bootstrapped with create-react-app since 
was transpiled using `react-app` babel preset.

## How to install:
```bash
npm i generic-components --save
```
or:
```bash
yarn add generic-components
```
if you use Yarn instead of the npm.

## Usage:
```javascript
import React, { Component } from "react";
import Button from "generic-components/Button";
// supported too but not recommended
// import { Button } from "generic-components"; 

class App extends Component {
  render() {
    return (
      <div>
        <Button>Hello World!</Button>
      </div>
    );
  }
}
```

## [Documentation styleguide]()




