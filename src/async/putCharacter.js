import { db } from '../firebase'

export default async character => {
  character = {
    ...character,
    created: Date.now(),
    updated: Date.now()
  }
  const ref = await db.collection('characters').add(character)

  return ref.id
}
