/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect} from 'react'

import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'

const LinkItem = ({title, description, setSrc, idx, src}) => {
  const [color, setColor] = useState({
    primary: 'secondary',
    title: 'black',
    text: '#white',
  });
  const [isMobile, setIsMobile] = useState(false);

  const hover = () => {
    if (isMobile) return;
    return setColor({
      title: 'white',
      primary: 'primary',
      text: 'white'
    });
  }

  const origin = () => {
      if(src !== idx)
      setColor({
        title: 'black',
        primary: 'white',
        text: '#333333',
      })
  }

  const onClick = (e) => {
    setSrc(idx);
  }
  
  useEffect(() => {
    const vw = window.innerWidth;
    if (vw < 460) {
      setIsMobile(true);
      return setColor({
        title: 'black',
        primary: 'white',
        text: '#333333',
      });
    }
    if(src === idx){
      setColor({
        title: 'white',
        primary: 'primary',
        text: 'white'
      });
    }
    else{
      setColor({
        title: 'black',
        primary: 'white',
        text: '#333333',
      })
    }
  }, [src, idx]);

  return (
    <div
      className="each-section" 
      sx={{ backgroundColor: color.primary }}
      onClick={onClick}
      onKeyDown={onClick}
      onFocus={hover}
      onMouseOver={hover}
      onBlur={origin}
      onMouseOut={origin}
    >
      <div className="each-text">
        <H1 size="medium-plus" color={color.title} className="each-text-title">{title}</H1>
        <Text size="small-plus" color={color.text} family="Univers-LT-Std-45-Light" className="each-text-description">{description?.description}</Text>
      </div>
    </div>
    )
}

export default LinkItem