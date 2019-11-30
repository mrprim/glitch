import React from 'react'
import { useArrayField } from 'amiable-forms'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import DefaultInput from './DefaultInput'

const RepeatedField = ({ label, name, Component = DefaultInput }) => {
  const { add, elements } = useArrayField({
    Component,
    name,
    props: {
      name
    }
  })

  return (
    <div className='repeated-field'>
      {elements}
      <IconButton onClick={add}>
        <AddIcon />
      </IconButton>
    </div>
  )
}

export default RepeatedField
