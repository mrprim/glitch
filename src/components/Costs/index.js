import React from 'react'
import { useFieldValue } from 'amiable-forms'

const Points = () => {
  const value = useFieldValue({ name: 'costs' })

  return (
    <div>
      <h3>Costs</h3>
      <DisplayLine label='Burn' score={value.burn} />
      <DisplayLine label='Fugue' score={value.fugue} />
      <DisplayLine label='Immersion' score={value.immersion} />
      <DisplayLine label='Stilling' score={value.stilling} />
      <DisplayLine label='Wear' score={value.wear} />
    </div>
  )
}

const DisplayLine = ({ label, score }) =>
  <div>{label} - {score}</div>

export default Points
