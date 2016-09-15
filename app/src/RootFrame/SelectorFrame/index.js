import React, { Component } from 'react'
import { observer } from 'mobx-react'
import {
  ProgressCircle,
  SegmentedControl,
  SegmentedControlItem,
  Text,
  View
} from 'react-desktop/macOs'

import GmbView from './GmbView/'
import style from './style.sass'

@observer
class SelectorFrame extends Component {
  render () {
    return (
      <View layout='vertical' width='100%' className={style.outerview}>
        <SegmentedControl box>
          {[
            this._renderItem(1, '/r/gmbwallpapers', <GmbView />),
            this._renderItem(2, '/r/wallpapers', <ProgressCircle size={25} />),
            this._renderItem(3, '/r/OffensiveWallpapers', <Text>Content 3</Text>)
          ]}
        </SegmentedControl>
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
