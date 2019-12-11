import { useEffect, useCallback } from 'react'
import useAsyncOps from '../../async-ops/useAsyncOps'
import * as asyncTypes from '../../constants/asyncTypes'

export default id => {
  const { loading, call } = useAsyncOps({ name: asyncTypes.GET_CHARACTER })

  const load = useCallback(() => {
    if (!id) {
      return
    }
    call(id)
  }, [id, call])

  useEffect(load, [load])

  return {
    loading
  }
}
