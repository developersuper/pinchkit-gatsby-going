import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import Layout from 'components/Layout'
import LegalBody from 'routes/Legal/body'

import './index.scss'
// import SEO from 'components/seo'

const TermsPage = () => {
  const data = useStaticQuery(graphql`
    query TermsPageQuery {
      contentfulPageBlock(title: {eq: "Terms of Service"}) {
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
  console.log(block)
  return (
    <Layout isHome={true}>
      <LegalBody {...block} />
    </Layout>
  )
}

export default TermsPage
