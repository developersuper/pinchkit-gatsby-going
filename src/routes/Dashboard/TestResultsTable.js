/*@jsx*/ 
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import orderActions from 'redux/actions/order'
import { useTable } from 'react-table';

import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'
import './table.scss'
import tempImg from '../../images/gatsby-astronaut.png'

const data = [
  { 
    test: {
      avartar: tempImg,
      type: 'COVID-19 Antibody Test'
    },
    testDate: '10/25/2020',
    analyte: ['IgM Antibodies', 'IgG Antibodies'],
    qualitative: ['Not Detected', 'Not Detected'],
  },
];

const columns = [
  {
    Header: 'Test',
    accessor: 'test',
    Cell: props => {
      return (
        <div className="test-order">
          <img src={props.row.original.test.avartar} alt="" className="table-avatar"/>
          <Text size="small-plus" family="Inter" color="black" className='test-order-id'>{props.row.original.test.type}</Text> 
        </div>
      )
    }
  },
  { 
    Header: 'TestDate',
    accessor: 'testDate' // Custom value accessors!
  }, 
  {
    Header: 'Analyte', // Custom header components!
    accessor: 'analyte',
    Cell: props => (
      <div>
        {
          props.row.original.analyte.map((item, idx) => (
            <p key={idx} style={{margin: '0px'}}>{item}</p>
          ))
        }
      </div>
    )
  },
  {
    Header: 'Qualitative',
    accessor: 'qualitative',
    Cell: props => (
      <div>
        {
          props.row.original.qualitative.map((item, idx) => (
            <p key={idx} style={{margin: '0px'}}>{item}</p>
          ))
        }
      </div>
    )
  }
]

const  TestResultsTable = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });
  return (
    <div className="custom-table-wrapper" style={{marginBottom: '64px'}}>
      <div className="custom-table">
        <H1 size="large-minus" className="table-title">TestResults</H1>
        <div className="table-wrapper">
          <table {...getTableProps()} className="table">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <hr/>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TestResultsTable