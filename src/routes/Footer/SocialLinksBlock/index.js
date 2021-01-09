/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import './index.scss'

const SocialLinksBlock = ({ title, subBlocks }) => {
  return (
    <div className="social-links-section">
    {subBlocks.map( ({path, label, icon}) =>{
        return (
        <Link
            sx={{color: 'white',
                size: 'small'
            }}
            key={label}
            to={path}
            className="social-link"
        ><img src={icon.file.url} alt="" /></Link>
        )
    })}
    </div>
  )
}

export default SocialLinksBlock