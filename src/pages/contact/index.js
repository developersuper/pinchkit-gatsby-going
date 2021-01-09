import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import Layout from 'components/Layout'
import FirstBlock from 'routes/Contact/FirstBlock'
import SecondBlock from 'routes/Contact/SecondBlock'
import SymptomsBlock from 'components/SymptomsBlock'

import './index.scss'
// import SEO from 'components/seo'

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      contentfulPage(title: {eq: "Contact"}) {
        blocks {
          title
          description {
            description
          }
          subBlocks {
            ... on ContentfulPageLink {
              label
              path
            }
            ... on ContentfulPageBlock {
              title
              description {
                description
              }
              link {
                label
                path
              }
              subBlocks {
                ... on ContentfulPageLink {
                  label
                  path
                }
              }
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
  const blocks = data?.contentfulPage?.blocks || []
  return (
    <Layout isHome={true}>
        <FirstBlock {...blocks[0]} />
        <SecondBlock {...blocks[1]} />
        <SymptomsBlock />
    </Layout>
  )
}

export default ContactPage
