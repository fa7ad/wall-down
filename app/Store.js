import { observable } from 'mobx';

class Store {
  @observable directory = __dirname;
  @observable selected = 0;
}

export default Store;
