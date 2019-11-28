import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import getCharacter from '../../async/getCharacter'
import * as actions from '../../actions'

const CharacterDisplay = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const character = useSelector(s => s.character)

  const load = useCallback(async () => {
    if (!id) return
    const character = await getCharacter(id)

    dispatch(actions.setCharacter(character))
  }, [id, dispatch])

  useEffect(() => { load() }, [load])
  return <Character id={id} {...character} />
}

const Character = props =>
  <>
    <h1>{props.id}</h1>
    <pre>
      {JSON.stringify(props, null, 2)}
    </pre>
  </>
export default CharacterDisplay
