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
    orderID: {
      avartar: tempImg,
      orderID: '32312-IOPIO-52321'
    },
    testee: 'James Bond',
    testDate: '10/25/2020',
    results: 'Negative',
    viewDetails: 'View Details'
  },
  { 
    orderID: {
      avartar: tempImg,
      orderID: '32312-IOPIO-52321'
    },
    testee: 'James Bond',
    testDate: '10/25/2020',
    results: 'Negative',
    viewDetails: 'View Details'
  },
];

const columns = [
  {
    Header: 'Order ID',
    accessor: 'orderId',
    Cell: props => {
      return (
        <div className="test-order">
          <img src={props.row.original.orderID.avartar} alt="" className="table-avatar"/>
          <Text size="small-plus" family="Inter" color="black" className='test-order-id'>{props.row.original.orderID.orderID}</Text> 
        </div>
      )
    }
  },
  {
    Header: 'Testee',
    accessor: 'testee',
  },
  { 
    Header: 'TestDate',
    accessor: 'testDate' // Custom value accessors!
  }, 
  {
    Header: props => <span>Results</span>, // Custom header components!
    accessor: 'results'
  },
  {
    Header: '',
    accessor: 'viewDetails',
    Cell: props => (
      <Link to=""><Text size="small-plus" family="Inter" color="primary">{props.row.original.viewDetails}</Text></Link>
    )
  }
]

const  TestResults = () => {
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
    <div className="custom-table-wrapper">
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

export default TestResults