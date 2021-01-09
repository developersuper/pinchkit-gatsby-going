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
import tempImg from '../../images/gatsby-astronaut.png'
import ActiveOrdersTable from './ActiveOrdersTable'
import PreviousOrdersTable from './PreviousOrdersTable'

const  Orders = () => {
  return (
    <div>
      <div style={{marginBottom: '32px'}}>
        <ActiveOrdersTable />
      </div>
      <div style={{marginBottom: '32px'}}>
        <PreviousOrdersTable />
      </div>
    </div>
  )
}

export default Orders