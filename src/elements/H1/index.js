/** @jsx jsx */
import { jsx } from 'theme-ui'

const H1 = ({ children, size='huge', color='black', family='Pangram', sx, ...rest }) => (
  <h1
    sx={{
      color,
      fontSize: size,
      margin: 0,
      fontFamily: family,
      ...sx
    }}
    {...rest}
  >{children}
  </h1>
)

export default H1