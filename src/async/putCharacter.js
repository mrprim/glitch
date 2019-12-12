import { db } from '../firebase'
import { register } from '../async-ops/registry'
import * as asyncTypes from '../constants/asyncTypes'

const putCharacter = async character => {
  character = {
    ...character,
    created: Date.now(),
    updated: Date.now()
  }
  const ref = await db.collection('characters').add(character)

  return ref.id
}

register(asyncTypes.PUT_CHARACTER, putCharacter)
