import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useSubmit, Form } from 'amiable-forms'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DecoratedInput from '../DecoratedInput'
import { useAsyncOps } from '../../async-ops'
import * as asyncTypes from '../../constants/asyncTypes'
import './index.scss'

const UserUpdateForm = () => {
  const user = useSelector(s => s.user)
  const { call } = useAsyncOps({ name: asyncTypes.POST_USER })
  const onSubmit = useCallback(values => {
    const data = {
      displayName: values.displayName
    }

    call(user.uid, data)
  }, [user.uid, call])
  return (
    <Form initialValues={{ ...user }} process={onSubmit}>
      <Grid container justify='center' spacing={3}>
        <Grid item xs={4}>
          <DecoratedInput name='displayName' required />
        </Grid>
      </Grid>
      <Grid container justify='center' spacing={3}>
        <Grid item xs={4}>
          <SaveButton />
        </Grid>
      </Grid>
    </Form>
  )
}

const SaveButton = () => {
  const { onSubmit } = useSubmit()
  return (
    <Button
      variant='contained'
      color='primary'
      size='large'
      startIcon={<SaveIcon />}
      onClick={onSubmit}
    >Save
    </Button>
  )
}
export default UserUpdateForm
