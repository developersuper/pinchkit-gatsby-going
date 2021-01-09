/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react';

import Image from 'elements/Image'
import H1 from 'elements/H1'
import Button from 'elements/Button'
import Text from 'elements/Text'

import './index.scss'
import prevIcon from 'images/icon/arrowPrimary.svg'
import nextIcon from 'images/icon/arrowWhite.svg'

const FirstBlock = ({ title, image, button, subBlocks }) => {
    const [src, setSrc] = useState(0)
    const nextSrc = () => setSrc(( src + 1 ) % 4)     
    const previousSrc = () => setSrc((src + 2) % 4)
    useEffect(() => {
      const interval = setInterval(() => setSrc(( src + 1 ) % 4), 4000);
      return () => clearInterval(interval);
    }, [src]);
    return (
      <div className="home-first-block">
          <div className="image-part"> 
              <img src={subBlocks[src]?.image?.file?.url} alt="" className="main-img"/>
              {/* <Image ratio="1.73"/> */}
              <div className="image-slide-spans">
                <span className="image-slide-span" 
                  type="button"
                  onClick={() => setSrc(0)}
                  sx={{backgroundColor: 'primary', opacity: `${src === 0 ? '1': '0.3'}`, marginBottom: '25px'}}
                ></span>
                <span className="image-slide-span" 
                  onClick={() => setSrc(1)}
                  sx={{backgroundColor: 'primary', opacity: `${src === 1 ? '1': '0.3'}`, marginBottom: '25px'}}
                ></span>
                <span className="image-slide-span"
                  onClick={() => setSrc(2)} 
                  sx={{backgroundColor: 'primary', opacity: `${src === 2 ? '1': '0.3'}`}}
                ></span>
              </div>
              <div className="image-image">
                <div sytle={{position: 'relative'}}>
                  <Image src={subBlocks[4]?.image?.file?.url} ratio="0.64" className="sub-img" />
                  <span sx={{backgroundColor: 'primary'}} className="image-image-cover"></span>
                </div>
              </div>
          </div>
          <div className="right-part">
            <H1 family="Pangram" color="primary" className="first-title">{title}</H1>
            <Text size="medium" color="#333333" className="first-description">{title}</Text>
            <Button to="/ordering/step-1" size="smallOrder" className="first-btn" >
              <Text size="smallOrder" color="white" family="univers-lt-std-55-roman">Order Now!</Text>
            </Button>
            <div className="right-slide-spans">
              <span 
                onClick={previousSrc} 
                className="right-slide-span" 
                sx={{backgroundColor: 'primary'}}
              ><img src={nextIcon} sx={{transform: 'rotate(-90deg)'}} alt=""/></span>
              <span 
                onClick={nextSrc}
                className="right-slide-span"
                sx={{backgroundColor: 'white'}}
              ><img src={prevIcon} sx={{transform: 'rotate(90deg)'}} alt=""/></span>
            </div>
          </div>
      </div>
    )
  }

export default FirstBlock