/** @jsx jsx */
import { jsx } from 'theme-ui'

import Image from 'elements/Image'
import Text from 'elements/Text'

import './index.scss'

const ImgTag = ({ image, title, isLast }) => {
  return (
    <div className="img-tag">
      <div className="img-wrapper">
        <Image src={image?.file?.url} />
        <div className="arrow" sx={{ backgroundColor: isLast ? 'success' : 'primary' }} />
      </div>
      <Text size="medium" color="black" family="Univers-LT-Std-45-Light" className="img-subtitle">{title}</Text>
    </div>
  )
}

export default ImgTag