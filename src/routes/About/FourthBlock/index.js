/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import Image from 'elements/Image'
import Text from 'elements/Text'
import H1 from 'elements/H1'

import './index.scss'

const FourthBlock = ({ image, description, title, link }) => {
  return (
    <div className="about-fourth-block">
      <Image ratio={0.8} src={image?.file?.url} />
      <div className="blog-section">
        <div className="blog-body">
          <H1 size="large-plus" className="about-4-title">{title}</H1>
          <Text color="#333333" size="medium-minus" family="Univers-LT-Std-45-Light">{description?.description}</Text>
        </div>
        <Link to={link?.path} sx={{fontSize:'medium-minus', color:'primary'}} className="learn-more">{link?.label}</Link>
      </div>
    </div>
  )
}

export default FourthBlock