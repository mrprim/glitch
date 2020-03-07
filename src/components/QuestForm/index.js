import React, { useCallback } from 'react'
import { AmiableForm, useSubmit } from 'amiable-forms'
import DecoratedInput from '../DecoratedInput'
import Container from '@material-ui/core/Container'
import MenuItem from '@material-ui/core/MenuItem'
import RepeatedField from '../RepeatedField'
import './index.scss'

const QuestForm = ({ id }) => {
  const onSubmit = useCallback(
    async values => {},
    []
  )

  return (
    <Container>
      <div className='form'>
        <AmiableForm process={onSubmit}>
          <DecoratedInput name='name' />
          <DecoratedInput name='color' select>
            <MenuItem value='purple'>Purple</MenuItem>
            <MenuItem value='silver'>Silver</MenuItem>
            <MenuItem value='blue'>Blue</MenuItem>
          </DecoratedInput>
          <RepeatedField name='major' />
          <RepeatedField name='flavor' />
        </AmiableForm>
      </div>
    </Container>
  )
}

export default QuestForm
