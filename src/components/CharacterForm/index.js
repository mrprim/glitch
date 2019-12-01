import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { Form, useSubmit } from 'amiable-forms'
import Input from '../Input'
import * as actions from '../../actions'
import StatInput from '../StatInput'
import DecoratedInput from '../DecoratedInput'
import InputLabel from '@material-ui/core/InputLabel'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import Points from '../Points'
import Costs from '../Costs'
import RepeatedField from '../RepeatedField'
import putCharacter from '../../async/putCharacter'
import postCharacter from '../../async/postCharacter'
import * as labels from '../../constants/labels'
import './index.css'
import useAsyncOps from '../../hooks/useAsyncOps'
import useCharacter from '../../hooks/useCharacter'

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
  gifts: [null]
})

const CharacterForm = ({ id, setIsEditing }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { loading } = useAsyncOps('loadCharacter')
  const character = useCharacter(id)
  const cancelEditing = useCallback(() => setIsEditing(false), [setIsEditing])

  const onSubmit = useCallback(
    async values => {
      if (id) {
        console.log('ID', id)
        console.log('VALUES', values)
        if (values) {
          await postCharacter(id, values)
          await dispatch(actions.setCharacter(id, values))
        }
        cancelEditing()
      } else {
        const newId = await putCharacter(values)
        history.push('/character/' + newId)
      }
    },
    [dispatch, id, history, cancelEditing]
  )

  if (loading) return null

  return (
    <Form transform={transform} initialValues={{ ...initialValues, ...character }} process={onSubmit}>
      <Grid container spacing={3}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <DecoratedInput name='name' required />
          </Grid>
          <Grid item xs={4}>
            <DecoratedInput name='pronouns' />
          </Grid>
          <Grid item xs={4}>
            <DecoratedInput name='hat' randomizer generatorName='hat' required />
          </Grid>
          <Grid item xs={4}>
            <Stat name='eide' Component={StatInput} />
            <Stat name='flore' Component={StatInput} />
            <Stat name='lore' Component={StatInput} />
            <Stat name='wyrd' Component={StatInput} />
            <Stat name='ability' Component={StatInput} />
          </Grid>
          <Grid item xs={4}>
            <RepeatedField name='bonds' />
            <RepeatedField name='geasa' />
            <RepeatedField name='gifts' />
          </Grid>
          <Grid item xs={4}>
            <Costs />
            <Points />
          </Grid>

          <Grid item xs={12}>
            {id ? <CancelButton onClick={cancelEditing} /> : null}
            <SubmitButton>Submit</SubmitButton>
          </Grid>
        </Grid>

        {/* <Debug /> */}
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
