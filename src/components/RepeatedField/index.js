import React from 'react'
import { useArrayField } from 'amiable-forms'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import DefaultInput from './DefaultInput'
import { useTranslation } from 'react-i18next'
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

const AddButton = ({ add, name }) => {
  const { t } = useTranslation()

  return (
    <Button size='small' startIcon={<AddIcon />} onClick={add}>
      {t(`addItem.${name}`)}
    </Button>
  )
}
export default RepeatedField
