import React, {Component} from 'react';
import Flexbox from 'flexbox-react';
import { Text } from 'react-desktop/macOs';
import { observer } from 'mobx-react';

@observer
class MainView extends Component {
  constructor() {
    super();
  }

  render() {
    const { store } = this.props;
    return (
      <Flexbox alignItems="flex-start" flexGrow={1}>
        <button onClick={this.chooseDir}>Choose folder</button>
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

export default MainView;