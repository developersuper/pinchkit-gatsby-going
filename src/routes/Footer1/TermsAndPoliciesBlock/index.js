/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Text from 'elements/Text'

import './index.scss'

const TermsAndPoliciesBlock = ({ title, subBlocks }) => {
  return (
    <div className="terms-policies-block">
      <Text size="tiny" family="Univers-LT-Std-45-Light" color="white" sx={{ marginRight: '10px'}}>{title}</Text>
      <div className="links-section">
        {subBlocks.map( ({path, label}) =>{
          const to = `/${path}`
          return (
            <Link
              sx={{
                color: 'white',
                fontSize: 'tiny',
                fontFamily: 'Univers-LT-Std-45-Light'
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