import React, { useCallback } from 'react'
import TextField from '@material-ui/core/TextField'
import { useField } from 'amiable-forms'
import * as labels from '../../constants/labels'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import DiceIcon from '@material-ui/icons/CasinoTwoTone'
import rand from 'random-rpg-stuff'
import { required as requiredValidator } from '../../utils/validators'

const DecoratedInput = props => {
  const validators = setupValidators(props)
  const { error, touched, value, onChange, setValue, submitted } = useField({ name: props.name, validators })
  const label = !props.unlabeled ? props.label || labels[props.name] || props.name : null
  const p = {
    ...cleanProps(props),
    style: { width: '100%' },
    label,
    value,
    onChange,
    error: !!((touched || submitted) && error),
    helperText: (touched || submitted) && error,
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
  delete p.validators
  delete p.required
  return p
}

const setupValidators = ({ validators, required }) => {
  const v = validators || []
  if (required) {
    v.push(requiredValidator)
  }
  return v
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
