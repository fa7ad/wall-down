import { observable } from 'mobx';

class Store {
  @observable directory = __dirname;
  @observable selected = 1;
}

export default Store;
