import { db } from '../firebase'
import { register } from '../async-ops/registry'
import * as asyncTypes from '../constants/asyncTypes'

const postUser = async (uid, user) => {
  await db.collection('users').doc(uid).set(user)
}

register(asyncTypes.POST_USER, postUser)
