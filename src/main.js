import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase, { firestore } from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCovXQOs_87qfABYtg79WttSqCLT-r9BBU",
  authDomain: "elevated-module-243006.firebaseapp.com",
  databaseURL: "https://elevated-module-243006.firebaseio.com",
  projectId: "elevated-module-243006",
  storageBucket: "elevated-module-243006.appspot.com",
  messagingSenderId: "1022204686495",
  appId: "1:1022204686495:web:779935e9e49ce1b5f8b2aa",
  measurementId: "G-KFRSVS1SF8"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
window.db = db;

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
