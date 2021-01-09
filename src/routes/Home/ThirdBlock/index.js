/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import React from 'react'

import Text from 'elements/Text'
import H1 from 'elements/H1'

import SubBlock from './subBlock'
import './index.scss'

const ThirdBlock = ({ image, title, description, button, subBlocks }) => {
  return (
    <>
    <div className="home-third-block" sx={{backgroundColor: 'primary'}}>
      <div className="home3-inner-block">
      <div className="description-section">
        <H1 size="large-plus" color="white" className="title">{title}</H1>
        <Text size="medium-minus" color="#F4F4F4" className="home3-description">{description.description}</Text>
        <div>
          <Link 
            to={button?.path} 
            sx={{fontSize:'medium-minus', color:'#F4F4F4'}} 
            className="watch-video">{button?.label} &#x2192;</Link>
        </div>
      </div>
      <img src={image?.file?.url} className="home3-img" alt=""/>
      </div>
    </div>
    <div className="home3-subBlocks">
    {
      subBlocks.map((subBlock, idx) => {
        return (<SubBlock key={idx} idx={idx} {...subBlock} />)
      })
    }
    </div>
    </>
  )
}

export default ThirdBlock