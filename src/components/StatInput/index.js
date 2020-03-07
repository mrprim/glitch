import React, { useState } from 'react'
import { useField } from 'amiable-forms'
import StarIcon from '@material-ui/icons/GradeTwoTone'
import Tooltip from '@material-ui/core/Tooltip'
import './index.css'
import { useTranslation } from 'react-i18next'

const DEFAULT_MAX = 7

const StatInput = ({ name, max }) => {
  const { setValue, value } = useField({ name })
  const [hoverValue, setHoverValue] = useState(0)
  const length = max || DEFAULT_MAX

  return (
    <>
      {Array.from({ length }, (x, i) => <Dot key={i} value={i + 1} name={name} fieldValue={value} setValue={setValue} hoverValue={hoverValue} setHoverValue={setHoverValue} />)}
    </>
  )
}

const Dot = ({ name, value, fieldValue, setValue, hoverValue, setHoverValue }) => {
  const { t } = useTranslation()
  const onClick = () => {
    if (fieldValue === 1 && value === 1) {
      setValue(0)
      return
    }
    setValue(value)
  }

  return (
    <span onClick={onClick} onMouseOver={() => setHoverValue(value)} onMouseLeave={() => setHoverValue(0)}>
      <Tooltip title={t(`attributeLevelName.${name}_${hoverValue || 0}`)}>
        <StarIcon className={getDotClasses(value, fieldValue, hoverValue)} />
      </Tooltip>
    </span>
  )
}

const getDotClasses = (value, fieldValue, hoverValue) => {
  const classes = ['dot']
  if (fieldValue < value) {
    classes.push('unselected')
  } else {
    classes.push('selected')
  }
  if (hoverValue < value) {
    classes.push('unhovered')
  } else {
    classes.push('hovered')
  }

  return classes.join(' ')
}

export default StatInput
