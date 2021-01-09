/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { useState } from 'react'

import H1 from 'elements/H1'
import Image from 'elements/Image'
import Text from 'elements/Text'
import Button1 from 'elements/Button1'

// import EditInfo from './EditInfo'
import './index.scss'

const EditInfo = () => (
  <Link to="" className="edit-info">
    <span className="edit-info-icon"></span>
    <H1 size="small-plus">Edit Info</H1>
  </Link>
)

const DetailsBox = ({title, context}) => (
  <div className="details-box">
    <H1 size="small" family="Inter" color="#7B8085" className="description">{title}</H1>
    <H1 size="small-plus" family="Inter" className="context">
      <span sx={{color: '#0DBD45', marginRight: '17px'}}>&#x2192;</span> {context} </H1>
  </div>
)

const FirstBlock = ({ image }) => {
  return (
    <div sx={{ backgroundColor: '#F9F9F9' }}>
      <div className="review-order-first">
        <div className="logo-wrapper">
        <img src={image?.file?.url} alt="alt" className="step-mark" />
        </div>
        <H1 size="large-minus" className="title">Review the test kit order for Sam Jones</H1>
        <div className="inner-block">
          <div className="each-block payment-details">
            <H1 size="medium-plus" className="each-title">Payment Detail</H1>
            <div className="details-wrapper">
              <DetailsBox title="Payment Method" context="Credit Card" />
              <DetailsBox title="Card Number" context="1234  9876  4321  6789" />
              <DetailsBox title="Expire Date" context="06/21" />
              <DetailsBox title="CVV" context="123" />
              <DetailsBox title="Country" context="USA" />
              <DetailsBox title="ZIP Code" context="123 987" />
            </div>
            <EditInfo />
          </div>
          
          <div className="each-block order-details">
          <H1 size="medium-plus" className="each-title">Order Detail</H1>
            <div className="card">
              <div style={{display: 'flex'}}>
                <img src="" alt="" className="card-img"/>
                <div className="text-div">
                  <H1 size="medium" className="card-title">Pinch Test Kit</H1>
                  <H1 size="small-plus" className="card-price"><span>$90</span>$65</H1>
                </div>
              </div>
              <div className="card-cross">
                <span>&times;</span>
              </div>
            </div>
            <div className="items">
              <div className="item">
                <H1 size="small-plus" family="Inter" className="item-name">Subtotal</H1>
                <H1 size="small-plus" className="item-price">$65</H1>
              </div>
              <div className="item">
                <H1 size="small-plus" family="Inter" className="item-name">Tax</H1>
                <H1 size="small-plus" className="item-price">$4.39</H1>
              </div>
              <div className="item">
                <H1 size="small-plus" family="Inter" className="item-name">Shipping</H1>
                <H1 size="small-plus" className="item-price">$5</H1>
              </div>
            </div>
            <div className="total">
                <H1 size="small-plus" family="Inter" className="total-name">Total</H1>
                <H1 size="medium-plus" className="total-price">$65</H1>
            </div>
            <EditInfo />
            <Button1 size="medium" to="/ordering/review-order-end" className="btn">Place Order</Button1>
          </div>
        </div>
      </div>
    </div>
  )
  }

export default FirstBlock