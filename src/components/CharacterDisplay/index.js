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
import './index.scss'

const CharacterDisplay = ({ id, setIsEditing }) => {
  const character = useCharacter(id)
  const setEditing = useCallback(() => setIsEditing(true), [setIsEditing])

  return <Character id={id} setEditing={setEditing} {...character} />
}

const Character = props => {
  console.log(props)
  const { setEditing } = props
  return (
    <div className='character-display'>
      <AppBar style={{ backgroundColor: 'gray' }} position='relative'>
        <Toolbar variant='dense'>
          <Typography variant='h5'>{props.name}
            <div style={{ fontSize: '.7em' }}>who is dying of {props.bane}</div>
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <IconButton title='Edit' color='inherit' onClick={setEditing}>
            <EditIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: '2em' }}>
        <Grid container spacing={2} direction='column' justify='center'>
          <Grid container spacing={2} justify='center'>
            <Grid item sm={6} md={4}>
              <Paper className='sheet'>
                <div><Labeled label='Hat'>{props.hat}</Labeled></div>
                <div><Labeled label='Pronouns'>{props.pronouns}</Labeled></div>
                <div><Labeled label='Bane'>{props.bane}</Labeled></div>
                <div><Labeled label='Technique'>{props.technique}</Labeled></div>
                <div><Labeled label='Destruction'>{props.destruction}</Labeled></div>
                <div><Labeled label='Sphere'>{props.sphere}</Labeled></div>
                <div><Labeled label='Sanctuary'>{props.sanctuary}</Labeled></div>

                <Divider />
                <Stat name='eide' label='Eide' value={props.eide} />
                <Stat name='flore' label='Flore' value={props.flore} />
                <Stat name='lore' label='Lore' value={props.lore} />
                <Stat name='wyrd' label='Wyrd' value={props.wyrd} />
                <Stat name='ability' label='Ability' value={props.ability} />
                <List label='Bond' values={props.bonds} />
                <List label='Geas' values={props.geasa} />
                <List label='Gift' values={props.gifts} />
              </Paper>
            </Grid>

            <Grid item sm={6} md={4}>
              <Paper className='sheet'>
                <Costs {...props.costs} />
                <List label='Treasure' values={props.treasures} />
                <List label='Arcanum' values={props.arcana} />
              </Paper>
            </Grid>

          </Grid>
          {/* <Grid item sm={6}>
              <Paper className='notes'>
                <h3>Notes</h3>
                <NoteForm characterId={props.id} />
              </Paper>
            </Grid> */}
        </Grid>
      </Container>
    </div>
  )
}

const Labeled = ({ label, children }) =>
  <>
    <span className='label'>{label}</span>.<span className='value'>{children}</span>
  </>

const Stat = ({ name, label, value = 0 }) => {
  if (!name) {
    return null
  }

  const stat = stats[name][value]
  return (
    <div>
      <Labeled label={label}>{value}</Labeled>_<i>{stat.name}</i>
    </div>
  )
}

const List = ({ label, values }) => {
  if (!values.length) return null
  return (
    <div>
      <Divider />
      {values.map((v, i) => <div key={i}><Labeled label={label}>{v}</Labeled></div>)}
    </div>
  )
}
const Costs = ({ burn, fugue, immersion, stilling, wear }) =>
  <div>
    <Cost label='Burn' value={burn} />
    <Cost label='Fugue' value={fugue} />
    <Cost label='Immersion' value={immersion} />
    <Cost label='Stilling' value={stilling} />
    <Cost label='Wear' value={wear} />
  </div>

const Cost = ({ label, value = 0 }) =>
  <div>
    <Labeled label={label}>{value}</Labeled>
  </div>
export default CharacterDisplay
