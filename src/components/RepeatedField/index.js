import React from 'react'
import { useArrayField } from 'amiable-forms'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import DefaultInput from './DefaultInput'
import * as addLabels from '../../constants/addLabels'

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
      <Button
        style={{ width: '100%' }}
        size='small'
        startIcon={<AddIcon />}
        onClick={add}
      >
        {addLabels[name] || 'Add'}
      </Button>
    </div>
  )
}

export default RepeatedField
