import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Form, useFieldValue } from 'amiable-forms'
import Input from '../Input'
import SubmitButton from '../SubmitButton'
import * as actions from '../../actions'
import StatInput from '../StatInput'
import DecoratedInput from '../DecoratedInput'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import * as statLevels from '../../constants/statLevels'
import Grid from '@material-ui/core/Grid'
import Points from '../Points'
import Costs from '../Costs'
import RepeatedField from '../RepeatedField'

const initialValues = ({
  eide: 0,
  flore: 0,
  lore: 0,
  wyrd: 0,
  ability: 0,
  bonds: [],
  geasa: [],
  gifts: []
})

const CharacterForm = () => {
  const dispatch = useDispatch()

  const onSubmit = useCallback(
    values => dispatch(actions.setCharacter(values)),
    [dispatch]
  )

  return (
    <Form transform={transform} initialValues={initialValues} process={onSubmit}>
      <Grid container justify='center' spacing={3}>
        <Grid container spacing={2} justify='center'>
          <Grid item xs={12}>
            <DecoratedInput label='Name' name='name' />
          </Grid>
          <Grid item xs={6}>
            <DecoratedInput label='Pronouns' name='pronouns' />
          </Grid>
          <Grid item xs={6}>
            <DecoratedInput label='Hat' name='hat' />
          </Grid>
          <Grid item xs={6}>
            <Stat label='Eide' name='eide' Component={StatInput} />
            <Stat label='Flore' name='flore' Component={StatInput} />
            <Stat label='Lore' name='lore' Component={StatInput} />
            <Stat label='Wyrd' name='wyrd' Component={StatInput} />
            <Stat label='Ability' name='ability' Component={StatInput} />
            <RepeatedField label='Bonds' name='bonds' />
            <RepeatedField label='Geasa' name='geasa' />
            <RepeatedField label='Gifts' name='gifts' />
          </Grid>
          <Grid item xs={6}>
            <Costs />
            <Points />
          </Grid>
        </Grid>

        <SubmitButton>Submit</SubmitButton>
      </Grid>
    </Form>
  )
}

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
    bonds: (values.bonds).length,
    geasa: (values.geasa).length,
    gifts: (values.gifts).length
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

const Stat = ({ name, label, Component = Input }) => {
  const val = useFieldValue({ name })
  return (
    <div>
      <InputLabel shrink>{label}</InputLabel>
      <Component name={name} />
      <FormHelperText>{statLevels[name][val || 0].description}</FormHelperText>
    </div>
  )
}

export default CharacterForm
