import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { useTranslation } from 'react-i18next'
import { AmiableForm, useSubmit } from 'amiable-forms'
import StatInput from '../StatInput'
import AttributeDescription from '../AttributeDescription'
import DecoratedInput from '../DecoratedInput'
import InputLabel from '@material-ui/core/InputLabel'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import Points from '../Points'
import RepeatedField from '../RepeatedField'
import './index.scss'
import useAsyncOps from '../../async-ops/useAsyncOps'
import useCharacter from '../../hooks/useCharacter'
import * as asyncTypes from '../../constants/asyncTypes'
import { names as generatorName, formatters } from 'random-rpg-stuff'
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
  arcana: [null],
  levers: [null]
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
        history.push('/characters/' + newId)
      }
    },
    [id, history, cancelEditing, uid, callPutCharacter, callPostCharacter]
  )

  if (loading) return null

  return (
    <Container>
      <div className='form'>
        <AmiableForm transform={transform} initialValues={{ ...initialValues, ...character }} process={onSubmit}>
          <DecoratedInput name='name' required />
          <DecoratedInput name='bane' randomizer={{ name: generatorName.NOUN, options: { format: [formatters.pluralize, formatters.toLowerCase] } }} required />
          <DecoratedInput name='pronouns' />
          <DecoratedInput name='hat' randomizer={{ name: generatorName.HAT }} required />
          <DecoratedInput name='sanctuary' />
          <DecoratedInput name='technique' randomizer={{ name: [generatorName.JOB, generatorName.CLASS], options: { format: formatters.toLowerCase } }} />
          <DecoratedInput name='sphere' randomizer={{ name: generatorName.NOUN, options: { format: formatters.pluralize } }} />
          <DecoratedInput name='destruction' />
          <Stat name='ability' />
          <Stat name='eide' />
          <Stat name='flore' />
          <Stat name='lore' />
          <Stat name='wyrd' />
          <RepeatedField name='bonds' />
          <RepeatedField name='geasa' />
          <RepeatedField name='gifts' />
          <Treasures />
          <RepeatedField name='arcana' max={12} />
          <RepeatedField name='levers' max={3} />
          <Points />
          {id ? <CancelButton onClick={cancelEditing} /> : null}
          <SubmitButton>Submit</SubmitButton>
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

const Treasures = () => {
  const flore = useFieldValue({ name: 'flore' })
  return <RepeatedField name='treasures' max={flore + 1} />
}

const Stat = ({ name, label, Component = StatInput }) => {
  const value = useFieldValue({ name })
  const { t } = useTranslation()

  return (
    <div className='stat'>
      <InputLabel shrink>{t(label || `label.${name}`)}</InputLabel>
      <Component name={name} />
      <AttributeDescription name={name} value={value} />
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
