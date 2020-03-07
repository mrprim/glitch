import React from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'

const AttributeDescription = ({ name, value, hoverValue }) => {
  return (
    <div className='attribute-description'>
      <Description name={name} value={0} selected={value} hoverValue={hoverValue} />
      <Description name={name} value={1} selected={value} hoverValue={hoverValue} />
      <Description name={name} value={2} selected={value} hoverValue={hoverValue} />
      <Description name={name} value={3} selected={value} hoverValue={hoverValue} />
      <Description name={name} value={4} selected={value} hoverValue={hoverValue} />
      <Description name={name} value={5} selected={value} hoverValue={hoverValue} />
      <Description name={name} value={6} selected={value} hoverValue={hoverValue} />
      <Description name={name} value={7} selected={value} hoverValue={hoverValue} />
    </div>
  )
}

const Description = ({ name, value, selected, hoverValue }) => {
  const { t } = useTranslation()
  const className = value === selected ? 'active' : ''

  return (
    <div className={className}>
      {t(`attributeLevelDescription.${name}_${value}`)}
    </div>
  )
}
export default AttributeDescription
