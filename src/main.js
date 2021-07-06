import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import messagePlugin from './utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'
import dateFilter from './filters/date.filter'
// firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.use(messagePlugin)
// Vue app
let appVue

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJODT6fjJzF87TZIVflC1qVBz5rmsQQIQ",
  authDomain: "accounting-vue-071.firebaseapp.com",
  projectId: "accounting-vue-071",
  storageBucket: "accounting-vue-071.appspot.com",
  messagingSenderId: "273370736162",
  appId: "1:273370736162:web:1353a2a4475ac6b1f44c7b",
  measurementId: "G-H6E21TWYDW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(function() {
  if (!appVue) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
