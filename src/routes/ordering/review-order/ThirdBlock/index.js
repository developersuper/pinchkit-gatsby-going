/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'

import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'

const ThirdBlock = ({ title, subBlocks }) => {
  const length = subBlocks.length;
  const [selected, setSelected] = useState(0);
  const onNextUser = (e) => {
    e.preventDefault();
    setSelected((selected + 1) % length);
  }
  const onPreviousUser = (e) => {
    e.preventDefault();
    setSelected((selected + length - 1) % length);
  }

  return (
      <div className="review-order-third">
      <div className="title-part">
        <H1 size="large" className="second-title">{title}</H1>
      </div>
      <div className="second-part">
          <div className="second-wrapper">
            <div className="avatar-wrapper" sx={{ borderColor: 'primary'}}>
              <img src={subBlocks[selected]?.image?.file?.url} className="avatar" alt="" />
            </div>
            <div>
              <H1 size="medium-plus" className="user-title">{subBlocks[selected]?.title}</H1>
              <Text color="black" size="medium" family="Inter" className="user-description">{subBlocks[selected]?.description?.description}</Text>
            </div>
          </div>
          <div className="slide-effect">
                <span className={ (selected % 3) === 0 ? "effect-each-active" : "effect-each" } sx={ (selected % 3) === 0 ? {backgroundColor: 'primary', borderColor: 'primary'} : {backgroundColor: 'primary'} } />
                <span className={ (selected % 3) === 1 ? "effect-each-active" : "effect-each" } sx={ (selected % 3) === 1 ? {backgroundColor: 'primary', borderColor: 'primary'} : {backgroundColor: 'primary'} } />
                <span className={ (selected % 3) === 2 ? "effect-each-active" : "effect-each" } sx={ (selected % 3) === 2 ? {backgroundColor: 'primary', borderColor: 'primary'} : {backgroundColor: 'primary'} } />
          </div>
      </div>
      <div className="slide-button">
            <a href="/" onClick={onPreviousUser} className="each-btn">{'<'}</a>
            <a href="/"onClick={onNextUser} className="each-btn">{'>'}</a>
          </div>
    </div>
    )
  }

export default ThirdBlock