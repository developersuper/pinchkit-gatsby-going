/** @jsx jsx */
import { jsx } from 'theme-ui'

import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'

const EachBox = ({ description, subBlocks }) => {
  return (
    <div className="right-each-box">
    <div className="each-box-up">
      <img src={subBlocks[0]?.image?.file?.url} alt="" />
      <div className="each-box-info">
        <H1 size="medium">{subBlocks[0]?.title}</H1>
        <Text color="black">{subBlocks[0]?.description.description}</Text>
      </div>
    </div>
    <div className="each-box-down">
      <Text size="small-plus" color="black">{description?.description}</Text>
      <span className="comma" sx={{ color: 'primary' }}>,,</span>
    </div>
  </div>
  )
}

export default EachBox