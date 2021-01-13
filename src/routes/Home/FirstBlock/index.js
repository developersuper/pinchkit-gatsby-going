/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react';

import H1 from 'elements/H1'
import Button from 'elements/Button'
import Text from 'elements/Text'

import './index.scss'

const FirstBlock = ({ title, description, image, button, subBlocks }) => {
    const [src, setSrc] = useState(0)
    const nextSrc = () => setSrc(( src + 1 ) % 3)     
    const previousSrc = () => setSrc((src + 2) % 3)
    useEffect(() => {
      const interval = setInterval(() => setSrc(( src + 1 ) % 3), 4000);
      return () => clearInterval(interval);
    }, [src]);
    return (
      <div className="home-first-block">
          <div className="image-part"> 
              <img src={subBlocks[src]?.image?.file?.url} alt="" className="main-img"/>
              <div className="image-slide-spans">
                <span className="image-slide-span" 
                  type="button"
                  onClick={() => setSrc(0)}
                  sx={{backgroundColor: 'primary', opacity: `${src === 0 ? '1': '0.3'}`, marginBottom: '25px', border: `${src === 0 ? '2px solid white': 'none'}`}}
                ></span>
                <span className="image-slide-span" 
                  onClick={() => setSrc(1)}
                  sx={{backgroundColor: 'primary', opacity: `${src === 1 ? '1': '0.3'}`, marginBottom: '25px', border: `${src === 1 ? '2px solid white': 'none'}`}}
                ></span>
                <span className="image-slide-span"
                  onClick={() => setSrc(2)} 
                  sx={{backgroundColor: 'primary', opacity: `${src === 2 ? '1': '0.3'}`, border: `${src === 2 ? '2px solid white': 'none'}`}}
                ></span>
              </div>
          </div>
          <div className="right-part">
            <H1 family="Pangram" color="primary" className="first-title">{title}</H1>
            <Text size="medium" color="#333333" className="first-description">{description?.description}</Text>
            <Button to="/ordering/step-1" size="smallOrder" className="first-btn" >
              <Text size="smallOrder" color="white" family="univers-lt-std-55-roman">Get it first</Text>
            </Button>
          </div>
      </div>
    )
  }

export default FirstBlock