/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import Text from 'elements/Text'
import H1 from 'elements/H1'

import './index.scss'

const ThirdBlock = ({ image, button, title, description, link }) => {
    return (
      <div className="about-third-block">
        <img src={image?.file?.url} className="element-image" />
        <H1 size="large-plus" color="black" className="about-third-title">{title}</H1>
        <Text size="medium-minus" color="black" family="Univers-LT-Std-45-Light" className="about-3-desc">{description?.description}</Text>
        <Link to={link.path} sx={{fontSize:'medium-minus', color:'primary'}} className="learn-more">{link?.label}</Link>
      </div>
    )
  }

export default ThirdBlock