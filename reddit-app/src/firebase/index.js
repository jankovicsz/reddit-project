import firebase from 'firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

/* const firebaseConfig = {
  apiKey: 'AIzaSyD_finqjyvaY46_UHluoC49-G5l3HgQ_mg',
  authDomain: 'reddit-project-dt.firebaseapp.com',
  projectId: 'reddit-project-dt',
  storageBucket: 'reddit-project-dt.appspot.com',
  messagingSenderId: '788752213665',
  appId: '1:788752213665:web:f727b889a8bb482a2cf2e0',
}; */

const firebaseConfig = {
  apiKey: 'AIzaSyCaCjldvdjrrIB0eo6pqaUv7T_VhJKUqpg',
  authDomain: 'starwars-finder.firebaseapp.com',
  projectId: 'starwars-finder',
  storageBucket: 'starwars-finder.appspot.com',
  messagingSenderId: '373156359641',
  appId: '1:373156359641:web:e4c4f19123ef79520abdc8',
  measurementId: 'G-MT8L9Q4E8C',
};

// const app = firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

//export const auth = app.auth();

const db = firebase.firestore();

export default db;
