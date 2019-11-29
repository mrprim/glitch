import React, { useCallback } from 'react'
import TextField from '@material-ui/core/TextField'
import { useField } from 'amiable-forms'
import * as labels from '../../constants/labels'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import DiceIcon from '@material-ui/icons/CasinoTwoTone'
import rand from 'random-rpg-stuff'

const DecoratedInput = props => {
  const { value, onChange, setValue } = useField({ name: props.name })
  const label = !props.unlabeled ? props.label || labels[props.name] || props.name : null
  const p = {
    ...cleanProps(props),
    style: { width: '100%' },
    label,
    value,
    onChange,
    InputProps: props.InputProps || (props.randomizer && { endAdornment: <RandomizerAdornment IconComponent={props.AdornmentIcon} generatorName={props.generatorName} setValue={setValue} /> })
  }

  return <TextField {...p} />
}

const cleanProps = props => {
  const p = { ...props }
  delete p.unlabeled
  delete p.randomizer
  delete p.IconComponent
  delete p.generatorName
  return p
}

const RandomizerAdornment = ({ generatorName, setValue, IconComponent = DiceIcon }) => {
  const getRandom = useCallback(() => setValue(rand(generatorName)), [setValue, generatorName])
  return (
    <InputAdornment position='end'>
      <IconButton onClick={getRandom}>
        <IconComponent />
      </IconButton>
    </InputAdornment>
  )
}

export default DecoratedInput
