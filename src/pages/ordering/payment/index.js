/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import orderActions from 'redux/actions/order'
import Layout from 'components/Layout'
import H1 from 'elements/H1'
import Button1 from 'elements/Button1'
import Text from 'elements/Text'
import Input from 'elements/Input'
import Radio from 'elements/Radio'

import './index.scss'

const  Payment = () => {
  const data = useStaticQuery(graphql`
    query OrderPaymentQuery {
      contentfulPage(title: {eq: "OrderShipping"}) {
        blocks {
          title
          description {
            description
          }
          image {
            file {
              url
            }
          }
          button {
            label
            path
          }
          subBlocks {
            ... on ContentfulPageBlock {
              title
              image {
                file {
                  url
                }
              }
              description {
                description
              }
              subBlocks {
                ... on ContentfulInputField {
                  placeholer
                }
                ... on ContentfulPageBlock {
                  id
                  subBlocks {
                    ... on ContentfulInputField {
                      id
                      placeholer
                    }
                  }
                  title
                }
              }
            }
          }
        }
      }
    }
  `)

  const block = data?.contentfulPage?.blocks[0] || []
  const [paymentWay, setPaymentWay] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [address, setAddress] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const dispatch = useDispatch()
  
  const handleInputs = (idx, iidx) => {
    if(idx === 0){
      return (data) => setPaymentWay(data) 
    }
    if(idx === 1){
      return (data) => setFirstName(data) 
    }
    if(idx === 2){
      return (data) => setLastName(data)
    }
    if(idx === 3){
      if(iidx === 0){
        return (data) => setAddress(data)
      }
      if(iidx === 1){
        return (data) => setStreet(data)
      }
      if(iidx === 2){
        return (data) => setCity(data)
      }
      if(iidx === 3){
        return (e) => setState(e.currentTarget.value)
      }
      if(iidx === 4){
        return (data) => setZipcode(data)
      }
    }
    if(idx === 4){
      return (data) => setPhone(data)
    }
    if(idx === 5){
      return (data) => setEmail(data)
    }
  }
  const handleSubmit = () => {
    dispatch(orderActions?.update({
      payment: {
        firstName,
        lastName,
        address,
        street,
        city,
        state,
        zipcode,
        phone,
        email,
        paymentWay
      }
    }))
  }
  return (
    <Layout isHome={true} noHeader noFooter>
      <div className="order-shipping-block">
        <img src={block.image.file.url} alt="alt" className="step-mark" />
        <div className="shipping-background">
          <div className="shipping-inside">
            <H1 size="large-minus" className="shipping-title">{block.title}</H1>
            <div className="form-group">   
              <Radio lists={[{label: 'Credit Card'}, {label: 'Paypal'}]} handler={handleInputs(0, 0)}/>
              {
                block.subBlocks.map((subBlock, idx) => {
                  if(idx === 0) return null
                  else return (
                    <div key={idx} className="input-box">
                      <Text size="small-plus" className="form-label">{subBlock.description?.description}</Text>
                      {
                        subBlock.subBlocks.map((eachBlock, iidx)=> {
                          if(iidx === 4) return null
                          else if(idx === 3 && iidx === 3){
                            return(
                              <div key={idx * 10 + iidx} style={{display: 'flex', justifyContent: 'space-between',marginBottom: '16px'}}>
                                <div style={{width: '48%'}}>
                                  <select 
                                    onChange={handleInputs(3, 3)} 
                                    className="shipping-select"
                                    sx={{fontSize: 'small-plus', color: 'secondary'}} 
                                  >
                                    <option value="" disabled selected hidden>{eachBlock.title}</option>
                                    {eachBlock.subBlocks.map((state)=> (
                                      <option key={state.placeholer} value={state.placeholer}>{state.placeholer}</option>
                                    ))}
                                  </select>
                                </div>
                                <div style={{width: '48%'}}> 
                                  <Input 
                                    handler={handleInputs(idx, 4)}
                                    type="text" 
                                    placeholder={subBlock.subBlocks[4].placeholer} 
                                    iconSrc = {null}
                                    icon={'left'} 
                                  />
                                </div>
                              </div>
                            )
                          }
                          else return (
                            <div key={idx * 10 + iidx} style={{marginBottom: '16px'}}>
                              <Input 
                                handler={handleInputs(idx, iidx)}
                                type="text" 
                                placeholder={eachBlock.placeholer} 
                                iconSrc = {iidx === 0 ? subBlock?.image : null}
                                icon={'left'} 
                              />
                            </div>
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </div>
            <Text size="small" className="shipping-description">{block.description?.description}</Text>
            <Button1 
              onClick={handleSubmit}
              size="medium" 
              sx={{color: 'white'}} 
              to={'/ordering/review-order'}
              className="shipping-continue-btn"
            >
              {block.button.label}
            </Button1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Payment