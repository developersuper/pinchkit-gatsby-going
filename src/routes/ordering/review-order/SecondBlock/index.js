/** @jsx jsx */
import { jsx } from 'theme-ui'

import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'

const SecondBlock = ({ title, image, subBlocks }) => {
    return (
      <div className="review-order-second">
        <H1 size="large" className="title">{title}</H1>
        <div id="second-block" className="inner">
          <div className="left-part">
            <div className="second-image-wrapper">
              <img src={image?.file?.url}  className="second-image" alt="" />
            </div>
          </div>
          <div className="right-part">
            {
              subBlocks.map(({ image, title, description }, idx) => {
                return (
                  <div kye={idx} className="each-feature">
                    <div className="each-feature-icon">
                      <img width="22px" src={image?.file?.url} style={{objectFit:'contain'}} alt="" />
                    </div>
                    <div className="each-feature-main">
                      <H1 size="medium-plus" className="each-feature-title">{title}</H1>
                      <Text size="medium" family="Inter" className="each-feature-text">{description?.description}</Text>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }

export default SecondBlock