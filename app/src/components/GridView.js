import React, {Component} from 'react'
import {observer} from 'mobx-react'
import Flexbox from 'flexbox-react'
import {
  ProgressCircle,
  SegmentedControl,
  SegmentedControlItem,
  Text,
  View
} from 'react-desktop/macOs'

import GmbGrid from './GmbGrid'

@observer
class GridView extends Component {
  render () {
    return (
      <Flexbox flexGrow={19} flexDirection='column'>
        <SegmentedControl box>
          {this.renderItems()}
        </SegmentedControl>
      </Flexbox>
    )
  }

  renderItems = () => {
    return [
      this.renderItem(1, '/r/gmbwallpapers', <GmbGrid />),
      this.renderItem(2, '/r/wallpapers', <ProgressCircle size={25} />),
      this.renderItem(3, '/r/OffensiveWallpapers', <Text>Content 3</Text>)
    ]
  }

  renderItem = (key, title, content) => {
    const {store} = this.props
    return (
      <SegmentedControlItem
        key={key}
        title={title}
        selected={store.selected === key}
        onSelect={() => { store.selected = key }}
      >
        <View horizontalAlignment='center' verticalAlignment='center'>
          {content}
        </View>
      </SegmentedControlItem>
    )
  }
}

export default GridView
