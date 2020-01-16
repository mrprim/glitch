import React, { useCallback } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import Container from '@material-ui/core/Container'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import Paper from '@material-ui/core/Paper'
import useCharacter from '../../hooks/useCharacter'
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
      <AppBar style={{ backgroundColor: 'gray' }} position='relative'>
        <Toolbar variant='dense'>
          <Typography variant='h5'>{props.name}, who is dying of {props.bane}</Typography>
          <div style={{ flexGrow: 1 }} />
          <IconButton title='Edit' color='inherit' onClick={setEditing}>
            <EditIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: '2em' }}>
        <Grid container spacing={2} direction='column' justify='center'>
          <Grid container spacing={2}>
            <Grid item sm={6}>
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
                <List label='Bond' values={props.bonds} />
                <List label='Geas' values={props.geasa} />
                <List label='Gift' values={props.gifts} />

                <Costs {...props.costs} />
              </Paper>
            </Grid>
            <Grid item sm={6}>
              <Paper className='notes'>
                <h3>Notes</h3>
                <NoteForm characterId={props.id} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
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
      {values.map((v, i) => <div key={i}><B>{label}</B>: {v}</div>)}
      <Divider />
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
