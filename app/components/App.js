import React, { Component } from 'react';
import { Window, TitleBar} from 'react-desktop/macOs';
import Flexbox from 'flexbox-react';

import DirView from './DirView';
import GridView from './GridView';

class App extends Component {
  render() {
    const {remote} = this.props;
    const win = remote.getCurrentWindow();

    return (
      <Window height="100vh" padding="5px">
        <TitleBar
          title="Wall Down"
          controls
          onCloseClick={() => win.close() }
          onMinimizeClick={() => win.minimize() }
          id="titlebar"
        />
        <Flexbox flexGrow={1} flexDirection="column">
          <DirView remote={remote} store={this.props.store} />
          <GridView store={this.props.store} />
        </Flexbox>
      </Window>
    );
  };
}

export default App;