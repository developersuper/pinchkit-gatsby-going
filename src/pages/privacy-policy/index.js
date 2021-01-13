import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import Layout from 'components/Layout'
import LegalBody from 'routes/Legal/body'

import './index.scss'
// import SEO from 'components/seo'

const PolicyPage = () => {
  const data = useStaticQuery(graphql`
    query PolicyPageQuery {
      contentfulPageBlock(title: {eq: "Privacy Policy"}) {
        title
        subBlocks {
          ... on ContentfulPageBlock {
            title
            description {
              description
            }
          }
        }
      }
    }
  `)
  const block = data?.contentfulPageBlock || []
  return (
    <Layout isHome={true}>
      <LegalBody {...block} />
    </Layout>
  )
}

export default PolicyPage
