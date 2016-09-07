import { observable } from 'mobx';

class Store {
  @observable directory = window.process.env.TMPDIR || window.process.env.TMP;
  @observable selected = 1;
}

export default Store;
