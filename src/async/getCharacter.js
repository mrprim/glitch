import { db } from '../firebase'

export default async id => {
  const doc = await db.collection('characters').doc(id).get()

  return doc.data()
}
