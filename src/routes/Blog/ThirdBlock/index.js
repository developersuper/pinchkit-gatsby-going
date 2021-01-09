/** @jsx jsx */
import { jsx } from 'theme-ui'

import H1 from 'elements/H1'
import Text from 'elements/Text'
import SignUpForm from 'elements/SignUpForm'

import './index.scss'

const ThirdBlock = ({ title, description, subBlocks }) => {
    return (
      <div className="blog-third-block">
        <div  className="blog-third-first">
          <H1 color="primary" className="blog-third-title">{title}</H1>
          <Text size="medium">{description?.description}</Text>
        </div>
        <div  className="blog-third-second">
          <SignUpForm path={subBlocks[0]?.button?.path} label={subBlocks[0]?.button?.label} />  
        </div>
    </div>
    )
  }

export default ThirdBlock