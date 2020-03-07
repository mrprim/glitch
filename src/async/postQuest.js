import { db } from '../firebase'
import { register } from '../async-ops/registry'
import * as asyncTypes from '../constants/asyncTypes'

const postQuest = async (id, quest) => {
  quest = {
    ...quest,
    updated: Date.now()
  }
  await db.collection('quests').doc(id).update(quest)
}

register(asyncTypes.POST_QUEST, postQuest)
