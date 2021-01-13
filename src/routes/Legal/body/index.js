/** @jsx jsx */
import { jsx } from 'theme-ui'

import H1 from 'elements/H1'

import EachTermBlock from './EachTermBlock'
import './index.scss'

const TermsAndConditionsBody = ({ title, subBlocks }) => {
  return (
    <div className="legal-body">
      <H1 size="large" className="legal-title">{title}</H1>
      {subBlocks.map((subBlock, idx)=> {
          return (
              <EachTermBlock {...subBlock} termId={idx} />
          )
      })}
    </div>
  )
}

export default TermsAndConditionsBody