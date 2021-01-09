/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import Image from 'elements/Image'
import Text from 'elements/Text'
import H1 from 'elements/H1'

import './index.scss'

const SubBlock = ({ image, title, description, button, idx }) => {
  if((idx % 2) === 0){
    return (
      <div className="home3-subBlock" >
        <div className="subBlock-img">
          <Image ratio={1.03} src={image?.file?.url} radius="14px"/>
        </div>
        <div className="subBlock-description-section">
          <H1 size="large-minus" className="subBlock-title">{title}</H1>
          <Text size="medium" color="#333333" className="subBlock-description">{description.description}</Text>
          {button && 
            (<div style={{ marginTop: '70px' }}>
              <Link 
                to={button?.path} 
                className="subBlock-btn" 
                sx={{
                  backgroundColor: 'primary', 
                  fontSize: 'small-plus',
                  color: 'white' 
                }}>
                  {button?.label}
              </Link>
            </div>)
          }
        </div>
      </div>
    )
  }

  return (
    <div className="home3-subBlock" >
      <div className="subBlock-description-section">
        <H1 size="large-minus" className="subBlock-title">{title}</H1>
        <Text size="medium" color="#333333" className="subBlock-description">{description.description}</Text>
      </div>
      <div className="subBlock-img">
        <Image ratio={1.03} src={image?.file?.url} radius="14px"/>
      </div>
    </div>
  )
}

export default SubBlock