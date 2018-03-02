import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import base from './Rebase/Rebase'

ReactDOM.render(<App base={base} />, document.getElementById('root'))
registerServiceWorker()
