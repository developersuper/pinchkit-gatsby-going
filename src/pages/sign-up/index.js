/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import orderActions from 'redux/actions/order'
import Layout from 'components/Layout'
import H1 from 'elements/H1'
import Button1 from 'elements/Button1'
import Text from 'elements/Text'
import Input from 'elements/Input'

import './index.scss'


const  SignUp = () => {
  const data = useStaticQuery(graphql`
  query SignUpQuery {
    contentfulPage(title: {eq: "Sign Up"}) {
      blocks {
        description {
          description
        }
        subBlocks {
          ... on ContentfulPageLink {
            id
            label
            path
          }
          ... on ContentfulInputField {
            id
            placeholer
          }
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
      }
    }
  }
  `)

  const block = data?.contentfulPage?.blocks[0] || []
  
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  // const dispatch = useDispatch()

  const handleInputs = (id) => {
    if(id === 'email'){
      return (data) => setEmail(data)
    }
    if(id === 'firstname'){
      return (data) => setFirstname(data)
    }
    if(id === 'lastname'){
      return (data) => setLastname(data)
    }
    if(id === 'phone'){
      return (data) => setPhone(data)
    }
    return (data) => setPassword(data)
  }
  const handleSubmit = async () => {
  }
  return (
    <Layout isHome={true} noFooter>
      <div className="signup-block">
        <img src={block?.image?.file?.url} className="main-img"/>
        <div className="right-part">
          <div className="main-part">
            <H1 size="large-minus" className="title">{block?.description.description}</H1>
            <Text size="small-plus" className="form-label">{block?.subBlocks[0]?.placeholer}</Text>
            <Input 
              type="name" 
              placeholder="Sam" 
              handler={handleInputs('firstname')} 
            />
            <Text size="small-plus" className="form-label">{block?.subBlocks[1]?.placeholer}</Text>
            <Input 
              type="name" 
              placeholder="Smith"
              handler={handleInputs('lastname')} 
            />
            <Text size="small-plus" className="form-label">{block?.subBlocks[2]?.placeholer}</Text>
            <Input 
              type="email" 
              placeholder="sammyj@gmail.com"
              handler={handleInputs('email')} 
            />
            <Text size="small-plus" className="form-label">{block?.subBlocks[3]?.placeholer}</Text>
            <Input 
              type="phone"
              placeholder="530-555-5555" 
              handler={handleInputs('phone')} 
            />
            <Text size="small-plus" className="form-label">{block?.subBlocks[4]?.placeholer}</Text>
            <Input 
              type="password" 
              placeholder="***********"
              handler={handleInputs('password')} 
            />
            <div className="checkbox">
              <input type='checkbox' value="" className="input-checkbox"/>
              <Text size="small-plus" family="Inter" className="checkbox-text">
                I agree to the  
                <Link 
                  to={block?.subBlocks[6]?.path}
                >{block?.subBlocks[6]?.label}</Link>
              </Text>
            </div>
            <Button1 
              onClick={handleSubmit}
              size="medium"
            >{block?.button?.label}</Button1>
            <Text size="small-plus" family="Inter" className="sign-up-text">
              Do you have an account? 
              <Link 
                to={block?.subBlocks[5]?.path}
              >Sign In</Link>
            </Text>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SignUp