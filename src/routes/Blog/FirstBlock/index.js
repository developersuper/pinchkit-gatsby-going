/** @jsx jsx */
import { jsx } from 'theme-ui'

import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'
import downArrow from 'images/icon/arrowPrimary.svg'

const FirstBlock = ({ title, description, image }) => {
  return (
    <div
      className="blog-first-block simple-top"
      sx={{
        backgroundImage: `url(${image?.file?.url})`
      }}
    >
      <div
        className="blog-first-inner-block"
      >
        <div className="blog-first-text-wrapper">
          <H1 size="huge" color="white" className="blog-first-title">{title}</H1>
          <Text size="medium-minus" color="white" className="blog-first-desc">{description?.description}</Text>
        </div>
        <a href="#blog-second-block" className="down-arrow"><img src={downArrow} alt="" /></a>
      </div>
    </div>
  )
}

export default FirstBlock