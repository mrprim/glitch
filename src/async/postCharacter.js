import { db } from '../firebase'

export default async (id, character) => {
  await db.collection('characters').doc(id).set(character)
}
