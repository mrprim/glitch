import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { useAsyncOps } from '../../async-ops'
import * as asyncTypes from '../../constants/asyncTypes'
import charactersSelector from '../../selectors/characters'
import aAn from '../../utils/aAn'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import './index.scss'

const CharacterManifest = ({ limit }) => {
  const { uid } = useSelector(s => s.user)
  const characters = useSelector(charactersSelector)

  const { loading, call } = useAsyncOps({ name: asyncTypes.GET_CHARACTERS })

  useEffect(() => { call({ limit }) }, [call, uid, limit])

  return <Characters loading={loading} characters={characters} uid={uid} />
}

const Characters = ({ characters, uid }) => characters.map(c => <Character key={c.id} {...c} uid={uid} />)

const Character = ({ uid, name, hat, bane, id, createdBy }) =>
  <Link to={`./character/${id}`} className='character'>
    <Paper className='character-body'>
      <Grid container alignItems='center'>
        <Grid item xs={10}>
          <div className='character-name'>{name}</div>
          <div className='character-hat'>who wears {aAn(hat)} <i>{hat}</i></div>
          <div className='character-bane'>who is dying of <i>{bane || '?'}</i></div>
        </Grid>
        <Grid item xs={2} className='icon-section'>
          {uid && createdBy === uid ? <FavoriteRoundedIcon fontSize='large' /> : null}
        </Grid>
      </Grid>
    </Paper>
  </Link>

export default CharacterManifest
