/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect} from 'react'

import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'

const LinkItem = ({title, description, setSrc, idx, src}) => {
  const [color, setColor] = useState({
    primary: 'black',
    text: 'black',
  });

  const hover = () => setColor({
    primary: 'black',
    text: 'black',
  })

  const origin = () => {
      if(src !== idx)
      setColor({
        primary: 'black',
        text: 'black',
      })
  }

  const onClick = (e) => {
    setSrc(idx);
  }
  
  useEffect(() => {
    if(src === idx){
      setColor({
        primary: 'black',
        text: 'black',
      });
    }
    else{
      setColor({
        primary: 'black',
        text: 'black',
      })
    }
  }, [src, idx]);

  return (
    <div
      className="each-section" 
      sx={{ color: color.primary, borderColor: color.primary }}
      onClick={onClick}
      onKeyDown={onClick}
      onFocus={hover}
      onMouseOver={hover}
      onBlur={origin}
      onMouseOut={origin}
      role="button"
      tabIndex="0"
    >
      <div className="each-text">
        <H1 size="medium-plus" color={color.primary} className="each-text-title">{title}</H1>
        <Text size="small-plus" color="black" family="Univers-LT-Std-45-Light" color={color.text} className="each-text-description">{description?.description}</Text>
      </div>
    </div>
    )
}

export default LinkItem