import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase, { firestore } from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBgWifOV8JfD-3Y4r0QRLGtCZuB5I3v5yY",
    authDomain: "just-hook-243006.firebaseapp.com",
    databaseURL: "https://just-hook-243006.firebaseio.com",
    projectId: "just-hook-243006",
    storageBucket: "just-hook-243006.appspot.com",
    messagingSenderId: "819874668412",
    appId: "1:819874668412:web:bc3181ac18ab7372600ef9",
    measurementId: "G-MHT77Q19YK"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
window.db = db;

createApp(App)
    .use(store)
    .use(router)
    .mount("#app");
