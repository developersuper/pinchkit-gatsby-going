/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import H1 from 'elements/H1'
import Text from 'elements/Text'
import Image from 'elements/Image'

import './index.scss'

const Popular = ({ blogs }) => {
  return (
    <div className="popular">
      <H1 size="large-minus" color="primary" className="popular-title">Popular Articles</H1>
      <div className="popular-link">
        {
          blogs.map(({title, blogPath, author}, idx) => {
            return (
            <Link key={idx} to={ blogPath } className="popular-each-link">
              <div className="blog-info">
                <H1 size="medium" color="black" className="blog-info-title">{title}</H1>
              </div>
              <Image src={author.photo?.file?.url} ratio="0.79" width="94px" style={{borderRadius: '8px'}}/>
            </Link>)
          })
        }
      </div>
    </div>
  )
}

export default Popular