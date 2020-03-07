import React, { useCallback } from 'react'
import TextField from '@material-ui/core/TextField'
import { useField } from 'amiable-forms'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import DiceIcon from '@material-ui/icons/CasinoTwoTone'
import rand from 'random-rpg-stuff'
import { required as requiredValidator } from '../../utils/validators'
import { useTranslation } from 'react-i18next'

const DecoratedInput = props => {
  const { t } = useTranslation()
  const validators = setupValidators(props)
  const { error, touched, value, onChange, setValue, submitted } = useField({ name: props.name, validators })
  const label = !props.unlabeled ? t(props.label || `label.${props.name}`) : null
  const p = {
    ...cleanProps(props),
    style: { width: '100%' },
    label,
    value,
    onChange,
    error: !!((touched || submitted) && error),
    helperText: ((touched || submitted) && error) || ' ',
    InputLabelProps: { shrink: props.shrink },
    InputProps: props.InputProps || (props.randomizer && { endAdornment: <RandomizerAdornment IconComponent={props.AdornmentIcon} randomizer={props.randomizer} setValue={setValue} /> })
  }

  return <TextField {...p}>{props.children}</TextField>
}

const cleanProps = props => {
  const p = { ...props }
  delete p.unlabeled
  delete p.randomizer
  delete p.IconComponent
  delete p.generatorName
  delete p.validators
  delete p.required
  delete p.generatorOptions
  delete p.shrink
  return p
}

const setupValidators = ({ validators, required }) => {
  const v = validators || []
  if (required) {
    v.push(requiredValidator)
  }
  return v
}

const RandomizerAdornment = ({ randomizer, setValue, IconComponent = DiceIcon }) => {
  const getRandom = useCallback(() => {
    const val = rand(randomizer.name, randomizer.options)
    setValue(val)
  }, [setValue, randomizer])
  return (
    <InputAdornment position='end'>
      <IconButton onClick={getRandom}>
        <IconComponent />
      </IconButton>
    </InputAdornment>
  )
}

export default DecoratedInput
