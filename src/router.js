import Vue from 'vue'
import Router from 'vue-router'
import Cart from './pages/Cart'
import Address from './pages/Address'
Vue.use(Router);
export default new Router({
	routes: [
		{
			path: '/',
			name: 'cart',
			meta: {
				auth: true
			},
			component: Cart
		},
		{
			path: '/address',
			name: 'address',
			meta: {
				auth: true
			},
			component: Address
		}
	]
})