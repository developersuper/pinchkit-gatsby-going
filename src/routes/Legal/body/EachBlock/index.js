/** @jsx jsx */
import { jsx } from 'theme-ui'

import H1 from 'elements/H1'

import './index.scss'
import EachTerm from './EachTerm'

const LegalBody = ({ idx, title, subBlocks }) => {
  return (
    <div className="legal-block" idx={idx}>
      <H1 size="medium-plus" className="legal-block-title">{title}</H1>
      <div className="legal-block-body">
        {subBlocks.map((subBlock, termId)=> {
          return (
            <EachTerm subBlock={subBlock} termId={termId} />
          )
        })}
      </div>
    </div>
  )
}

export default LegalBody