/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import H1 from 'elements/H1'

import './index.scss'

const TermsAndPoliciesBlock = ({ title, subBlocks }) => {
  return (
    <div className="terms-policies-block">
      <H1 size="medium" color="white">{title}</H1>
      <div className="links-section">
        {subBlocks.map( ({path, label}) =>{
          const to = `/${path}`
          return (
            <Link
              sx={{color: 'white',
                  size: 'small'
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

export default TermsAndPoliciesBlock