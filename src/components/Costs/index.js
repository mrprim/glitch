import React from 'react'
import { useFieldValue } from 'amiable-forms'
import './index.css'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const Points = () => {
  const value = useFieldValue({ name: 'costs' })

  return (
    <div className='costs-container'>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>
            Costs
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <DisplayLine label='Burn' score={value.burn} />
          <DisplayLine label='Fugue' score={value.fugue} />
          <DisplayLine label='Immersion' score={value.immersion} />
          <DisplayLine label='Stilling' score={value.stilling} />
          <DisplayLine label='Wear' score={value.wear} />
        </TableBody>
      </Table>
    </div>
  )
}

const DisplayLine = ({ label, score }) =>
  <TableRow>
    <TableCell>{label}</TableCell>
    <TableCell>{score}</TableCell>
  </TableRow>

export default Points
