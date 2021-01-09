/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'

import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'

const EachTerm = ({subBlock, termId}) => {
  const [show, setShow] = useState(true);
  return (
    <div className="each-terms" termId={termId}>
        <div className="each-terms-body">
        <H1 size="medium" className="each-terms-title">{subBlock.title}</H1>
        <Text size="medium-minus" family="Univers-LT-Std-45-Light" className="each-terms-description" style={{display:show?'block':'none'}}>{subBlock.description.description}</Text>
        </div>
        <div className="each-terms-toggle">
            <div className={show?'rotate':''} 
            onClick={() => {show?setShow(false):setShow(true)}}
            onKeyDown={() => {show?setShow(false):setShow(true)}}
            role="button"
            tabIndex="0"
        >
        </div>
        </div>
    </div>
  )
}

export default EachTerm



