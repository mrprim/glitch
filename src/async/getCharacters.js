import { db } from '../firebase'
import { register } from '../async-ops/registry'
import * as asyncTypes from '../constants/asyncTypes'

const DEFAULTS = {
  createdBy: '',
  sort: 'updated',
  limit: 1000
}

const getCharacters = async params => {
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

console.log('A', asyncTypes)
register(asyncTypes.GET_CHARACTERS, getCharacters)
