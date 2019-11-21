import React from 'react'
import { useSubmit } from 'amiable-forms'

const SubmitButton = props => {
  const { onSubmit } = useSubmit()
  return <button {...props} onClick={onSubmit}>{props.children}</button>
}

export default SubmitButton
