/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import H1 from 'elements/H1'
import Text from 'elements/Text'
import Image from 'elements/Image'

import './index.scss'

const TopBlog = ({ image, title, blogPath, description }) => {
  return (
    <div className="topblog">
      <Link to={blogPath}>
        <Image src={ image?.file?.url } ratio="0.7" className="topblog-image"/>
        <div className="text-wrapper">
          <H1 size="large" className="topblog-title">{title}</H1>
          <Text size="medium-minus" color="black" family="Univers-LT-Std-45-Light" className="topblog-text" family="OpenSans">{description?.content[0]?.content[0]?.value}</Text>
        </div>
        <Text size="medium-minus" color="black" family="univers-lt-std-65-bold" style={{letterSpacing: '0.5px'}}>- Author/Writer</Text>
      </Link>
    </div>
  )
}

export default TopBlog