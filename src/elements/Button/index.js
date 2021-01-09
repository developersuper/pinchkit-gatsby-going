/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'

const minWidth = {
  medium: '255px',
  tiny:'118px',
  small: '118px',
  smallOrder: '128px',
}

const padding = {
  medium: '16px',
  tiny:'8px',
  small: '8px 35px',
  smallOrder: '11px 23px',
  mediumPlus: '16px 40px',
  mediumMinus: '8px 47px'
}

const Button = ({ to, children, size = 'tiny', sx, ...rest }) => (
  <Link
    sx={{
      backgroundColor: 'primary',
      color: 'white',
      cursor: 'pointer',
      fontSize: size,
      fontWeight: 'bold',
      padding: padding[size] || '8px',
      borderRadius: '3px',
      minWidth: minWidth[size] || 'auto',
      textAlign: 'center',
      fontFamily: 'Inter',
      ...sx
    }}
    to={to}
    {...rest}
  >{children}
  </Link>
)

export default Button