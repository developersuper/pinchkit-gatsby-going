/** @jsx jsx */
import { jsx } from 'theme-ui'

import H1 from 'elements/H1'

import EachBlock from './EachBlock'
import './index.scss'
import downArrow from 'images/icon/arrowPrimary.svg'

const TermsAndConditionsBody = ({ title, subBlocks }) => {
    return (
      <div className="legal-body">
        <H1 size="large" className="legal-title">{title}</H1>
        {subBlocks.map((subBlock, idx)=> {
            return (
                <EachBlock {...subBlock} idx={idx} />
            )
        })}
        <div className="legal-down-arrow-wrapper">
          <a href="#request-information-block" className="legal-down-arrow">
            <img src={downArrow} alt="" />
          </a>
        </div>
      </div>
    )
  }

export default TermsAndConditionsBody