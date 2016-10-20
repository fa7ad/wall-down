import React from 'react'
import ReactDOM from 'react-dom'

import RootFrame from './RootFrame/'
import Store from './Store/'

ReactDOM.render(<RootFrame store={new Store()} />, document.querySelector('#root'))

