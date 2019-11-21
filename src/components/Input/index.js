import React from 'react'
import { useField } from 'amiable-forms'

const Input = props => {
  const { value, onChange } = useField({ name: props.name })
  return <input {...props} value={value} onChange={onChange} />
}

export default Input
