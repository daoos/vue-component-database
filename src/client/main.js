import Vue from 'vue'
import 'muse-ui/src/styles/base.less'


import router from './router'
import apolloProvider from './apollo-provider'

import vcdMainComponent from './components/vcd-main-component.vue'

const RootComponent = Vue.extend(vcdMainComponent)

// eslint-disable-next-line no-new
new RootComponent({
  el: `#main`,
  router,
  apolloProvider,
})
