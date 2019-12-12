import { db } from '../firebase'
import { register } from '../async-ops/registry'
import * as asyncTypes from '../constants/asyncTypes'

const getUser = async uid => {
  if (!uid) return

  const doc = await db.collection('users').doc(uid).get()

  return doc.data()
}

register(asyncTypes.GET_USER, getUser)
