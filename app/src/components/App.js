import React, {Component} from 'react'
import {Window, TitleBar} from 'react-desktop/macOs'
import Flexbox from 'flexbox-react'

import DirView from './DirView'
import GridView from './GridView'

import styles from './app.sass'

class App extends Component {
  render () {
    const win = window.nw.Window.get()

    return (
      <Window
        height='100vh'
        padding='5px'
        className={styles.window}
      >
        <TitleBar
          title='Wall Down'
          controls
          onCloseClick={() => win.close()}
          onMinimizeClick={() => win.minimize()}
          className={styles.titlebar}
        />
        <Flexbox flexGrow={1} flexDirection='column'>
          <DirView store={this.props.store} />
          <GridView store={this.props.store} />
        </Flexbox>
      </Window>
    )
  };
}

export default App
