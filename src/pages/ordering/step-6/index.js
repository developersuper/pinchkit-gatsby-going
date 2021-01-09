/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { useDispatch } from 'react-redux'
import {useState} from 'react'

import orderActions from 'redux/actions/order'
import Layout from 'components/Layout'
import H1 from 'elements/H1'
import Button1 from 'elements/Button1'
import Text from 'elements/Text'

import './index.scss'

const  Step6 = () => {
  const data = useStaticQuery(graphql`
    query OrderStep6Query {
      contentfulPage(title: {eq: "OrderStep6"}) {
        blocks {
          title
          image {
            file {
              url
            }
          }
          subBlocks {
            ... on ContentfulPageBlock {
              id
              title
              description {
                description
              }
            }
          }
          description {
            description
          }
          link {
            label
            path
          }
        }
      }
    }
  `)
  const block = data?.contentfulPage?.blocks[0] || []
  const [query, setQuery] = useState({})
  const dispatch = useDispatch()
  const handleCheckbox = (value) => {
    return (e) => setQuery({
      ...query,
      [value]: e.currentTarget.checked
    })
  }
  const handleNext = () => {
    dispatch(orderActions.update({ step6Query: query }))
  }
  return (
    <Layout isHome={true} noHeader noFooter>
      <div className="order-step6-block">
        <img src={block.image.file.url} alt="alt" className="step-mark"/>
        <div className="step6-background">
          <div className="step6-inside">
            <H1 size="medium-plus" className="step6-title">{block.title}</H1>
            <Text size="medium" className="step6-checkAll">{block.description.description}</Text>
            {block.subBlocks.map((subBlock, key) => {
              return (
                <div key={key} className="symptoms">
                  <H1 size="small-plus" className="symptom-title">{subBlock.description.description}</H1>
                  <input type="checkbox" value={key} onChange={handleCheckbox(key)} />
                </div>
              )
            })}
              <Button1 
                onClick={handleNext}
                size="medium"
                sx={{
                      color: 'white',
                    }}
                to={'/ordering/step-7'}
                className="step6-active-btn"
              >
                  Next
              </Button1>
              <Button1 
                size="medium"
                sx={{
                    color: 'black', 
                    backgroundColor: 'white', 
                    border: '1px solid #E6E6E6', 
                  }} 
                to={'/ordering/step-7'}
                className="step6-passive-btn"
              >
                {block.link.label}
              </Button1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Step6