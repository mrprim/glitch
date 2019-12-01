import { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import useAsyncOps from '../../hooks/useAsyncOps'
import getCharacter from '../../async/getCharacter'
import * as actions from '../../actions'

export default id => {
  const dispatch = useDispatch()

  const load = useCallback(async () => {
    if (!id) return
    const character = await getCharacter(id)

    dispatch(actions.setCharacter(id, character))
  }, [id, dispatch])

  const { loading, callAsync } = useAsyncOps('loadCharacter', load)

  useEffect(() => { callAsync() }, [callAsync])

  return {
    loading
  }
}
