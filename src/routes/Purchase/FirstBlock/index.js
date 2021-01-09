/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'

import H1 from 'elements/H1'
import Image from 'elements/Image'
import Text from 'elements/Text'
import Button1 from 'elements/Button1'

import './index.scss'
import downArrow from 'images/icon/arrowPrimary.svg'

const FirstBlock = ({ product, title, description, button }) => {
  const [selected, setSelected] = useState(0);
  const [cart, setCart] = useState(1);
  const addCart = () => {
    setCart(cart + 1);
  }
  const reduceCart = () => {
    if(cart > 1) setCart(cart - 1);
  }
  const addToCart = (e) => {
    e.preventDefault();
  }
  const Select = (num) => {
    return (e) => {
      e.preventDefault();
      setSelected(num);
    }
  }
  return (
    <div
      sx={{
        backgroundColor: '#F7F7F7',
        padding: '10px',
        position: 'relative'
      }}
    >
      <div className="purchase-first-block">
        <div className="image-part">
            <div className="image-slide">
              <a href="/" onClick={Select(0)}><p style={{display: 'none'}}>1</p><Image  bgColor="white" src={product?.images[0]?.originalSrc} className="each-slide" /></a>
              <a href="/" onClick={Select(1)}><p style={{display: 'none'}}>2</p><Image  bgColor="white" src={product?.images[1]?.originalSrc} className="each-slide"/></a>
              <a href="/" onClick={Select(2)}><p style={{display: 'none'}}>3</p><Image  bgColor="white" src={product?.images[2]?.originalSrc} className="each-slide"/></a>
            </div>
            <div className="image-board">
              <Image bgColor="white" src={product?.images[selected]?.originalSrc} className="main-image" />
              {/* <div className="image-badge"></div>
              <div className="price-badge" sx={{backgroundColor:'primary'}}><H1 size="medium" color="white" className="price-badge-text">{`${100-Math.round(100 * product?.variants[0]?.compareAtPrice / product?.variants[0]?.price)}% OFF`}</H1></div> */}
            </div>
        </div>
        <div className="product-part">
          <Text size="medium-minus" color="black" family="Univers-LT-Std-45-Light" className="product-description" >{description.description}</Text>
          <H1 size="large-plus" color="primary" className="product-title">{product?.title}</H1>
          <div className="price-line">
            <Text size="small-plus" color="primary" family="univers-lt-std-55-roman" className="product-badge">{product?.descriptionHtml}</Text>
            <Text size="medium-minus" className="product-price" family="univers-lt-std-55-roman"><del>${Math.round(product?.variants[0]?.price)}</del></Text>
            <Text size="medium-plus" family="Pangram" color="primary" className="product-price-reduced">${Math.round(product?.variants[0]?.compareAtPrice)}</Text>
          </div>
          <div className="sku-line">
            <Text size="small-plus" className="sku" family="univers-lt-std-55-roman" style={{color: 'rgba(26, 32, 44, 0.4)'}}>SKU:</Text>
            <Text size="small-plus" color="black" family="univers-lt-std-55-roman" className="sku">123456789</Text>
          </div>
          <div className="btn-line">
            <div className="btn-num">
                <H1 onClick={reduceCart} family="univers-lt-std-65-bold" color="primary" size="medium-minus" style={{cursor: 'pointer'}}>{'-'}</H1>
                <H1 color="primary" family="univers-lt-std-65-bold" size="medium-minus">{cart}</H1>
                <H1 onClick={addCart} family="univers-lt-std-65-bold" color="primary" size="medium-minus" style={{cursor: 'pointer'}}>{'+'}</H1>
            </div>
            <Button1 
              size="medium"
              className="btn-cart" 
            >Add to Cart</Button1>
          </div>
        </div>
        <a href="#second-block" className="down-arrow"><img src={downArrow} alt="" /></a>
      </div>
    </div>
  )
  }

export default FirstBlock