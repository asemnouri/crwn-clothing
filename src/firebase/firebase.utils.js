
// import firebase libraries that we need (auth,firestore which is the db)
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// initialize with our project key we get from firebase site
const config =  {
  apiKey: "AIzaSyDMKR0vXsugwI50dhLCK0EW_vvWJzh5mNc",
  authDomain: "crwm-db-momen.firebaseapp.com",
  databaseURL: "https://crwm-db-momen.firebaseio.com",
  projectId: "crwm-db-momen",
  storageBucket: "crwm-db-momen.appspot.com",
  messagingSenderId: "733808433762",
  appId: "1:733808433762:web:89d4b3e808c41c9fa00f3b",
  measurementId: "G-FJ72R509SP"
};
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists){
      const { displayName, email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({//the set() method is for doc and the create() method is for the collection 
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      } catch(error) {
        console.log('error creating user', error.message)
      }
    }
    return userRef;

  }

  firebase.initializeApp(config);       // all previous steps are initializing


  // make auth and firestore references to use their methods later on
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
