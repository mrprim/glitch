import React from 'react'
import { useFieldValue } from 'amiable-forms'

const Points = () => {
  const value = useFieldValue({ name: 'points' })

  return (
    <div>
      <h3>POINTS</h3>
      <DisplayLine label='Eide' points={value.eide} />
      <DisplayLine label='Flore' points={value.flore} />
      <DisplayLine label='Lore' points={value.lore} />
      <DisplayLine label='Wyrd' points={value.wyrd} />
      <DisplayLine label='Ability' points={value.ability} />
      <DisplayLine label='Bonds' points={value.bonds} />
      <DisplayLine label='Geasa' points={value.geasa} />
      <DisplayLine label='Gifts' points={value.gifts} />
      <TotalLine points={value.total} />
    </div>
  )
}

const DisplayLine = ({ label, points }) => {
  if (!points) {
    return null
  }

  return <div>{label} - {points}</div>
}

const TotalLine = ({ label, points }) => {
  return <div>{points} pts</div>
}

export default Points
