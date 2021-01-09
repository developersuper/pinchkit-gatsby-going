/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react';

import Image from 'elements/Image'

import LinkItem from './LinkItem'
import './index.scss'

const FourthBlock = ({subBlocks}) => {
  const [src, setSrc] = useState(0)
  return (
    <div className="how-fourth-block" >
      <div className="text-section">
          {subBlocks.map(({title, description}, idx) => {
            return (
              <LinkItem key={idx} title={title} description={description} idx={idx} setSrc={setSrc} src={src}/>)
          })}
      </div>
      <div className="image-section">
        <Image
          src={subBlocks[src].image?.file?.url}
          ratio={0.9}
        />
      </div>
    </div>
  )
}

export default FourthBlock