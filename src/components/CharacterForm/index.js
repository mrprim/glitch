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

const CharacterForm = () => {
  const dispatch = useDispatch()

  const onSubmit = useCallback(
    values => dispatch(actions.setCharacter(values)),
    [dispatch]
  )

  return (
    <Form process={onSubmit}>
      <DecoratedInput label='Name' name='name' />
      <DecoratedInput label='Pronouns' name='pronouns' />
      <DecoratedInput label='Hat' name='hat' />

      <Stat label='Eide' name='eide' Component={StatInput} />
      <Stat label='Flore' name='flore' Component={StatInput} />
      <Stat label='Lore' name='lore' Component={StatInput} />
      <Stat label='Wyrd' name='wyrd' Component={StatInput} />
      <Stat label='Ability' name='ability' Component={StatInput} />

      <SubmitButton>Submit</SubmitButton>
    </Form>
  )
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
