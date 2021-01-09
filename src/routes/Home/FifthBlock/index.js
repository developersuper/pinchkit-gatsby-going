/** @jsx jsx */
import { jsx } from 'theme-ui'

import H1 from 'elements/H1'
import Text from 'elements/Text'
import Image from 'elements/Image'

import './index.scss'

const FifthBlock = ({ title, description, image, subBlocks }) => {
  return (
    <div className="home-fifth-block">
      <H1 size="large-plus" className="home5-title">{title}</H1>
      <Text size="medium-minus" color="black" className="description">{description?.description}</Text>
      <div className="measure-section">
        <div className="image-section">
          <Image ratio="0.68" src={image.file.url} radius="14px" />
        </div>
        <div className="text-section">
          {subBlocks.map((subBlock, idx) => {
            return (
              <div className="each-part" key={idx}>
                <Image src={subBlock.image.file.url}/>
                <H1 size="medium-plus" color="black">{subBlock.title}</H1>
                <Text size="small" color="black">{subBlock.description.description}</Text>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FifthBlock