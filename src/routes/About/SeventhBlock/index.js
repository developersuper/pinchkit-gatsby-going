/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'

const SeventhBlock = ({ title, description, subBlocks }) => {
  return (
    <div className="about-seventh-block" sx={{backgroundColor:'bg-light'}}>
      <H1 size="large" className="title">{title}</H1>
      <Text size="small" family="Rubik" color="black" className="description">{description?.description}</Text>
      <div className="social-links-section">
        {subBlocks?.map((subBlock) => {
          return (
            <Link to={subBlock?.path} className="social-link">
              <img src={subBlock?.icon?.file.url} alt="social link" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SeventhBlock