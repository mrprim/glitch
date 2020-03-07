import { db } from '../firebase'
import { register } from '../async-ops/registry'
import * as asyncTypes from '../constants/asyncTypes'

const putQuest = async quest => {
  quest = {
    ...quest,
    created: Date.now(),
    updated: Date.now()
  }
  const ref = await db.collection('quests').add(quest)

  return ref.id
}

register(asyncTypes.PUT_QUEST, putQuest)
