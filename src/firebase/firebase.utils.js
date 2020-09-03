import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCvybfBAMP8QDIaXW7g1mYMFNyURFabmK0",
    authDomain: "react-clothing-8ed30.firebaseapp.com",
    databaseURL: "https://react-clothing-8ed30.firebaseio.com",
    projectId: "react-clothing-8ed30",
    storageBucket: "react-clothing-8ed30.appspot.com",
    messagingSenderId: "174950550749",
    appId: "1:174950550749:web:97a8931349d35e92d15f34"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

//google auth utility
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase