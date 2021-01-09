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


const  SignIn = () => {
  const data = useStaticQuery(graphql`
  query SignInQuery {
    contentfulPage(title: {eq: "Sign In"}) {
      blocks {
        title
        description {
          description
        }
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
          ... on ContentfulPageLink {
            id
            label
            path
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
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const dispatch = useDispatch()

  const handleInputs = (id) => {
    if(id === 'email'){
      return (data) => setEmail(data)
    }
    return (data) => setPassword(data)
  }
  const handleSubmit = async () => {
  }
  return (
    <Layout isHome={true} noFooter>
      <div className="sign-block">
        <img src={block?.image?.file?.url} className="main-img"/>
        <div className="right-part">
          <div className="main-part">
            <H1 size="large-minus" className="title">{block?.description.description}</H1>
            <Text size="small-plus" className="form-label">{block?.subBlocks[0]?.title}</Text>
            <Input 
              type="email" 
              placeholder={block?.subBlocks[0]?.input?.placeholer} 
              handler={handleInputs('email')} 
            />
            <Text size="small-plus" className="form-label">{block?.subBlocks[1]?.title}</Text>
            <Input 
              type="password" 
              placeholder="*********  "
              handler={handleInputs('password')} 
            />
            <Link to="" size="small-plus" className="forgot-pass">{block?.subBlocks[2].label}</Link>
            <Button1 size="medium" onClick={handleSubmit}>{block?.button?.label}</Button1>
            <Text size="small-plus" family="Inter" className="sign-up-text">
              Do you have an account? 
              <Link 
                to={block?.subBlocks[3]?.path}
              >Sign Up</Link>
            </Text>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SignIn