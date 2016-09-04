import React, {Component} from 'react';
import { Window, TitleBar} from 'react-desktop/macOs';
import MainView from './MainView';
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
        <MainView remote={remote} store={this.props.store}/>
      </Window>
    );
  };
}

export default App;