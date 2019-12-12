import firebase from 'firebase'
import { register } from '../async-ops/registry'
import * as asyncTypes from '../constants/asyncTypes'

const authSignOut = async () => {
  await firebase.auth().signOut()
}

register(asyncTypes.AUTH_SIGN_OUT, authSignOut)
