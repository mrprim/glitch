import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import characterSelectorCreator from '../selectors/character'

export default id => {
  const characterSelector = useCallback(characterSelectorCreator(id), [id])
  return useSelector(characterSelector)
}
