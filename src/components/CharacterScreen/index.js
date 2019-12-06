import React, { useState } from 'react'
import useRouteParams from '../../hooks/useRouteParams'
import useCharacter from '../../hooks/useCharacter'
import useLoadCharacter from './useLoadCharacter'
import CharacterDisplay from '../CharacterDisplay'
import CharacterForm from '../CharacterForm'
import Screen from '../Screen'
import GlitchIcon from '../GlitchIcon'
import './index.scss'

const CharacterScreen = () => {
  const { id } = useRouteParams('/character/:id')
  const { loading } = useLoadCharacter(id)
  const character = useCharacter(id)

  return (
    <Screen className='character-screen'>
      <Body id={id} loading={loading} character={character} />
    </Screen>
  )
}

const Body = ({ id, loading, character }) => {
  const [isEditing, setIsEditing] = useState(false)

  if (loading) {
    return <GlitchIcon size='100' unit='px' />
  }

  if (!character || isEditing) {
    return <CharacterForm id={id} setIsEditing={setIsEditing} />
  }

  return <CharacterDisplay id={id} setIsEditing={setIsEditing} />
}

export default CharacterScreen
