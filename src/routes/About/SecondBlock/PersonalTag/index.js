/** @jsx jsx */
import { jsx } from 'theme-ui'

import Image from 'elements/Image'
import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'

const PersonalTag = ({image, title, description}) => {
  return (
    <div className="personal-wrapper">
      <img src={image?.file?.url} className="about-second-photo"/>
      <H1 size="medium-plus" color="primary" className="title">{title}</H1>
      <Text size="medium-minus" family="Univers-LT-Std-45-Light" className="description">{description?.description}</Text>
    </div>
  )
}

export default PersonalTag