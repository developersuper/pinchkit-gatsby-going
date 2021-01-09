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

const EndFirstBlock = ({ image, title, description, subBlocks }) => {
  return (
    <div sx={{ backgroundColor: '#F9F9F9' }}>
      <div className="review-order-end-first">
        <div className="logo-wrapper">
          <img src={image?.file?.url} alt="alt" className="step-mark" />
        </div>
        <H1 size="large-minus" style={{marginBottom: '12px'}}>{title}</H1>
        <Text size="medium" family="Inter" style={{marginBottom: '56px'}}>{description.description}</Text>
        <div className="btn-group">
          <Button1
            className="btn" 
            size="medium" 
            to={subBlocks[0].path}>{subBlocks[0].label}</Button1>
          <Button1 
            className="btn" 
            size="medium"
            sx={{
              backgroundColor: 'unset',
              color: 'black',
              border: '1px solid #E6E6E6' 
            }}
            to={subBlocks[1].path}>{subBlocks[1].label}</Button1>
        </div>
      </div>
    </div>
  )
  }

export default EndFirstBlock