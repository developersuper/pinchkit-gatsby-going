/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'

const padding = {
  medium: '16px',
  tiny:'8px',
  small: '8px 35px',
  smallOrder: '11px 23px',
  smallPlus: '12px 16px',
  mediumPlus: '20px',
  mediumMinus: '8px 47px'
}

const radius = {
  smallPlus: '16px',
  medium: '16px',
  mediumPlus: '16px',
}

const fontsize = {
    smallPlus: 'small-plus',
    medium: 'small-plus',
    mediumPlus: 'medium',
}   

const Button1 = ({ to="", color, children, size = 'tiny', sx, ...rest }) => (
  <Link
    sx={{
      backgroundColor: 'primary',
      color: color || 'white',
      cursor: 'pointer',
      fontSize: fontsize[size],
      fontWeight: 'bold',
      padding: padding[size] || '8px',
      borderRadius: radius[size] || '3px',
      minWidth: 'auto',
      textAlign: 'center',
      fontFamily: 'Pangram',
      ...sx
    }}
    to={to}
    {...rest}
  >{children}
  </Link>
)

export default Button1