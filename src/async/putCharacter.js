import { db } from '../firebase'

export default async character => {
  const ref = await db.collection('characters').add(character)

  return ref.id
}
