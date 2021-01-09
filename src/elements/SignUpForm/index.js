/** @jsx jsx */
import { jsx } from 'theme-ui'

import Button1 from 'elements/Button1'

import './index.scss'

const SignUpForm = ({path, label}) => {
  return (
      <form action={path} className="submit-form" method="POST">
        <input type="text" placeholder="Company Name" sx={{marginBottom:'16px', borderColor: 'secondary'}} />
        <input type="email" placeholder="Email" sx={{marginBottom:'16px', borderColor: 'secondary'}} />
        <div className="personal-info">
          <input type="text" placeholder="First Name" sx={{paddingLeft:'16px', borderColor: 'secondary'}} />
          <input type="text" placeholder="Last Name" sx={{ borderColor: 'secondary'}}/>
        </div>
        <Button1 size="medium" type="submit" className="signup-btn">Sign Up</Button1>
      </form>
  )
}

export default SignUpForm