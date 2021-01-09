/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import { useDispatch } from 'react-redux'

import orderActions from 'redux/actions/order'
import Layout from 'components/Layout'
import H1 from 'elements/H1'
import Button1 from 'elements/Button1'
import Text from 'elements/Text'

import './index.scss'

const  Step1 = () => {
  const data = useStaticQuery(graphql`
    query OrderStep1Query {
      contentfulPage(title: {eq: "OrderStep1"}) {
        blocks {
          title
          subBlocks {
            ... on ContentfulPageLink {
              path
              label
            }
          }
          link {
            label
            path
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

  const dispatch = useDispatch()
  
  const handleBtn = (data) => {
    return () => dispatch(orderActions.update({ orderingOne: data }))
  }

  return (
    <Layout noHeader noFooter>
      <div className="order-step1-block">
        <img src={block.image.file.url} alt="alt" className="step-mark"/>
        <div className="step1-background">
          <div className="step1-inside">
            <H1 size="large-minus" className="step1-title">{block.title}</H1>
            <div className="btn-group">
              <Button1 
                onClick={handleBtn('myself')}
                size="medium" 
                sx={{color: 'white', marginBottom: '16px'}} 
                to={'/ordering/step-2'}
              >
                {block.subBlocks[0].label}
              </Button1>
              <Button1 
                onClick={handleBtn('someone else')}
                size="medium" 
                sx={{color: 'black', backgroundColor: 'white', border: '1px solid #E6E6E6'}} 
                to={'/ordering/step-2'}
              >
                {block.subBlocks[1].label}
              </Button1>
            </div>
            <Text size="small-plus" className="step1-text">Already have an account?&nbsp;<Link to={block.link.path} sx={{color:'primary', fontWeight: 'bold'}}>{block.link.label}</Link></Text>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Step1