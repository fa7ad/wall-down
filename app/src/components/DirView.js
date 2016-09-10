import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Text, View } from 'react-desktop/macOs'
import { MdCloudDownload } from 'react-icons/lib/md'

@observer
class DirView extends Component {
  render () {
    const { store } = this.props
    return (
      <View horizontalAlignment='center' padding='10px 0 15px 0'>
        <button>
          <label>
            <MdCloudDownload /> Choose directory
            <input
              type='file'
              hidden
              ref={up => { this._up = up }}
              onChange={({target}) => { store.directory = target.value }} />
          </label>
        </button>
        <Text padding='0 5px'>
          {store.directory}
        </Text>
      </View>
    )
  }

  componentDidMount () {
    this._up.nwdirectory = true
  }
}

export default DirView
