export default char => {
  let rslt = ''

  rslt += `${b('Eide')} - ${char.eide}`
  rslt += `${b('Eide')} - ${char.eide}`
  rslt += `${b('Eide')} - ${char.eide}`
  rslt += `${b('Eide')} - ${char.eide}`
  rslt += `${b('Eide')} - ${char.eide}`
  rslt += `${b('Eide')} - ${char.eide}`
  rslt += `${b('Eide')} - ${char.eide}`
  rslt += `${b('Eide')} - ${char.eide}`
  rslt += `${b('Eide')} - ${char.eide}`
  rslt += `${b('Eide')} - ${char.eide}`
  rslt += `${b('Eide')} - ${char.eide}`
  rslt += `${b('Eide')} - ${char.eide}`

  return rslt
}

const wrap = (elementName, value) => `[${elementName}]${value}[/${elementName}]`

const b = value => wrap('b', value)
// const i = value => wrap('i', value)
// const u = value => wrap('u', value)
// const li = value => wrap('li', value)
