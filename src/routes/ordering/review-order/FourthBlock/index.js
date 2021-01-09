/** @jsx jsx */
import { jsx } from 'theme-ui'

import H1 from 'elements/H1'
import Button1 from 'elements/Button1'

import './index.scss'

const FourthBlock = ({ title, button, input }) => {
  return (
    <div className="stay-block" sx={{backgroundColor:'bg-light'}}>
      <div className="review-order-fourth">
        <H1 size="large" className="fourth-block-title">{title}</H1>
        <form action={button?.path} className="fourth-input-form" method="POST">
          <input type="text" placeholder={input.placeholer} className="input-box" />
          <Button1 type='submit' size="medium" className="signup-btn">{button?.label}</Button1>
        </form>
      </div>
    </div>
  )
  }

export default FourthBlock