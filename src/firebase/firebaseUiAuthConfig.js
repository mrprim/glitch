import firebase from 'firebase'
import * as firebaseui from 'firebaseui'

export default {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ]
}
