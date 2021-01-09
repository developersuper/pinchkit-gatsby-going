/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'

const FourthBlock = ({ title, description, subBlocks }) => {
  return (
    <div sx={{width:'100%', backgroundColor:'#ECE9F2'}}>
      <div className="home-fourth-block">
        <H1 size="large-plus" family="Pangram" className="home4-title">{title}</H1>
        <Text size="medium" color="black" className="home4-description">{description.description}</Text>
        <div className="symptoms-section">
          {subBlocks.map((subBlock, idx) => {
            return (
              <div key={idx} idx={idx} className="each-symptom">
                <H1 size="medium-plus" family="Pangram">{subBlock.title}</H1>
                <Text size="small-plus" color="black">{subBlock.description.description}</Text>
                <Link 
                  to={subBlock.link.path}
                  sx={{
                    color:'primary',
                    fontSize:'small-plus',
                    fontFamily: 'univers-lt-std-65-bold',
                  }}>
                    {subBlock.link.label} &#x2192; 
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FourthBlock