/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'

const SubscribeBlock = ({ title, description, input }) => {
  return (
    <div className="subscribe-block">
      <H1 size="medium" color="white">{title}</H1>
      <Text size="medium" family="Nunito" color="white">{description?.description}</Text>
      <div>
        <input type="text" sx={{fontSize: 'small', color: 'white'}} placeholder={input.placeholer} />
        <Link className="subscribe-block-icon" sx={{ backgroundColor: 'success'}} to={''}></Link>
      </div>
    </div>
  )
}

export default SubscribeBlock