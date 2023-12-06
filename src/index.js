import QIconPicker from './components/QIconPicker'

import { version } from './version'

export {
  version,
  QIconPicker
}

//John1

export default {
  version,
  QIconPicker,

  install (Vue) {
    Vue.component(QIconPicker.name, QIconPicker)
  }
}
