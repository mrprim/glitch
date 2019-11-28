import * as firebase from 'firebase/app'
import 'firebase/firestore'
import config from '../firebase.config.json'

firebase.initializeApp(config)

export const db = firebase.firestore()
