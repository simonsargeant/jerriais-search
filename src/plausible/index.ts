import { createPlausible } from 'v-plausible/vue'

const plausible = createPlausible({
  init: {
    domain: 'pathole.com',
    apiHost: 'https://plausible.io',
    trackLocalhost: true,
  },
  settings: {
    enableAutoOutboundTracking: true,
    enableAutoPageviews: true,
  }
})

export default plausible
