import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Form, useField } from 'amiable-forms'
import Input from '../Input'
import SubmitButton from '../SubmitButton'
import * as actions from '../../actions'

const CharacterForm = () => {
  const dispatch = useDispatch()

  const onSubmit = useCallback(
    values => dispatch(actions.setCharacter(values)),
    [dispatch]
  )

  return (
    <Form process={onSubmit}>
      <Field label='Name' name='name' />
      <Field label='Gender' name='gender' />
      <Field label='Hat' name='hat' />
      <Score label='Eide' name='eide' />
      <SubmitButton>Submit</SubmitButton>
    </Form>
  )
}

const Field = ({ name, label }) =>
  <div>
    <div>{label}</div>
    <Input name={name} />
  </div>

const Score = ({ name, label }) => {
  const { setValue, value } = useField({ name })

  return <div>{label} <span onClick={() => setValue(100)}>CCC</span> - {value}</div>
}
export default CharacterForm
