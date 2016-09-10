import React, { Component } from 'react'
import {observer} from 'mobx-react'
import {ProgressCircle} from 'react-desktop/macOs'

// import GetReddit from './GetReddit'

@observer
class GmbGrid extends Component {
  render () {
    return (
      <ProgressCircle size={25} />
    )
  }

  componentDidMount () {
    // let aX = new GetReddit('gmbwallpapers')
    // aX.getPosts().then(posts => posts.map(post => console.log(post.download)));
  }
}

export default GmbGrid
