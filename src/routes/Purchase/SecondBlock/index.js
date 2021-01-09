/** @jsx jsx */
import { jsx } from 'theme-ui'

import H1 from 'elements/H1'
import Text from 'elements/Text'
import Image from 'elements/Image'

import './index.scss'

const SecondBlock = ({ title, image, subBlocks }) => {
    return (
      <div id="second-block" className="purchase-second">
        <div className="left-part">
          <Image src={image?.file?.url}  ratio="0.884" alt="" />
        </div>
        <div className="right-part">
        <H1 size="large" className="second-title">{title}</H1>
          {
            subBlocks.map(({ image, title, description }, idx) => {
              return (
                <div kye={idx} className="each-feature">
                  <div className="each-feature-icon">
                    <img width="30px" src={image?.file?.url} style={{objectFit:'contain'}} alt="" />
                  </div>
                  <div className="each-feature-main">
                    <H1 size="medium-plus" className="each-feature-title">{title}</H1>
                    <Text size="small-plus" color="black" family="Univers-LT-Std-45-Light" className="each-feature-text">{description?.description}</Text>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

export default SecondBlock