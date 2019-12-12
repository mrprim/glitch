import { useEffect } from 'react'
import { useAsyncOps } from '../../async-ops'
import * as asyncTypes from '../../constants/asyncTypes'
import firebase from 'firebase'

export default () => {
  const { call } = useAsyncOps({ name: asyncTypes.GET_USER })

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => call(user && user.uid))
  }, [call])
}
