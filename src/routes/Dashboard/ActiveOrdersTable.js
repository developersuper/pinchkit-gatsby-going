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
import copyIcon from '../../images/icon/copyIcon.png'

const data = [
  { 
    testeeDetail: {
      avartar: tempImg,
      name: 'Sam Jones',
      kit: '2312123312',
    },
    orderPlaced: '10/25/2020',
    total: '$65',
    shipTo: '123 Street Dr',
    status: 'Shipped',
    orderID: '32312-IOPIO-52321',
  },
  {
    testeeDetail: {
      avartar: tempImg,
      name: 'Sam Jones',
      kit: '2312123312',
      test: ''
    },
    orderPlaced: '10/25/2020',
    total: '$65',
    shipTo: '123 Street Dr',
    status: 'Processing',
    orderID: '32312-IOPIO-52321',
  }
];

const columns = [
  {
    Header: 'Testee Details',
    accessor: 'testeeDetail',
    Cell: props => {
      return (
        <div className="active-order-testee">
          <img src={props.row.original.testeeDetail.avartar} alt="" className="table-avatar"/>
          <div className="active-order-testee-text">
            <H1
              size="medium"
              family="Inter"
            >
              {props.row.original.testeeDetail.name}
            </H1>
            <Text 
              size="small" 
              family="Inter" 
              color="black" 
              className='test-order-id'
            >
              <span className="active-order-kit">Kit#</span>
              {props.row.original.testeeDetail.kit}
            </Text>
          </div>
        </div>
      )
    }
  },
  {
    Header: 'Order placed',
    accessor: 'orderPlaced',
  },
  { 
    Header: 'Total',
    accessor: 'total' // Custom value accessors!
  }, 
  { 
    Header: 'Ship to',
    accessor: 'shipTo' // Custom value accessors!
  },
  { 
    Header: 'Status',
    accessor: 'status',
    Cell: props => {
      if(props.row.original.status === 'Shipped'){
        return (
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <Text size="small" family="Inter" color="black">Shipped</Text>
            <Text size="small-plus" family="Inter" color="primary">Track</Text>
          </div>
        )
      }
      return (
        <Text size="small" family="Inter" color="black">Processing</Text>
      )
    }
  },
  {
    Header: 'Order ID#',
    accessor: 'results',
    Cell: props => {
      return (
        <div className="order-id-wrapper">
          <div className="order-id">
            <Text size="small" family="Inter" color="black">{props.row.original.orderID}</Text>
            <Link><Text size="small-plus" family="Inter" color="primary">View Barcode</Text></Link>
          </div>
          <span className="copy-icon"><img src={copyIcon} alt=""/></span>
        </div>
      )
    }
  },
]

const  ActiveOrdersTable = () => {
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
        <H1 size="large-minus" className="table-title">Active Orders</H1>
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

export default ActiveOrdersTable