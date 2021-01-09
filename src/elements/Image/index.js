/** @jsx jsx */
import { jsx } from 'theme-ui'

import './index.scss'

const Image = ({ src, width, ratio = 1, bgColor, radius="0px", ...rest }) => (
  <div
    className="element-image"
    sx={{
      width: width || '100%',
      maxWidth: '100%',
      backgroundColor: bgColor
    }}
  >
    <div
      sx={{
        width: '100%',
        paddingTop: `${ratio * 100}%`
      }}
    />
    <img src={src} {...rest} alt="" sx={{borderRadius: radius}}/>
  </div>
);

export default Image