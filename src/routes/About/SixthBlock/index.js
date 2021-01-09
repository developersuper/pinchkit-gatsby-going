/** @jsx jsx */
import { jsx } from 'theme-ui'

import Text from 'elements/Text'

import './index.scss'

const SixthBlock = ({ title, subBlocks }) => {
  return (
    <div className="about-sixth-block">
      <Text size="small-plus" family="Rubik" className="title">{title}</Text>
      <div className="partners-section">
        {subBlocks?.map((subBlock, idx) => {
          return (
            <img key={idx} src={subBlock?.image?.file?.url} alt=""/>
          )
        })}
      </div>
    </div>
  )
}

export default SixthBlock