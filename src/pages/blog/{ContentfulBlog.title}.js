import React from "react"
import { Link, graphql } from "gatsby"

import Layout from 'components/Layout'
import H1 from 'elements/H1'
import Text from 'elements/Text'

import './blog.scss'

export default function HomePage(props) {
  return (
    <Layout>
      <div className="blog-block">
        <H1>{props.data.contentfulBlog.title}</H1>
        <Text size="small-plus">{props.data.contentfulBlog.description.content[0].content[0].value}</Text>
        <img src={props.data.contentfulBlog.image.file.url} alt="" />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    contentfulBlog(id: { eq: $id }) {
      title
      image {
        file {
          url
        }
      }
      description {
        content {
          content {
            value
          }
        }
      }
      blogPath: gatsbyPath(filePath: "/blog/{ContentfulBlog.title}")
    }
  }`