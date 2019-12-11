import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../../actions'
import firebase from 'firebase'

export default () => {
  const dispatch = useDispatch()

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => dispatch(setUser(user || {})))
  }, [dispatch])
}
