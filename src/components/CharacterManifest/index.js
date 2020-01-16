import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useAsyncOps } from '../../async-ops'
import * as asyncTypes from '../../constants/asyncTypes'
import charactersSelector from '../../selectors/characters'
import aAn from '../../utils/aAn'

const CharacterManifest = ({ limit }) => {
  const { uid } = useSelector(s => s.user)
  const characters = useSelector(charactersSelector)

  const { loading, call } = useAsyncOps({ name: asyncTypes.GET_CHARACTERS })

  useEffect(() => { call({ limit }) }, [call, uid, limit])

  return <Characters loading={loading} characters={characters} />
}

const Characters = ({ characters }) => characters.map(c => <Character key={c.id} {...c} />)

const Character = ({ name, hat, id }) =>
  <div>
    <Link to={`./character/${id}`}>
      <span className='highlight'>{name}</span> who wears {aAn(hat)} <i>{hat}</i>
    </Link>
  </div>

export default CharacterManifest
