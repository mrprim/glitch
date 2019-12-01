import React, { useCallback } from 'react'
import Button from '@material-ui/core/Button'
import useCharacter from '../../hooks/useCharacter'

const CharacterDisplay = ({ id, setIsEditing }) => {
  const character = useCharacter(id)
  const setEditing = useCallback(() => setIsEditing(true), [setIsEditing])

  return <Character id={id} setEditing={setEditing} {...character} />
}

const Character = props => {
  const { id, setEditing } = props
  return (
    <>
      <h1>{id}</h1>
      <Button onClick={setEditing}>Edit</Button>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </>
  )
}

export default CharacterDisplay
