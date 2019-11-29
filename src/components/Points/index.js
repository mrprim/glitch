import React from 'react'
import { useFieldValue } from 'amiable-forms'
import './index.css'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'

const Points = () => {
  const value = useFieldValue({ name: 'points' })

  return (
    <Table className='points-container'>
      <TableHead>
        <TableRow>
          <TableCell colSpan={2}>
          Points
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <DisplayLine label='Eide' points={value.eide} />
        <DisplayLine label='Flore' points={value.flore} />
        <DisplayLine label='Lore' points={value.lore} />
        <DisplayLine label='Wyrd' points={value.wyrd} />
        <DisplayLine label='Ability' points={value.ability} />
        <DisplayLine label='Bonds' points={value.bonds} />
        <DisplayLine label='Geasa' points={value.geasa} />
        <DisplayLine label='Gifts' points={value.gifts} />
      </TableBody>
      <TableFooter>
        <TotalLine points={value.total} />
      </TableFooter>
    </Table>
  )
}

const DisplayLine = ({ label, points }) => {
  if (!points) {
    return null
  }

  return (
    <TableRow>
      <TableCell>{label}</TableCell>
      <TableCell>{points}</TableCell>
    </TableRow>
  )
}

const TotalLine = ({ label, points }) => {
  return (
    <TableRow>
      <TableCell>Total</TableCell>
      <TableCell>{points}pts</TableCell>
    </TableRow>
  )
}

export default Points
