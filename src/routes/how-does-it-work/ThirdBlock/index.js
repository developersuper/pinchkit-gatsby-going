/** @jsx jsx */
import { jsx } from 'theme-ui'

import H1 from 'elements/H1'
import Text from 'elements/Text'

import ImgTag from './ImgTag'
import './index.scss'

const ThirdBlock = ({ title, subBlocks }) => {
  return (
    <div className="how-third-block">
      <div className="title">
        <H1 color="primary">{title}</H1>
      </div>
      <div className="flow">
        {subBlocks.map((subBlock, index) => (
          <ImgTag {...subBlock} key={index} isLast={subBlocks.length - 1 === index} />
        ))}
      </div>
    </div>
  )
}

export default ThirdBlock