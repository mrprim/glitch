import firebase from 'firebase'

export default async ({ displayName }) => {
  const user = firebase.auth().currentUser

  await user.updateProfile({ displayName })
}
