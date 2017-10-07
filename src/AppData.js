import firebaseConfig from './data/firebaseConfig'
import * as firebase from 'firebase'
import 'firebase/firestore'

export default class AppData {
  constructor() {
    firebase.initializeApp(firebaseConfig)
    this.db = firebase.firestore().enablePersistence()
      .then(() => {
        // Initialize Cloud Firestore through firebase
        console.log('yeah')
        this.db = firebase.firestore()
        this.prepareExercises()
      })
      .catch((err) => {
        if (err.code === 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
          console.log('failed')
        } else if (err.code === 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
          console.log('unimplementet')
        }
      })
  }
}
