import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { SegmentedControl, SegmentedControlItem, View } from 'react-desktop/macOs'

import GmbView from './GmbView/'
import WallsView from './WallsView/'
import OwallView from './OwallView/'

import style from './style'

@observer
class SelectorFrame extends Component {
  render () {
    return (
      <View layout='vertical' width='100%' className={style.outerview}>
        <SegmentedControl box>{[
          this._renderItem(1, '/r/gmbwallpapers', <GmbView />),
          this._renderItem(2, '/r/wallpapers', <WallsView />),
          this._renderItem(3, '/r/OffensiveWallpapers', <OwallView />)
        ]}</SegmentedControl>
      </View>
    )
  }

  _renderItem = (key, title, content) => {
    const { store } = this.props
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

export default SelectorFrame
