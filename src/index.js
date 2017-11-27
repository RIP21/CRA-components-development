import React from 'react'
import ReactDOM from 'react-dom'
import App from './demo'
import registerServiceWorker from './demo/registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
