/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { useDispatch } from 'react-redux'

import orderActions from 'redux/actions/order'
import Layout from 'components/Layout'
import H1 from 'elements/H1'
import Text from 'elements/Text'
import Button1 from 'elements/Button1'

import './index.scss'

const  Step2 = () => {
  const data = useStaticQuery(graphql`
    query OrderStep2Query {
      contentfulPage(title: {eq: "OrderStep2"}) {
        blocks {
          title
          subBlocks {
            ... on ContentfulPageLink {
              path
              label
            }
          }
          image {
            file {
              url
            }
          }
          description {
            description
          }
        }
      }
    }
  `)

  const block = data?.contentfulPage?.blocks[0] || []
  const dispatch = useDispatch()
  
  const handleBtn = (data) => {
    return () => dispatch(orderActions.update({ beforeOrder: data }))
  }
  return (
    <Layout isHome={true} noHeader noFooter>
      <div className="order-step2-block">
        <img src={block.image.file.url} alt="alt" className="step-mark" />
        <div className="step2-background">
          <div className="step2-inside">
            <H1 size="large-minus" className="step2-title">{block.title}</H1>
            <Text size="small" className="step2-description">{block.description.description}</Text>
            <div className="btn-group">
              <Button1 
                onClick={handleBtn('begin')}
                size="medium"
                sx={{color: 'white', marginBottom: '16px'}}
                to={'/ordering/step-3'}
              >
                  {block.subBlocks[0].label}
              </Button1>
              <Button1 
                size="medium"
                sx={{color: 'black', backgroundColor: 'white', border: '1px solid #E6E6E6'}} 
                to={'/ordering/step-3'}
              >
                {block.subBlocks[1].label}
              </Button1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Step2