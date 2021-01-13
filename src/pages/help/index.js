import { useStaticQuery, graphql } from 'gatsby'
import { useEffect, useState } from 'react'
import React from 'react'

import Layout from 'components/Layout'
import FirstBlock from 'routes/Help/FirstBlock'
import http from 'services/articles'

import './index.scss'
// import SEO from 'components/seo'

const HelpPage = () => {
  const data = useStaticQuery(graphql`
    query HelpQuery {
      contentfulPage(title: {eq: "Help"}) {
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
        description {
          description
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
  const [articles, setArticles] = useState([])
  const [sections, setSections] = useState([])

  useEffect(() => {
    const getData = async () => {
      const articles = await http.getArticles()
      const sections = await http.getSections()
      setArticles([...articles])
      setSections([...sections])
    }
    getData()
  }, [])

  return (
    <Layout isHome={true}>
        <FirstBlock {...blocks[0]} articles={articles} sections={sections} />
    </Layout>
  )
}

export default HelpPage
