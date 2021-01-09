/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import H1 from 'elements/H1'

import './index.scss'

const ResourcesBlock = ({ title, subBlocks }) => {
  return (
    <div className="additional-contacts-section">
      <H1 size="small-plus" family="univers-lt-std-65-bold" color="white">{title}</H1>
      <div className="contacts-section">
        {subBlocks.map( ({path, label}) =>{
          const to = `/${path}`
          return (
            <Link
              sx={{
                  color: 'white',
                  fontSize: 'small',
                  fontFamily: 'univers-lt-std-55-roman'
              }}
              key={label}
              to={to}
            >{label}</Link>
          )
        })}
      </div>
    </div>
  )
}

export default ResourcesBlock