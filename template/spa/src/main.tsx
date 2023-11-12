import { routes } from './routes'
import { Router} from 'omi-router'
import { tailwind } from './tailwind'

new Router({
  routes,
  css: [tailwind],
  renderTo: '#app'
})

