import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Text, View, Button } from 'react-desktop/macOs'
import { MdCloudDownload } from 'react-icons/lib/md'

@observer
class DirectoryFrame extends Component {
  render () {
    const { store } = this.props
    return (
      <View horizontalAlignment='center' padding='10px 0 15px 0'>
        <Button>
          <label>
            <MdCloudDownload /> Choose directory
            <input
              type='file'
              hidden
              ref={up => { this._up = up }}
              onChange={this._changeDir}
            />
          </label>
        </Button>
        <Text padding='0 5px'>{store.directory}</Text>
      </View>
    )
  }

  componentDidMount () {
    this._up.nwdirectory = true
  }

  _changeDir = e => {
    this.props.store.directory = e.target.value
  }
}

export default DirectoryFrame
