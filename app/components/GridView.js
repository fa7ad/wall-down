import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Flexbox from 'flexbox-react';
import { SegmentedControl, SegmentedControlItem, Text } from 'react-desktop/macOs';

import GmbGrid from './GmbGrid';

@observer
class GridView extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Flexbox flexGrow={19} flexDirection="column">
        <SegmentedControl
          box
          margin="0 15px"
        >
          {this.renderItems()}
        </SegmentedControl>
      </Flexbox>
    );
  }

  renderItems = () => {
    return [
      this.renderItem(1, '/r/gmbwallpapers', <GmbGrid />),
      this.renderItem(2, '/r/wallpapers', <Text>Content 2</Text>),
      this.renderItem(3, '/r/OffensiveWallpapers', <Text>Content 3</Text>)
    ];
  }

  renderItem = (key, title, content) => {
    const {store} = this.props;
    return (
      <SegmentedControlItem
        key={key}
        title={title}
        selected={store.selected === key}
        onSelect={() => {store.selected = key;}}
      >
        {content}
      </SegmentedControlItem>
    );
  }
}

export default GridView;