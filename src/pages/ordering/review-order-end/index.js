import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import Layout from 'components/Layout'
import EndFirstBlock from 'routes/ordering/review-order/EndFirstBlock'
import SecondBlock from 'routes/ordering/review-order/SecondBlock'
import FourthBlock from 'routes/ordering/review-order/FourthBlock'

import './index.scss'

const ReviewOrder = () => {

  const data = useStaticQuery(graphql`
    query ReviewOrderEndQuery {
      contentfulPage(title: {eq: "reviewOrderEnd"}) {
        blocks {
          image {
            file {
              url
            }
          }
          title
          description{
            description
          }
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
            ... on ContentfulPageLink {
              label
              path
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
      <EndFirstBlock {...blocks[0]}/>
      <div className = "order-review-page">
        <SecondBlock {...blocks[1]} />
      </div>
      <FourthBlock {...blocks[2]} />
    </Layout>
  )
}

export default ReviewOrder
