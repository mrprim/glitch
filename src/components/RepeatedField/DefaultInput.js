
import React from 'react'
import DecoratedInput from '../DecoratedInput'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import ClearIcon from '@material-ui/icons/ClearRounded'
import { useTranslation } from 'react-i18next'
import { indexBeyondMax } from '../../utils/validators'

const RepeatedInputField = ({ index, prefix, remove, name, max }) => {
  const { t } = useTranslation()
  const props = {
    label: t(`label.${name}`),
    name: prefix,
    unlabeled: !!index,
    validators: [indexBeyondMax(index, max)]
  }

  const inputProps = { endAdornment: <CancelAdornment remove={remove} /> }
  return (
    <div>
      <DecoratedInput {...props} shrink name={prefix} InputProps={inputProps} />
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
