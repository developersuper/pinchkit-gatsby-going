/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import './index.scss'
import arrowIcon from '../../images/icon/backArrowIcon.png'

const BackArrow = ({ to="", ...rest}) => (
  <Link 
    to={to}
    className="back-arrow"
    sx={{
      color: '#858A8F',
      fontSize: 'small',
      fontFamily: 'Inter',
    }}
    {...rest}
  ><img src={arrowIcon} alt="" />Back</Link>
)

export default BackArrow