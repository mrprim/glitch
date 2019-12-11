import { db } from '../firebase'
import { register } from '../async-ops/registry'
import * as asyncTypes from '../constants/asyncTypes'

const getCharacter = async id => {
  const doc = await db.collection('characters').doc(id).get()

  return doc.data()
}

register(asyncTypes.GET_CHARACTER, getCharacter)
