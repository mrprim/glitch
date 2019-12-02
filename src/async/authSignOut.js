import firebase from 'firebase'

export default async () => {
  await firebase.auth().signOut()
}
