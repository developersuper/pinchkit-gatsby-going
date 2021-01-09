import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import Layout from 'components/Layout'
import FirstBlock from 'routes/ordering/review-order/FirstBlock'
import SecondBlock from 'routes/ordering/review-order/SecondBlock'
import ThirdBlock from 'routes/ordering/review-order/ThirdBlock'
import FourthBlock from 'routes/ordering/review-order/FourthBlock'

import './index.scss'

const ReviewOrder = () => {

  const data = useStaticQuery(graphql`
    query ReviewOrderQuery {
      contentfulPage(title: {eq: "reviewOrder"}) {
        blocks {
          image {
            file {
              url
            }
          }
          title
          input {
            placeholer
          }
          subBlocks {
            ... on ContentfulPageBlock {
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
          button {
            path
            label
          }
        }
      }
    }
  `)

  const blocks = data?.contentfulPage?.blocks || []
  return (
    <Layout noHeader>
      <FirstBlock {...blocks[0]}/>
      <div className = "order-review-page">
        <SecondBlock {...blocks[1]} />
        <ThirdBlock {...blocks[2]} />
      </div>
      <FourthBlock {...blocks[3]} />
    </Layout>
  )
}

export default ReviewOrder
