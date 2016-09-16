import React, { Component } from 'react'
import { Window, TitleBar, View } from 'react-desktop/macOs'

import DirectoryFrame from './DirectoryFrame/'
import SelectorFrame from './SelectorFrame/'
import SetFrame from './SetFrame/'

import style from './style.sass'

class App extends Component {
  render () {
    const win = window.nw ? window.nw.Window.get() : window

    return (
      <Window height='100vh' padding='5px' className={style.window}>
        <TitleBar
          title='Wall Down'
          controls
          onCloseClick={() => win.close()}
          onMinimizeClick={() => win.minimize()}
          className={style.titlebar} />
        <View
          layout='vertical'
          horizontalAlignment='center'
          verticalAlignment='center'
          width='100%'
        >
          <DirectoryFrame store={this.props.store} />
          <SelectorFrame store={this.props.store} />
          <SetFrame store={this.props.store} />
        </View>
      </Window>
    )
  }
}

export default App
