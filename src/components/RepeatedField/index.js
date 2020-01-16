import React from 'react'
import { useArrayField } from 'amiable-forms'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import DefaultInput from './DefaultInput'
import * as addLabels from '../../constants/addLabels'
import './index.scss'

const RepeatedField = ({ label, name, Component = DefaultInput, max }) => {
  const { add, elements } = useArrayField({
    Component,
    name,
    props: {
      name,
      max
    }
  })

  return (
    <div className='repeated-field'>
      {elements}
      {!max || elements.length < max ? <AddButton name={name} add={add} /> : null}
    </div>
  )
}

const AddButton = ({ add, name }) =>
  <Button size='small' startIcon={<AddIcon />} onClick={add}>
    {addLabels[name] || 'Add'}
  </Button>

export default RepeatedField
