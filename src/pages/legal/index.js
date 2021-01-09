import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import Layout from 'components/Layout'
import LegalBody from 'routes/Legal/body'
import RequestInformationBlock from 'components/RequestInformationBlock'
import SymptomsBlock from 'components/SymptomsBlock'

import './index.scss'
// import SEO from 'components/seo'

const LegalPage = () => {
  const data = useStaticQuery(graphql`
    query LegalQuery {
      contentfulPage(title: {eq: "Legal"}) {
        blocks {
          title
          subBlocks {
            ... on ContentfulPageBlock {
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
        }
      }
    }
  `)
  const blocks = data?.contentfulPage?.blocks || []
  return (
    <Layout isHome={true}>
      <LegalBody {...blocks[0]} />
      <RequestInformationBlock />
      <SymptomsBlock />
    </Layout>
  )
}

export default LegalPage
