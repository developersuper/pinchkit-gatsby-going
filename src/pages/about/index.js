import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import Layout from 'components/Layout'
import FirstBlock from 'routes/About/FirstBlock'
// import SEO from 'components/seo'
import SecondBlock from 'routes/About/SecondBlock'
import ThirdBlock from 'routes/About/ThirdBlock'
import FourthBlock from 'routes/About/FourthBlock'
import RequestInformationBlock from 'components/RequestInformationBlock'
import SymptomsBlock from 'components/SymptomsBlock'

import './index.scss'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutPageQuery {
      contentfulPage(title: {eq: "About"}) {
        blocks {
          description {
            description
          }
          title
          button {
            label
            path
          }
          image {
            file {
              url
            }
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
              link {
                path
                icon {
                  file {
                    url
                  }
                }
                label
              }
            }
            ... on ContentfulPageLink {
              path
              label
              icon {
                file {
                  url
                }
              }
            }
          }
          link {
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
      <ThirdBlock {...blocks[2]} />
      <FourthBlock {...blocks[3]} />
      <RequestInformationBlock />
      <SymptomsBlock />
    </Layout>
  )
}

export default AboutPage
