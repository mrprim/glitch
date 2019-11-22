import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Form, useFieldValue, useRepeatedField } from 'amiable-forms'
import Input from '../Input'
import SubmitButton from '../SubmitButton'
import * as actions from '../../actions'
import StatInput from '../StatInput'
import DecoratedInput from '../DecoratedInput'
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormHelperText from '@material-ui/core/FormHelperText'
import * as statLevels from '../../constants/statLevels'
import ClearIcon from '@material-ui/icons/Clear'
import AddIcon from '@material-ui/icons/Add'

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

      <RepeatedField label='Bonds' name='bond' Component={BondInput} />
      <RepeatedField label='Geasa' name='geas' Component={BondInput} />
      <RepeatedField label='Gifts' name='gift' Component={BondInput} />

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

const RepeatedField = ({ label, name, Component = Input }) => {
  const { add, elements } = useRepeatedField({
    Component,
    prefix: name,
    placeholder: name
  })

  return (
    <div>
      <InputLabel shrink>
        {label} <IconButton onClick={add}><AddIcon fontSize='small' /></IconButton>
      </InputLabel>
      {elements}
    </div>
  )
}

const BondInput = ({ prefix, remove }) =>
  <div>
    <DecoratedInput name={prefix} placeholder='test' InputProps={{ endAdornment: <CancelAdornment remove={remove} /> }} />
  </div>

const CancelAdornment = ({ remove }) =>
  <InputAdornment position='end'>
    <IconButton onClick={remove}>
      <ClearIcon />
    </IconButton>
  </InputAdornment>

export default CharacterForm
