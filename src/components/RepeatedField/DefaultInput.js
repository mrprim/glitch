
import React from 'react'
import DecoratedInput from '../DecoratedInput'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import ClearIcon from '@material-ui/icons/Clear'

const RepeatedInputField = ({ prefix, remove, placeholder }) => {
  const inputProps = { endAdornment: <CancelAdornment remove={remove} /> }
  return (
    <div>
      <DecoratedInput name={prefix} placeholder={placeholder} InputProps={inputProps} />
    </div>
  )
}

const CancelAdornment = ({ remove }) =>
  <InputAdornment position='end'>
    <IconButton onClick={remove}>
      <ClearIcon />
    </IconButton>
  </InputAdornment>

export default RepeatedInputField
