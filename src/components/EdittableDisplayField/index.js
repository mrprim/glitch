import React, { useState, useCallback } from 'react'
import { AmiableForm, useField } from 'amiable-forms'
import DecoratedInput from '../DecoratedInput'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import ClearIcon from '@material-ui/icons/ClearRounded'
import EditIcon from '@material-ui/icons/EditRounded'
import CheckIcon from '@material-ui/icons/CheckRounded'
import DiceIcon from '@material-ui/icons/CasinoTwoTone'
import rand from 'random-rpg-stuff'
import { useTranslation } from 'react-i18next'
import './index.scss'
import useSubmit from 'amiable-forms/dist/hooks/useSubmit'

const EdittableDisplayField = props => {
  const [mode, setMode] = useState('display')

  if (props.loading) {
    return <LoadingMode {...props} />
  } else if (mode === 'edit') {
    return <FormMode {...props} setMode={setMode} />
  } else {
    return <DisplayMode {...props} setMode={setMode} />
  }
}

const LoadingMode = props => {
  const { t } = useTranslation()
  const p = {
    ...props,
    label: !props.unlabeled ? t(props.label || `label.${props.name}`) : null,
    InputLabelProps: { shrink: true },
    disabled: true,
    helperText: ' '
  }

  return <TextField className='edittable-display-field-loading' {...p} />
}

const DisplayMode = props => {
  const { t } = useTranslation()
  const p = {
    ...props,
    label: !props.unlabeled ? t(props.label || `label.${props.name}`) : null,
    InputProps: { endAdornment: <DisplayAdornment setMode={props.setMode} /> },
    InputLabelProps: { shrink: true },
    disabled: true,
    helperText: ' '
  }

  return <TextField className='edittable-display-field-display' {...p} />
}

const FormMode = props => {
  return (
    <AmiableForm initialValues={{ [props.name]: props.value }} process={props.submit}>
      <Field {...props} className='edittable-display-field-edit' />
    </AmiableForm>
  )
}

const Field = props => {
  const { setValue } = useField({ name: props.name })
  const inputProps = { endAdornment: <EditAdornment setMode={props.setMode} randomizer={props.randomizer} setValue={setValue} /> }

  return <DecoratedInput shrink {...props} InputProps={inputProps} />
}

const DisplayAdornment = ({ setMode }) => {
  const editClick = useCallback(() => setMode('edit'), [setMode])
  return (
    <InputAdornment position='end'>
      <IconButton onClick={editClick}>
        <EditIcon />
      </IconButton>
    </InputAdornment>
  )
}

const EditAdornment = ({ setMode, randomizer, setValue }) => {
  const { submit } = useSubmit()
  const saveClick = useCallback(values => {
    submit(values)
    setMode('display')
  }, [setMode, submit])

  const getRandom = useCallback(() => {
    const val = rand(randomizer.name, randomizer.options)
    setValue(val)
  }, [setValue, randomizer])

  return (
    <InputAdornment position='end'>
      {randomizer ? <RandomAdornament getRandom={getRandom} /> : null}
      <IconButton className='cancel' onClick={setMode}>
        <ClearIcon />
      </IconButton>
      <IconButton className='save' onClick={saveClick}>
        <CheckIcon />
      </IconButton>
    </InputAdornment>
  )
}

const RandomAdornament = ({ getRandom }) =>
  <IconButton onClick={getRandom}>
    <DiceIcon />
  </IconButton>

export default EdittableDisplayField
