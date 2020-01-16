import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { AmiableForm, useSubmit } from 'amiable-forms'
import Input from '../Input'
import StatInput from '../StatInput'
import DecoratedInput from '../DecoratedInput'
import InputLabel from '@material-ui/core/InputLabel'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import Points from '../Points'
import RepeatedField from '../RepeatedField'
import * as labels from '../../constants/labels'
import './index.scss'
import useAsyncOps from '../../async-ops/useAsyncOps'
import useCharacter from '../../hooks/useCharacter'
import * as asyncTypes from '../../constants/asyncTypes'
import { names as generatorName } from 'random-rpg-stuff'
import { QUARTER } from '../../constants/columnProps'
import useFieldValue from 'amiable-forms/dist/hooks/useFieldValue'

const initialValues = ({
  name: '',
  hat: '',
  pronouns: '',
  eide: 0,
  flore: 0,
  lore: 0,
  wyrd: 0,
  ability: 0,
  bonds: [null],
  geasa: [null],
  gifts: [null],
  treasures: [null],
  arcana: [null]
})

const CharacterForm = ({ id, setIsEditing }) => {
  const history = useHistory()
  const { loading } = useAsyncOps(asyncTypes.GET_CHARACTER)
  const { call: callPutCharacter } = useAsyncOps({ name: asyncTypes.PUT_CHARACTER })
  const { call: callPostCharacter } = useAsyncOps({ name: asyncTypes.POST_CHARACTER })
  const character = useCharacter(id)
  const cancelEditing = useCallback(() => setIsEditing(false), [setIsEditing])
  const { uid } = useSelector(s => s.user)

  const onSubmit = useCallback(
    async values => {
      const newValues = cleanValues(values)
      newValues.createdBy = uid
      if (id) {
        await callPostCharacter(id, newValues)
        cancelEditing()
      } else {
        const newId = await callPutCharacter(newValues)
        history.push('/character/' + newId)
      }
    },
    [id, history, cancelEditing, uid, callPutCharacter, callPostCharacter]
  )

  if (loading) return null

  return (
    <Container>
      <div className='form'>
        <AmiableForm transform={transform} initialValues={{ ...initialValues, ...character }} process={onSubmit}>
          <Grid container spacing={3}>
            <Grid container spacing={2}>
              <Grid item {...QUARTER}>
                <DecoratedInput name='name' required />
              </Grid>
              <Grid item {...QUARTER}>
                <DecoratedInput name='bane' randomizer generatorName={generatorName.NOUN} generatorOptions={{ plural: true }} required />
              </Grid>
              <Grid item {...QUARTER}>
                <DecoratedInput name='pronouns' />
              </Grid>
              <Grid item {...QUARTER}>
                <DecoratedInput name='hat' randomizer generatorName={generatorName.HAT} required />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item {...QUARTER}>
                <Stat name='eide' Component={StatInput} />
                <Stat name='flore' Component={StatInput} />
                <Stat name='lore' Component={StatInput} />
                <Stat name='wyrd' Component={StatInput} />
                <Stat name='ability' Component={StatInput} />
              </Grid>
              <Grid item {...QUARTER}>
                <RepeatedField name='bonds' />
                <RepeatedField name='geasa' />
                <RepeatedField name='gifts' />
              </Grid>
              <Grid item {...QUARTER}>
                <RepeatedField name='treasures' max={12} />
                <Arcana />
              </Grid>
              <Grid item {...QUARTER}>
                <Points />
              </Grid>
            </Grid>
            <Grid container justify='flex-end'>
              {id ? <Grid item xs={2}><CancelButton onClick={cancelEditing} /></Grid> : null}
              <Grid item xs={2}>
                <SubmitButton>Submit</SubmitButton>
              </Grid>
            </Grid>
            {/* <Debug /> */}
          </Grid>
        </AmiableForm>
      </div>
    </Container>
  )
}

const cleanValues = values => ({
  ...values,
  bonds: values.bonds.filter(x => x),
  geasa: values.geasa.filter(x => x),
  gifts: values.gifts.filter(x => x),
  treasures: values.treasures.filter(x => x),
  arcana: values.arcana.filter(x => x)
})

const transform = ({ current, next }) => {
  next = calculatePoints({ current, next })
  next = calculateCosts({ current, next })

  return next
}

const calculatePoints = ({ next }) => {
  const { values } = next
  const points = {
    eide: values.eide * 2,
    flore: values.flore * 2,
    lore: values.lore * 2,
    wyrd: values.wyrd * 2,
    ability: values.ability * 3,
    bonds: values.bonds.filter(x => x).length,
    geasa: values.geasa.filter(x => x).length,
    gifts: values.gifts.filter(x => x).length
  }

  points.total = Object.values(points).reduce((total, pt) => total + pt, 0)
  next.values = { ...values, points }
  return next
}

const calculateCosts = ({ next }) => {
  const { values } = next
  const costs = {
    burn: values.wyrd * 10,
    fugue: values.lore * 10,
    immersion: values.flore * 10,
    stilling: values.eide * 10,
    wear: 40
  }

  next.values = { ...values, costs }
  return next
}

const Arcana = () => {
  const flore = useFieldValue({ name: 'flore' })
  return <RepeatedField name='arcana' max={flore + 1} />
}

const Stat = ({ name, label, Component = Input }) => {
  label = labels[name] || name

  return (
    <div className='stat'>
      <InputLabel shrink>{label}</InputLabel>
      <Component name={name} />
    </div>
  )
}

const CancelButton = ({ onClick }) =>
  <Button
    variant='contained'
    color='secondary'
    size='large'
    onClick={onClick}
  >
    Cancel
  </Button>

const SubmitButton = () => {
  const { onSubmit } = useSubmit()
  return (
    <Button
      variant='contained'
      color='primary'
      size='large'
      startIcon={<SaveIcon />}
      onClick={onSubmit}
    >
    Save
    </Button>
  )
}

export default CharacterForm
