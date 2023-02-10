// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCACCfmVrvBGGfal_v7ayUZLRYmC_xCx6w",
    authDomain: "clone-65110.firebaseapp.com",
    projectId: "clone-65110",
    storageBucket: "clone-65110.appspot.com",
    messagingSenderId: "334135340886",
    appId: "1:334135340886:web:a5664f8f403957cd6af0f7",
    measurementId: "G-VDMLNPJLTP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};