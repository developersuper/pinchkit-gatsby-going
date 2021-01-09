/** @jsx jsx */
import { jsx } from 'theme-ui'

import Image from 'elements/Image'
import H1 from 'elements/H1'
import Text from 'elements/Text'
import Button from 'elements/Button'

import './index.scss'

const SecondBlock = ({ title, description, image, button }) => {
  return (
    <div id="second-block" className="how-second-block">
      <div className="inner-block">
        <Image src={image?.file?.url} ratio={0.8} className="how-sec-img"/>
        <div className="second-part">
          <H1 size="large" className="title">{title}</H1>
          <Text size="medium" color="black" family="Univers-LT-Std-45-Light" >{description?.description}</Text>
          <Button
              size="smallPlus"
              to={`/${button?.path}`}
              sx={{
                maxWidth: '255px',
                width: '100%',
              }}  
              className="how-sec-btn"     
          >
            {button?.label}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SecondBlock