import React from 'react'
import { useSelector } from 'react-redux'

const CharacterDisplay = () => {
  const character = useSelector(s => s.character)

  return <Character {...character} />
}

const Character = props =>
  <>
    {JSON.stringify(props)}
  </>

export default CharacterDisplay
