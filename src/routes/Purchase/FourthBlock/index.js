/** @jsx jsx */
import { jsx } from 'theme-ui'

import H1 from 'elements/H1'
import Button from 'elements/Button'

import './index.scss'

const FourthBlock = ({ title, button, input }) => {
  return (
    <div className="stay-block" sx={{backgroundColor:'bg-light'}}>
      <div className="fourth-block">
        <H1 size="large" className="fourth-block-title">{title}</H1>
        <form action={button?.path} className="fourth-input-form" method="POST">
          <input type="text" placeholder={input.placeholer} className="input-box" />
          <Button type='submit' className="signup-btn"><H1 size="medium" color="white">{button?.label}</H1></Button>
        </form>
      </div>
    </div>
  )
  }

export default FourthBlock