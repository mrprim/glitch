import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import config from '../firebase.config.json'

firebase.initializeApp(config)
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

export const db = firebase.firestore()

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
