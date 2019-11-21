import React from 'react'
import TextField from '@material-ui/core/TextField'
import { useField } from 'amiable-forms'

const DecoratedInput = props => {
  const { value, onChange } = useField({ name: props.name })
  return <TextField {...props} value={value} onChange={onChange} />
}

export default DecoratedInput
