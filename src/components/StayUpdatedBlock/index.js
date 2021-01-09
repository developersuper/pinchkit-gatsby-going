/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'

const StayUpdatedBlock = ({ title, description, subBlocks }) => {
  return (
    <div className="stay-block" sx={{backgroundColor:'bg-light'}}>
      <H1 size="large" sx={{paddingBottom:'12px', lineHeight:'48px', letterSpacing:'-0.4px'}}>{title}</H1>
      <Text size="small" family="Rubik" color="black" sx={{lineHeight:'24px'}}>{description?.description}</Text>
      <div className="social-links-section">
        {subBlocks?.map((subBlock, idx) => {
          return (
            <Link key={idx} to={subBlock?.path} className="social-link">
              <img src={subBlock?.icon?.file.url} alt="social link" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default StayUpdatedBlock