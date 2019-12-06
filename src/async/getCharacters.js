import { db } from '../firebase'

const DEFAULTS = {
  createdBy: '',
  sort: 'updated',
  limit: 1000
}

export default async params => {
  const { createdBy, sort, limit } = { ...DEFAULTS, ...params }
  const docs = await db.collection('characters')
    .where('createdBy', '==', createdBy)
    .orderBy(sort, 'desc')
    .limit(limit)
    .get()

  const rslt = {}
  docs.forEach(doc => {
    rslt[doc.id] = doc.data()
  })

  return rslt
}
