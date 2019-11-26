import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import BuyModalComponent from './components/shared/BuyModal'
import * as fb from 'firebase'
import colors from 'vuetify/lib/util/colors'

Vue.use(vuetify)

Vue.component('app-buy-modal', BuyModalComponent)
//Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
    vuetify,
    created(){
		fb.initializeApp({
		apiKey: "AIzaSyC3xqwPFFpCUHFX9mJ1xn7OGDGvT36sM7E",
		authDomain: "itc-ads-5cb01.firebaseapp.com",
	    databaseURL: "https://itc-ads-5cb01.firebaseio.com",
	    projectId: "itc-ads-5cb01",
	    storageBucket: "itc-ads-5cb01.appspot.com",
	    messagingSenderId: "253479816369",
	    appId: "1:253479816369:web:2ff0aaf3556812ca892690"
		})
		fb.auth().onAuthStateChanged(user => {
			if (user){
				this.$store.dispatch('autoLoginUser', user)
			}
		})

		this.$store.dispatch('fetchAds')
    }
}).$mount('#app')
