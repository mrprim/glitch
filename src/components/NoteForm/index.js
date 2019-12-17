import React, { useCallback } from 'react'
import { Form, useSubmit } from 'amiable-forms'
import DecoratedInput from '../DecoratedInput'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import { useAsyncOps } from '../../async-ops'
import * as asyncTypes from '../../constants/asyncTypes'
import './index.css'

const NoteForm = ({ characterId, setIsEditing }) => {
  const { call: callPostCharacter } = useAsyncOps({ name: asyncTypes.POST_CHARACTER })

  const onSubmit = useCallback(
    async values => {
      callPostCharacter(characterId, values)
    },
    [characterId, callPostCharacter]
  )

  return (
    <Form process={onSubmit}>
      <Grid container spacing={3} >
        <Grid item>
          <DecoratedInput name='notes' required />
        </Grid>
        <Grid item>
          <SubmitButton>Submit</SubmitButton>
        </Grid>
      </Grid>
    </Form>
  )
}

const SubmitButton = () => {
  const { onSubmit } = useSubmit()
  return (
    <Button
      variant='contained'
      color='primary'
      size='large'
      startIcon={<SaveIcon />}
      onClick={onSubmit}
    >
    Save
    </Button>
  )
}

export default NoteForm
