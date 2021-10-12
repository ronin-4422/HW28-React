import React from 'react'
import data from '../info/data'
import TableRow from './table_rows'

export default function Table() {
  return (
  <table>
    <thead>
      <tr>
        <th>
          Name
          </th>
          <th>
            Last Name
          </th>
          <th>
            Working Days 
            </th>
            <th>
              Rate
            </th>
            <th>
              Total
            </th>
        </tr>
    </thead>
    <tbody>
      {data.map((person) => {
        return <TableRow key={person.id} rowData={person} />
        })}
    </tbody>
  </table>
    )
}