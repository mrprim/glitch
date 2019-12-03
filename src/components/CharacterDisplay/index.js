import React, { useCallback } from 'react'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import useCharacter from '../../hooks/useCharacter'
import aAn from '../../utils/aAn'

const CharacterDisplay = ({ id, setIsEditing }) => {
  const character = useCharacter(id)
  const setEditing = useCallback(() => setIsEditing(true), [setIsEditing])

  return <Character id={id} setEditing={setEditing} {...character} />
}

const B = ({ children }) => <span className='highlight'>{children}</span>

const Character = props => {
  const { setEditing } = props
  return (
    <>
      <h1>
        {props.name}
        <IconButton color='primary' onClick={setEditing}>
          <EditIcon />
        </IconButton>
      </h1>
      <p>
        <B>{props.pronouns}</B>.  Wears {aAn(props.hat)} <B>{props.hat}</B>.
      </p>
      <h2>Sheet</h2>
      <h3>Stats</h3>
      <Stat label='Eide' value={props.eide} />
      <Stat label='Flore' value={props.flore} />
      <Stat label='Lore' value={props.lore} />
      <Stat label='Wyrd' value={props.wyrd} />
      <Stat label='Ability' value={props.ability} />

      <List label='Bonds' values={props.bonds} />
      <List label='Geasa' values={props.geasa} />
      <List label='Gifts' values={props.gifts} />

      <Costs {...props.costs} />
    </>
  )
}

const Stat = ({ label, value }) =>
  <div>
    {label} {value}
  </div>

const List = ({ label, values }) => {
  if (!values.length) return null
  return (
    <div>
      <div><B>{label}</B></div>
      {values.map((v, i) => <div key={i}>{v}</div>)}
    </div>
  )
}
const Costs = ({ burn, fugue, immersion, stilling, wear }) =>
  <div>
    <h3>Costs</h3>
    <Stat label='Burn' value={burn} />
    <Stat label='Fugue' value={fugue} />
    <Stat label='Immersion' value={immersion} />
    <Stat label='Stilling' value={stilling} />
    <Stat label='Wear' value={wear} />
  </div>

export default CharacterDisplay
