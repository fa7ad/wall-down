import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { ProgressCircle } from 'react-desktop/macOs'

@observer
class GmbGrid extends Component {
  render () {
    return (
      <ProgressCircle size={25} />
    )
  }

  componentDidMount () {
  }
}

export default GmbGrid
