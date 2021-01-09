/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react';

import Image from 'elements/Image'
import H1 from 'elements/H1'

import LinkItem from './LinkItem'
import './index.scss'

const SecondBlock = ({title, subBlocks}) => {
  const [src, setSrc] = useState(0)
  return (
    <div className="home-second-block">
      <div className="text-section">
          <H1 size="large" className="title">{title}</H1>
          {subBlocks.map(({title, description}, idx) => {
            return (
              <LinkItem key={idx} title={title} description={description} idx={idx} setSrc={setSrc} src={src}/>)
          })}
      </div>
      <div className="image-section">
        <Image
          src={subBlocks[src].image?.file?.url}
          ratio={0.7}
        />
        {/* <div className="image-slide-spans">
          <span className="image-slide-span" sx={{backgroundColor: 'primary', opacity: src === 0 ? '1' : '0.3'}}></span>
          <span className="image-slide-span" sx={{backgroundColor: 'primary', opacity: src === 1 ? '1' : '0.3'}}></span>
          <span className="image-slide-span" sx={{backgroundColor: 'primary', opacity: src === 2 ? '1' : '0.3'}}></span>
        </div> */}
      </div>
    </div>
  )
}

export default SecondBlock