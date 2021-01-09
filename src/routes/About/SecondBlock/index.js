/** @jsx jsx */
import { jsx } from 'theme-ui'

import H1 from 'elements/H1'
import Text from 'elements/Text'

import PersonalTag from './PersonalTag'
import './index.scss'

const SecondBlock = ({title = 'title', description, subBlocks }) => {
  return (
    <div id="second-block" className="about-second-block">
      <H1 size="large-minus" color="primary" className="about-second-title">{title}</H1>
      <Text size="medium-minus" family="Univers-LT-Std-45-Light" color="black" className="about-second-desc">{description?.description}</Text>
      <div className="about-second-personal">
        {subBlocks?.map((subBlock, index) => (
          <PersonalTag {...subBlock} key={index} />
        ))}
      </div>
    </div>
  )
}

export default SecondBlock