
import React from 'react'
import DecoratedInput from '../DecoratedInput'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import ClearIcon from '@material-ui/icons/ClearRounded'
import * as labels from '../../constants/labels'
import { indexBeyondMax } from '../../utils/validators'

const RepeatedInputField = ({ index, prefix, remove, name, max }) => {
  const props = {
    label: labels[name] || name,
    name: prefix,
    unlabeled: !!index,
    validators: [indexBeyondMax(index, max)]
  }

  const inputProps = { endAdornment: <CancelAdornment remove={remove} /> }
  return (
    <div>
      <DecoratedInput {...props} name={prefix} InputProps={inputProps} />
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
