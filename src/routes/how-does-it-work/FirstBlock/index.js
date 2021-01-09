/** @jsx jsx */
import { jsx } from 'theme-ui'

import Button from 'elements/Button'
import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'
import downArrow from 'images/icon/arrowPrimary.svg'

const FirstBlock = ({ title, description, button, image }) => {
  return (
    <div
      className="how-first-block simple-top"
      sx={{
        backgroundImage: `url(${image?.file?.url})`
      }}
    >
      <div className="how-inner-block">
        <H1 className="simple-top-title" color="primary">{title}</H1>
        <Text size="medium" color="primary" family="Univers-LT-Std-45-Light" className="text">{description?.description}</Text>
        {button?.label && (
          <Button
            size="medium"
            to={`/${button?.path}`}
            sx={{ marginTop: '56px' }} 
            className="simple-top-button"
          >
            {button?.label}
          </Button>
        )}
        <a href="#second-block" className="down-arrow"><img src={downArrow} alt="" /></a>
      </div>
    </div>
  )
}

export default FirstBlock