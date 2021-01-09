/** @jsx jsx */
import { jsx } from 'theme-ui'

import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'

const EighthBlock = ({ title, subBlocks }) => {
  return (
    <div className="home-eighth-block">
      <H1 size="large" className="title">{title}</H1>
      <div className="questions">
        {subBlocks.map((subBlock, idx) => {
          return (
            <div key={idx} className="each-question">
              <H1 size="medium-plus" className="each-question-title">{subBlock.title}</H1>
              <Text size="small-plus" className="each-question-description">{subBlock.description.description}</Text>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EighthBlock