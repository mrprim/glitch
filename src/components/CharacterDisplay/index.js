import React, { useCallback } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import Container from '@material-ui/core/Container'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import EdittableDisplayField from '../EdittableDisplayField'
import useCharacter from '../../hooks/useCharacter'
import { useAsyncOps } from '../../async-ops'
import * as asyncTypes from '../../constants/asyncTypes'
import './index.scss'
import { useTranslation } from 'react-i18next'
import { formatters, names as generatorName } from 'random-rpg-stuff'

const CharacterDisplay = ({ id, setIsEditing }) => {
  const character = useCharacter(id)
  const setEditing = useCallback(() => setIsEditing(true), [setIsEditing])

  return <Character id={id} setEditing={setEditing} {...character} />
}

const Character = props => {
  const { setEditing } = props
  return (
    <div className='character-display'>
      <AppBar style={{ backgroundColor: 'gray' }} position='relative'>
        <Toolbar variant='dense'>
          <div style={{ flexGrow: 1 }} />
          <IconButton title='Edit' color='inherit' onClick={setEditing}>
            <EditIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: '2em' }}>
        <Field name='name' value={props.name} characterId={props.id} />
        <Field name='hat' value={props.hat} characterId={props.id} randomizer={{ name: generatorName.HAT }} />
        <Field name='bane' value={props.bane} characterId={props.id} randomizer={{ name: generatorName.NOUN, options: { format: [formatters.pluralize, formatters.toLowerCase] } }} />
        <Field name='pronouns' value={props.pronouns} characterId={props.id} />
        <Field name='technique' value={props.technique} characterId={props.id} randomizer={{ name: [generatorName.JOB, generatorName.CLASS], options: { format: formatters.toLowerCase } }} />
        <Field name='destruction' value={props.destruction} characterId={props.id} />
        <Field name='sphere' value={props.sphere} characterId={props.id} randomizer={{ name: generatorName.NOUN, options: { format: formatters.pluralize } }} />
        <Field name='sanctuary' value={props.sanctuary} characterId={props.id} />
        <Divider />
        <Stat name='eide' label='Eide' value={props.eide} />
        <Stat name='flore' label='Flore' value={props.flore} />
        <Stat name='lore' label='Lore' value={props.lore} />
        <Stat name='wyrd' label='Wyrd' value={props.wyrd} />
        <Stat name='ability' label='Ability' value={props.ability} />
        <List label='Bond' values={props.bonds} />
        <List label='Geas' values={props.geasa} />
        <List label='Gift' values={props.gifts} />
        <Costs {...props.costs} />
        <List label='Treasure' values={props.treasures} />
        <List label='Arcanum' values={props.arcana} />
      </Container>
    </div>
  )
}

const Field = ({ name, value, characterId, randomizer }) => {
  const { call, loading } = useAsyncOps({ name: asyncTypes.POST_CHARACTER })
  const submit = useCallback(
    async values => {
      call(characterId, values)
    },
    [characterId, call]
  )

  return <EdittableDisplayField fullWidth name={name} value={value} submit={submit} loading={loading} randomizer={randomizer} />
}

const Labeled = ({ label, children }) =>
  <>
    <span className='label'>{label}</span>.<span className='value'>{children}</span>
  </>

const Stat = ({ name, label, value = 0 }) => {
  const { t } = useTranslation()
  if (!name) {
    return null
  }

  return (
    <div>
      <Labeled label={label}>{value}</Labeled>_<i>{t(`attributeLevelName.${name}_${value}`)}</i>
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
