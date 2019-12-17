import React, { useCallback } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import Paper from '@material-ui/core/Paper'
import useCharacter from '../../hooks/useCharacter'
import aAn from '../../utils/aAn'
import * as stats from '../../constants/statLevels'
import NoteForm from '../NoteForm'
import './index.scss'

const CharacterDisplay = ({ id, setIsEditing }) => {
  const character = useCharacter(id)
  const setEditing = useCallback(() => setIsEditing(true), [setIsEditing])

  return <Character id={id} setEditing={setEditing} {...character} />
}

const B = ({ children }) => <span className='highlight'>{children}</span>

const Character = props => {
  console.log(props)
  const { setEditing } = props
  return (
    <div className='character-display'>
      <Grid container spacing={2} direction='column' justify='center'>
        <Grid container justify='center'>
          <Grid item style={{ textAlign: 'center' }}>
            <Typography variant='h5'>{props.name}</Typography>
            <p>
            Who wears {aAn(props.hat)} <B>{props.hat}</B>.
            </p>
          </Grid>
        </Grid>

        <Grid container justify='center'>
          <Grid item>
            <IconButton title='Edit' onClick={setEditing}>
              <EditIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper className='sheet'>
              <h2>Sheet</h2>
              <h3>Stats</h3>
              <ul>
                <Stat name='eide' label='Eide' value={props.eide} />
                <Stat name='flore' label='Flore' value={props.flore} />
                <Stat name='lore' label='Lore' value={props.lore} />
                <Stat name='wyrd' label='Wyrd' value={props.wyrd} />
                <Stat name='ability' label='Ability' value={props.ability} />
              </ul>
              <List label='Bonds' values={props.bonds} />
              <List label='Geasa' values={props.geasa} />
              <List label='Gifts' values={props.gifts} />

              <Costs {...props.costs} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className='notes'>
              <h3>Notes</h3>
              <NoteForm characterId={props.id} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

const Stat = ({ name, label, value = 0 }) => {
  if (!name) {
    return null
  }

  const stat = stats[name][value]
  return (
    <li>
      {label} {value} [{stat.name}]
      <p>
        {stat.description}
      </p>
    </li>
  )
}

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
    <Cost label='Burn' value={burn} />
    <Cost label='Fugue' value={fugue} />
    <Cost label='Immersion' value={immersion} />
    <Cost label='Stilling' value={stilling} />
    <Cost label='Wear' value={wear} />
  </div>

const Cost = ({ label, value = 0 }) =>
  <li>
    {label} {value}
  </li>
export default CharacterDisplay
