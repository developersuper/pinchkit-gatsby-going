/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import H1 from 'elements/H1'

import './index.scss'

const NavigationBlock = ({ title, subBlocks }) => {
  return (
    <div className="navigation-section">
      <H1 size="small-plus" color="white" family="univers-lt-std-65-bold" className="navigation-title">{title}</H1>
      <div className="links-section">
        {subBlocks.map( ({path, label}) =>{
          const to = `/${path}`
          return (
            <Link
              sx={{color: 'white',
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

export default NavigationBlock