  
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyCDhl3DXsTAThEOosIWLeP0aLshhJRLFek",
    authDomain: "crwn-db-bb3bf.firebaseapp.com",
    databaseURL: "https://crwn-db-bb3bf.firebaseio.com",
    projectId: "crwn-db-bb3bf",
    storageBucket: "crwn-db-bb3bf.appspot.com",
    messagingSenderId: "993978586992",
    appId: "1:993978586992:web:56633170074917322c61b5",
    measurementId: "G-R779DY2XN0"
  }

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;