import { db } from '../firebase'
import { register } from '../async-ops/registry'
import * as asyncTypes from '../constants/asyncTypes'

const DEFAULTS = {
  createdBy: '',
  sort: 'updated',
  limit: 1000
}

const getCharacters = async params => {
  const { sort, limit } = { ...DEFAULTS, ...params }
  const docs = await db.collection('characters')
    .orderBy(sort, 'desc')
    .limit(limit)
    .get()

  const rslt = {}
  docs.forEach(doc => {
    rslt[doc.id] = doc.data()
  })

  return rslt
}

register(asyncTypes.GET_CHARACTERS, getCharacters)
