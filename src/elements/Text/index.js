/** @jsx jsx */
import { jsx } from 'theme-ui'

const Text = ({ children, color='secondary', size='tiny', weight='normal', family='Univers-LT-Std-45-Light', ...rest }) => (
  <span
    sx={{
      color,
      fontSize: size,
      fontWeight: weight,
      fontFamily: family
    }}
    {...rest}
  >{children}
  </span>
)

export default Text