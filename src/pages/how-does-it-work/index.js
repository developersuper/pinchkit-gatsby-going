import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import Layout from 'components/Layout'
import FirstBlock from 'routes/how-does-it-work/FirstBlock'
import SecondBlock from 'routes/how-does-it-work/SecondBlock'
import ThirdBlock from 'routes/how-does-it-work/ThirdBlock'
import FourthBlock from 'routes/how-does-it-work/FourthBlock'
import SymptomsBlock from 'components/SymptomsBlock'
// import SEO from 'components/seo'

const HowDoesItWorkPage = () => {
  const data = useStaticQuery(graphql`
    query HowDoesItWorkPageQuery {
      contentfulPage(title: { eq: "How does it work?" }) {
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
            }
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
      <SymptomsBlock />
    </Layout>
  )
}

export default HowDoesItWorkPage
