/** @jsx jsx */
import { jsx } from 'theme-ui'

import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'
import downArrow from 'images/icon/arrowPrimary.svg'

const FirstBlock = ({ title, description, button, image }) => {
  return (
    <div
      className="about-first-block"
    >
      <div className="about-first-text-wrapper">
        <H1 size="huge" color="primary" className="about-first-title">{title}</H1>
        <Text size="medium-minus" color="primary" className="about-first-desc">{description?.description}</Text>
      </div>
      <img src={image?.file?.url} className="about-first-image" />
      <a href="#second-block" className="down-arrow"><img src={downArrow} alt="" /></a>
    </div>
  )
}

export default FirstBlock