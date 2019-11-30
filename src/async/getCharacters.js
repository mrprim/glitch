import { db } from '../firebase'

const defaults = {
  SORT: 'updated',
  LIMIT: 100

}

export default async params => {
  const { order = defaults.SORT, limit = defaults.LIMIT } = params || {}
  const docs = await db.collection('characters')
    .orderBy(order, 'desc')
    .limit(limit)
    .get()
  const rslt = {}

  docs.forEach(doc => {
    rslt[doc.id] = doc.data()
  })

  return rslt
}
