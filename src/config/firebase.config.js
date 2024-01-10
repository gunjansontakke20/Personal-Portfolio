import {initializeApp, getApp, getApps} from "firebase/app"
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCmOi2M8LwV144Zk0mn8Qd4x1uYFS7dFU4",
    authDomain: "contacts-b40dc.firebaseapp.com",
    projectId: "contacts-b40dc",
    storageBucket: "contacts-b40dc.appspot.com",
    messagingSenderId: "296935962715",
    appId: "1:296935962715:web:9dae0b7247b0a68031a77e",
    measurementId: "G-NTKSB9ZS7C"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {app,db}