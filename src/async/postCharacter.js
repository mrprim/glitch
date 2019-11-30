import { db } from '../firebase'

export default async (id, character) => {
  character = {
    ...character,
    updated: Date.now()
  }
  await db.collection('characters').doc(id).set(character)
}
