/** @jsx jsx */
import { jsx } from 'theme-ui'

import Button from 'elements/Button'
import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'
import downArrow from 'images/icon/arrowPrimary.svg'

const SimpleTop = ({ title, description, button }) => {
  return (
    <div
      className="page-block simple-top"
      sx={{
        backgroundColor: 'bg-light'
      }}
    >
      <H1 className="simple-top-title">{title}</H1>
      <Text size="medium" className="text">{description?.description}</Text>
      {button?.label && (
        <Button
          size="medium"
          to={`/${button?.path}`}
          sx={{ marginTop: '75px' }} 
          className="simple-top-button"
        >
          {button?.label}
        </Button>
      )}
      <a href="#second-block" className="down-arrow"><img src={downArrow} alt="" /></a>
    </div>
  )
}

export default SimpleTop