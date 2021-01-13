import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import Layout from 'components/Layout'
import FirstBlock from 'routes/Blog/FirstBlock'
import SecondBlock from 'routes/Blog/SecondBlock'
// import ThirdBlock from 'routes/Blog/ThirdBlock'

import './index.scss'
// import SEO from 'components/seo'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query BlogQuery {
      allContentfulBlog {
        nodes {
          title
          blogPath: gatsbyPath(filePath: "/blog/{ContentfulBlog.title}")
          description {
            content {
              content {
                value
              }
            }
          }
          image {
            file {
              url
            }
          }
          author {
            name
            photo {
              file {
                url
              }
            }
            role
          }
        }
      }
      contentfulPage(title: {eq: "Blog"}) {
      blocks {
        title
        description {
          description
        }
        image {
          file {
            url
          }
        }
        subBlocks {
          ... on ContentfulPageLink {
              path
              label
              icon {
                file {
                  url
                }
              }
            }
          ... on ContentfulPageBlock {
            id
            subBlocks {
              ... on ContentfulPageBlock {
                id
                image {
                  file {
                    url
                  }
                }
                title
                description {
                  description
                }
                subBlocks {
                  ... on ContentfulPageBlock {
                    id
                    button {
                      icon {
                        file {
                          url
                        }
                      }
                    }
                    title
                    description {
                      description
                    }
                  }
                }
                link {
                path
              }
              }
            }
            title
            button {
              label
              path
            }
          }
        }
      }
    }
  }
  `)

  const blocks = data?.contentfulPage?.blocks || []
  const nodes = data.allContentfulBlog.nodes
  const blogs = Array.from( new Set( nodes.map(node => node.title ) ) )
    .map( title => {
      return {
        ...nodes.find(node => node.title === title),
      }
    })
  return (
    <Layout isHome={true}>
      <FirstBlock {...blocks[0]} />
      <SecondBlock {...blocks[1]} blogs={blogs} />
      {/* <ThirdBlock {...blocks[2]} /> */}
    </Layout>
  )
}

export default BlogPage
