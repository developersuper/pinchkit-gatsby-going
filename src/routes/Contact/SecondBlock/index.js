/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'

const SecondBlock = ({ title, subBlocks }) => {
  return (
    <div className="contact-second-block" id="second-block">
      <div className="additional-contacts-block">
        <H1 size="large-minus" className="blog-fourth-title" color="primary">{title}</H1>
        <div className="contacts-body">
          <div className="left-div">
            {subBlocks.map((subBlock, idx) => {
              if(idx > 2) return null; 
              return (
                <div className="each-text-block" key={idx}>
                  <H1 size="medium-plus" color="primary">{subBlock?.title}</H1>
                  <Text size="medium-minus" color="black" family="Univers-LT-Std-45-Light">{subBlock?.description?.description}</Text>
                  <Link sx={{color: 'primary'}}>{subBlock?.link?.label}</Link>
                </div>
              )
            })}
          </div>
          <div className="right-div">
            <div className="right-div-inner-block">
              <H1 size="medium-plus" color="primary">{subBlocks[3]?.title}</H1>
              {
                subBlocks[3].subBlocks.map((item, idx) => {
                  return (
                    <Text size="medium-minus" color="black" family="Univers-LT-Std-45-Light" key={idx}>{item?.label}</Text>
                  )
                })
              }
            </div>
            <div className="right-div-inner-block">
              <H1 size="medium-plus" color="primary">{subBlocks[4]?.title}</H1>
              <Text size="medium-minus" color="black" family="Univers-LT-Std-45-Light">{subBlocks[4]?.description?.description}</Text>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default SecondBlock