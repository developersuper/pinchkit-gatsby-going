/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'

import H1 from 'elements/H1'
import Image from 'elements/Image'
import Text from 'elements/Text'

import './addNewKit.scss'
import tempImg from '../../images/gatsby-astronaut.png'

const AddNewKit = ({ product }) => {
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
      <div className="addkit-block">
        <div className="image-part">
            <div className="image-slide">
              <div className="each-slide">
               <Image src={tempImg} onClick={Select(0)} alt="" />
              </div>
              <div className="each-slide">
                <Image src={tempImg} onClick={Select(1)} alt="" />
              </div>
              <div className="each-slide">
                <Image src={tempImg} onClick={Select(2)} alt="" />
              </div>
            </div>
            <div className="image-board">
              <Image bgColor="white" src={tempImg} ratio="1.2" className="main-image" />
              <div className="image-badge1"></div>
              <div className="image-badge2"></div>
              <div className="price-badge" sx={{backgroundColor:'primary'}}>
                <H1 size="medium" color="white" className="price-badge-text">
                  {`${100-Math.round(100 * 100 / product?.variants[0]?.price)}% OFF`}</H1>
              </div>
            </div>
        </div>
        <div className="product-part">
          <H1 size="small-plus" color="primary" family="Inter" className="product-description" >-Special Statement</H1>
          <H1 size="large" className="product-title">Pinch Test Kit</H1>
          <div className="price-line">
            <Text size="medium" color="primary" className="product-badge">Covid</Text>
            <div>
              <Text size="medium" className="product-price"><del>${Math.round(90)}</del></Text>
              <Text size="large-minus" color="black" className="product-price-reduced">${Math.round(65)}</Text>
            </div>
          </div>
          <div className="sku-line">
            <div>
              <Text size="small-plus" className="sku" style={{color: 'rgba(26, 32, 44, 0.4)'}}>SKU:</Text>
              <br/>
              <Text size="small-plus" color="black" className="sku">123456789</Text>
            </div>
            <div className="btn-num">
                <span onClick={reduceCart} className="btn-num-btn">{'-'}</span>
                <H1 size="medium-plus">{cart}</H1>
                <span onClick={addCart} className="btn-num-btn">{'+'}</span>
            </div>
          </div>
          <div className="btn-line">
            <a onClick={addToCart} className="btn-cart" sx={{backgroundColor:'primary'}} ><H1 size="small-plus" color="white" className="btn-cart-label" >Add to Cart</H1></a>
          </div>
        </div>
      </div>
    )
  }

export default AddNewKit