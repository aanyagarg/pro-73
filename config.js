import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyDfsDOVlLk1DkTZgPl1FQ7NvsmExYUY7hg",
    authDomain: "project-73-4d214.firebaseapp.com",
    projectId: "project-73-4d214",
    storageBucket: "project-73-4d214.appspot.com",
    messagingSenderId: "681914296807",
    appId: "1:681914296807:web:0febfd0e1abd3e16be3542"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

