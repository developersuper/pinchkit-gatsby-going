/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import orderActions from 'redux/actions/order'
import H1 from 'elements/H1'

import './index.scss'
import imgAddNewKit from '../../images/icon/addNewKit.png'
import imgAddNewKitActive from '../../images/icon/addNewKitActive.png'
import imgOrders from '../../images/icon/orders.png'
import imgOrdersActive from '../../images/icon/ordersActive.png'
import imgTestResults from '../../images/icon/testResults.png'
import imgTestResultsActive from '../../images/icon/testResultsActive.png'
import AddNewKit from './AddNewKit'
import Orders from './Orders'
import TestResults from './TestResults'


const LeftTag = ({imgSrc, title, active, ...rest}) => {
  return (
    <div className={active} {...rest}>
      <img src={active === 'each-tag' ? imgSrc[0] : imgSrc[1]} alt="" />
      <H1 size="small-plus" family="Inter">{title}</H1>
    </div>
  )
}

const  MainBlock = () => {
  const [tag, setTag] = useState('addNewKit')

  const selectTag = () => {
    if(tag === 'orders'){
      return <Orders />
    }
    if(tag === 'testResults'){
      return <TestResults />
    }
    return <AddNewKit />
  }

  return (
    <div sx={{ backgroundColor: '#f9f9f9'}}>
      <div className="main-block">
        <div className="left-part">
          <H1 size="medium-plus" className="left-title">Welcome</H1>
          <LeftTag 
            onClick={() => setTag('addNewKit')}
            title="Order a new kit" 
            active={ tag === 'addNewKit' ? 'each-tag-active' : 'each-tag'}
            imgSrc={[imgAddNewKit, imgAddNewKitActive]}
          />
          <LeftTag 
            onClick={() => setTag('orders')}
            title="Orders"
            active={ tag === 'orders' ? 'each-tag-active' : 'each-tag'} 
            imgSrc={[imgOrders, imgOrdersActive]}
          />
          <LeftTag 
            onClick={() => setTag('testResults')}
            title="Test results" 
            active={ tag === 'testResults' ? 'each-tag-active' : 'each-tag'}
            imgSrc={[imgTestResults, imgTestResultsActive]}
          />
        </div>
        <div className="right-part">
          { selectTag() }
        </div>
      </div>
    </div>
  )
}

export default MainBlock