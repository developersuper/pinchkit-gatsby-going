/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'

const SubscribeBlock = ({ title, description, input }) => {
  return (
    <div className="subscribe-block">
      <H1 size="small-plus" family="univers-lt-std-65-bold" color="white">{title}</H1>
      <div>
        <input 
          type="text" 
          sx={{
            fontSize: 'small',
            color: 'white',
          }} 
          placeholder={input.placeholer} />
        <Link 
          className="subscribe-block-icon" 
          sx={{color: 'white'}}
          to={''}>&#x2192;
        </Link>
      </div>
    </div>
  )
}

export default SubscribeBlock