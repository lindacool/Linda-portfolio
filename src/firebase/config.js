import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFysmPcIInOH6DIAUfAoQEek8waTzp4SE",
  authDomain: "lindaandersson-portfolio.firebaseapp.com",
  projectId: "lindaandersson-portfolio",
  storageBucket: "lindaandersson-portfolio.appspot.com",
  messagingSenderId: "643962725561",
  appId: "1:643962725561:web:61ba9fc386f3d73667a768",
  measurementId: "G-1P9MGL2XCX"
};
  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init firestore Services. this is how i get collections from my database
  const projectFirestore = firebase.firestore()
  const projectStorage = firebase.storage()


  export { projectFirestore, projectStorage }