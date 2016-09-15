import { observable } from 'mobx'

const { env } = window.process || process

class Store {

  @observable directory = env['TMPDIR'] || env['TMP']

  @observable posts = []

  @observable selected = 1

}

export default Store
