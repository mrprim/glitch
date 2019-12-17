import { db } from '../firebase'
import { register } from '../async-ops/registry'
import * as asyncTypes from '../constants/asyncTypes'

const postCharacter = async (id, character) => {
  character = {
    ...character,
    updated: Date.now()
  }
  await db.collection('characters').doc(id).update(character)
}

register(asyncTypes.POST_CHARACTER, postCharacter)
