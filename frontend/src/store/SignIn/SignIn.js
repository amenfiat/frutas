// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyDinlc1yWgko9p7b36Vwk91TTmQ0q0O8as",
    authDomain: "frutasexportacion-9c6db.firebaseapp.com",
    databaseURL: "https://frutasexportacion-9c6db-default-rtdb.firebaseio.com",
    projectId: "frutasexportacion-9c6db",
    storageBucket: "frutasexportacion-9c6db.appspot.com",
    messagingSenderId: "739993098038",
    appId: "1:739993098038:web:1d94af28fa2e1254618597",
    measurementId: "G-622YPQZJG7"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

function SignIn() {
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignIn;
