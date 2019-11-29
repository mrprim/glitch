import React from 'react'
import { useArrayField } from 'amiable-forms'
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import DefaultInput from './DefaultInput'
import * as labels from '../../constants/labels'
import './index.css'

const RepeatedField = ({ label, name, Component = DefaultInput }) => {
  label = label || labels[name] || name
  const { add, elements } = useArrayField({
    Component,
    name
  })

  return (
    <div className='repeated-field'>
      <InputLabel shrink>
        {label}
      </InputLabel>
      {elements}
      <IconButton onClick={add}>
        <AddIcon />
      </IconButton>
    </div>
  )
}

export default RepeatedField
