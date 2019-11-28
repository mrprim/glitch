import React from 'react'
import { useArrayField } from 'amiable-forms'
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import DefaultInput from './DefaultInput'

const RepeatedField = ({ label, name, Component = DefaultInput }) => {
  const { add, elements } = useArrayField({
    Component,
    name,
    props: {
      placeholder: name
    }
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

export default RepeatedField
