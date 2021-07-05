import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC7KWkQml7-Y20E4zkxa-NIpUlbNox6mjM",
    authDomain: "crwn-db-c416c.firebaseapp.com",
    projectId: "crwn-db-c416c",
    storageBucket: "crwn-db-c416c.appspot.com",
    messagingSenderId: "827080255042",
    appId: "1:827080255042:web:d1afc4b715fdc446156fdb",
    measurementId: "G-XMF58LVG4V"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;