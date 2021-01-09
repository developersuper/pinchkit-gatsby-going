import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import Layout from 'components/Layout'
// import SEO from 'components/seo'
import FirstBlock from 'routes/Home/FirstBlock'
import SecondBlock from 'routes/Home/SecondBlock'
import ThirdBlock from 'routes/Home/ThirdBlock'
import FourthBlock from 'routes/Home/FourthBlock'
import FifthBlock from 'routes/Home/FifthBlock'
import WhatTheyAreSayingBlock from 'components/WhatTheyAreSayingBlock'
import SymptomsBlock from 'components/SymptomsBlock'

import './index.scss'

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      contentfulPage(title: {eq: "Home"}) {
        blocks {
          title
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
                label
                path
              }
              button {
                label
                path
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
          description {
            description
          }
          link {
            label
            path
          }
          image {
            file {
              url
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
      <ThirdBlock {...blocks[2]} />
      <FourthBlock {...blocks[3]} />
      <FifthBlock {...blocks[4]} />
      <WhatTheyAreSayingBlock />
      <SymptomsBlock />
      {/* <EighthBlock {...blocks[7]} /> */}
    </Layout>
  )
}

export default HomePage
