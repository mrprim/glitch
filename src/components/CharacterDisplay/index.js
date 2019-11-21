import React from 'react'
import { useSelector } from 'react-redux'

const CharacterDisplay = () => {
  const character = useSelector(s => s.character)

  return <Character {...character} />
}

const Character = ({ eide, hat, name, gender }) =>
  <>
    <div>Hat: {hat}</div>
    <div>Name: {name}</div>
    <div>Gender: {gender}</div>
    <div>Eide: {eide} </div>
  </>

export default CharacterDisplay
