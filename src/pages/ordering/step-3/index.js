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

import './index.scss'


const  Step3 = () => {
  const data = useStaticQuery(graphql`
    query OrderStep3Query {
      contentfulPage(title: {eq: "OrderStep3"}) {
        blocks {
          title
          subBlocks {
            ... on ContentfulPageBlock {
              id
              input {
                placeholer
              }
              title
              description {
                description
              }
              image {
                file {
                  url
                }
              }
            }
          }
          image {
            file {
              url
            }
          }
        }
      }
    }
  `)

  const block = data?.contentfulPage?.blocks[0] || []
  
  const [showGuardian, setShowGuardian] = useState(true)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [birth, setBirth] = useState(null)
  const [postalCode, setPostalCode] = useState("")
  const [guardianFirstName, setGuardianFirstName] = useState("")
  const [guardianLastName, setGuardianLastName] = useState("")
  const [agreement, setAgreement] = useState(false)
  const dispatch = useDispatch()

  const handleShowGuardian = (e) => {
    e.preventDefault();
    setShowGuardian(!showGuardian);
  }
  const handleInputs = (idx) => {
    if(idx === 0){
      return (data) => setFirstName(data)
    }else if(idx === 1){
      return (data) => setLastName(data)
    }else if(idx === 2){
      return (date) => setBirth(date)
    }else if(idx === 3){
      return (data) => setPostalCode(data)
    }else if(idx === 4){
      return (data) => setGuardianFirstName(data)
    }else if(idx === 5){
      return (data) => setGuardianLastName(data)
    }
    alert("opphs")
  }

  const handleSubmit = async () => {
    await dispatch(orderActions?.update({
      firstName,
      lastName,
      birth,
      postalCode,
      guardianFirstName,
      guardianLastName,
      agreement,
    }))
  }
  return (
    <Layout isHome={true} noHeader noFooter>
      <div className="order-step3-block">
        <img src={block.image.file.url} alt="alt" className="step-mark"/>
        <div className="step3-background">
          <div className="step3-inside">
            <H1 size="large-minus" className="step3-title">{block.title}</H1>
            <div className="form-group">
              {block.subBlocks.map((subBlock, idx) => {
                if(subBlock.input) {
                  if(idx > 3 && !showGuardian) return null
                  else return (
                    <div  key={idx}>
                      <div className="input-box"
                        sx={ (idx === 2) ? {marginBottom: '8px'} : {marginBottom: '16px'}}
                      >
                        <Text size="small-plus" className="form-label">{subBlock.title}</Text>
                        <Input 
                          type={idx===2 ? "date" : "text"} 
                          placeholder={subBlock.input.placeholer} 
                          iconSrc={subBlock?.image}
                          icon={(idx === 2) ? 'right' : 'left' }
                          handler={handleInputs(idx)} 
                        />
                      </div>
                      {
                        idx === 2 && 
                        <div style={{marginBottom: '16px'}}>
                          <Text size="small" className="form-text">
                            Order can be ordered only by an adult. 
                            <a type="button" onClick={handleShowGuardian}>
                              <Text size="small" color="primary" className="form-text-link"> Click here if you are the guardian/supervisor</Text>
                            </a>
                          </Text>
                        </div>
                      }
                    </div>
                  )
                } else {
                  if(!showGuardian) return null
                  else return (
                    <div key={idx} className="agreement">
                      <input 
                        type="checkbox"
                        value="agreement"
                        checked={agreement}
                        onChange={(e) => setAgreement(e.currentTarget.checked)}
                      />
                      <Text size="small" className="agreement-text">{subBlock.description.description}</Text>
                    </div>
                  )
                }
              })}
            </div>
            <Button1 
              size="medium" 
              onClick={handleSubmit}
              sx={{color: 'white'}} 
              to={'/ordering/step-4'}
              className="step3-next-btn"
            >Next</Button1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Step3