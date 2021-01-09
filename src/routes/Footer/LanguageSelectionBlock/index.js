
/** @jsx jsx */
import { jsx } from 'theme-ui'

import './index.scss'

const LanguageSelectionBlock = () => {
  return (
      <div className="footer-lang-selection" sx={{backgroundColor: 'bg-opacity'}}>
        <img className="lang-selection-flag" alt="" />
        <select className="lang-selection" sx={{color: 'white', fontSize: 'medium'}}>
          <option className="lang-selection-item">EN</option>
        </select>
      </div>
  )
}

export default LanguageSelectionBlock

