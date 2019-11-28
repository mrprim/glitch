const parse = async snapshotPromise => {
  const snapshot = await snapshotPromise

  if (snapshot.empty) return {}

  const rslt = {}
  snapshot.forEach(doc => {
    rslt[doc.id] = doc.data()
  })

  return rslt
}

export default parse
