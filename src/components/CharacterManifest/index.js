import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import useAsyncOps from '../../hooks/useAsyncOps'
import getCharacters from '../../async/getCharacters'
import charactersSelector from '../../selectors/characters'
import * as actions from '../../actions'

const CharacterManifest = ({ limit }) => {
  const dispatch = useDispatch()
  const characters = useSelector(charactersSelector)

  const load = useCallback(async () => {
    const characters = await getCharacters({ limit })
    dispatch(actions.setCharacters(characters))
  }, [dispatch, limit])

  const { loading, callAsync } = useAsyncOps('loadCharacters', load)
  useEffect(() => { callAsync() }, [callAsync])

  return <Characters loading={loading} characters={characters} />
}

const Characters = ({ characters }) => characters.map(c => <Character key={c.id} {...c} />)

const Character = ({ name, hat, id }) =>
  <div>
    <Link to={`./character/${id}`}>
      <span className='highlight'>{name}</span> who wears a <i>{hat}</i>
    </Link>
  </div>

export default CharacterManifest
