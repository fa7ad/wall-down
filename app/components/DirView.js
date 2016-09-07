import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { observer } from 'mobx-react';
import { Text } from 'react-desktop/macOs';
import { MdCloudDownload } from 'react-icons/lib/md';

@observer
class DirView extends Component {
  constructor() {
    super();
  }

  render() {
    const { store } = this.props;
    return (
      <Flexbox
        alignItems="flex-start"
        padding="10px 0 15px 0"
        flexDirection="row"
        justifyContent="center"
      >
        <button onClick={this.chooseDir}><MdCloudDownload /> Choose folder</button>
        <Text padding="0 5px">{store.directory}</Text>
      </Flexbox>
    );
  }

  chooseDir = () => {
    const {remote, store} = this.props;
    const path = remote.dialog.showOpenDialog({
      properties: ['openDirectory']
    });
    if(path) store.directory = path[0];
  }
}

export default DirView;