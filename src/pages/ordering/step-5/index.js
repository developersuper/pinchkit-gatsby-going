/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { useDispatch } from 'react-redux'
import {useState} from 'react'

import orderActions from 'redux/actions/order'
import Layout from 'components/Layout'
import H1 from 'elements/H1'
import Button1 from 'elements/Button1'

import './index.scss'

const  Step5 = () => {
  const data = useStaticQuery(graphql`
    query OrderStep5Query {
      contentfulPage(title: {eq: "OrderStep5"}) {
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
        }
      }
    }
  `)
  const block = data?.contentfulPage?.blocks[0] || []
  let initialQuery = {}
  block.subBlocks.forEach( (subBlock, key) => initialQuery[key] = 'yes' )
  const [query, setQuery] = useState(initialQuery)
  const dispatch = useDispatch()

  const styles = {
    active: {
      backgroundColor: 'primary',
      color: 'white',
      maxWidth: '172px', 
      width: '100%',
      fontSize: 'small-plus',
      fontWeight: 'bold',
      border: 'none'
    },
    nonActive: {
      color: 'black',
      backgroundColor: 'white',
      border: '1px solid #E6E6E6',
      maxWidth: '172px',
      width: '100%',
      fontSize: 'small-plus',
      fontWeight: 'bold',
    }
  }
  const handleQuery = (idx, answer) => {
    return () => setQuery({
      ...query,
      [idx]: answer
    })
  }
  const handleNext = () => {
    dispatch(orderActions.update({ step5Query: query }))
  }

  return (
    <Layout isHome={true} noHeader noFooter>
      <div className="order-step5-block">
      <img src={block.image.file.url} alt="alt" className="step-mark"/>
        <div className="step5-background">
          <div className="step5-inside">
            {block.subBlocks.map((subBlock, key) => {
              return (
                <div key={key} className="step5-questions">
                  <H1 size="medium-plus" className="each-title">{subBlock.description.description}</H1>
                  <div className="btn-group">
                    <button 
                      onClick={handleQuery(key, 'yes')}
                      sx={query[key] === 'yes' ? styles.active : styles.nonActive}
                    >Yes</button>
                    <button 
                      onClick={handleQuery(key, 'no')}
                      sx={query[key] === 'no' ? styles.active : styles.nonActive}
                    >No</button>
                  </div>
                </div>
              )
            })}
            <div className="bottom-btns">
              <Button1 
                size="mediumPlus" 
                sx={{
                      color: 'black',
                      maxWidth: '144px',
                      width: '100%',
                      backgroundColor: '#E5E5E5',
                      border: '1px solid #ECECEC',
                      marginRight: '16px',
                    }}
                to={'/ordering/step-4'}
              >Back</Button1>
              <Button1 
                onClick={handleNext}
                size="mediumPlus"
                sx={{
                      color: 'white',
                      maxWidth: '384px',
                      width: '100%'
                  }}
                to={'/ordering/step-6'}
              >Next</Button1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Step5