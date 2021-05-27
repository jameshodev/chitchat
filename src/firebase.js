// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCYboDPOqvDQXs4JuL5nbEhtK-fmcIoKgg',
  authDomain: 'messaging-39e28.firebaseapp.com',
  projectId: 'messaging-39e28',
  storageBucket: 'messaging-39e28.appspot.com',
  messagingSenderId: '575518514662',
  appId: '1:575518514662:web:465d35b381d336825e0a27',
  measurementId: 'G-L31GVZ7MNH',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
console.log('auth is ', auth);
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
