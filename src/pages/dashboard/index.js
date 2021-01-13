import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import Layout from 'components/Layout'
import MainBlock from 'routes/Dashboard/MainBlock.js'

import './index.scss'
// import SEO from 'components/seo'

const DashboardPage = () => {
  // const data = useStaticQuery(graphql`
  //   query DashboardQuery {
  //     allShopifyProduct {
  //       edges {
  //         node {
  //           id
  //           descriptionHtml
  //           handle
  //           images {
  //             originalSrc
  //           }
  //           variants {
  //             id
  //             availableForSale
  //             image {
  //               originalSrc
  //             }
  //             price
  //             sku
  //             title
  //             compareAtPrice
  //           }
  //           title
  //         }
  //       }
  //     }
  //     contentfulPage(title: {eq: "Dashboard"}) {
  //       blocks {
  //         image {
  //           file {
  //             url
  //           }
  //         }
  //         title
  //         input {
  //           placeholer
  //         }
  //         subBlocks {
  //           ... on ContentfulPageBlock {
  //             title
  //             description {
  //               description
  //             }
  //             image {
  //               file {
  //                 url
  //               }
  //             }
  //           }
  //         }
  //         button {
  //           path
  //           label
  //         }
  //       }
  //     }
  //   }
  // `)
  // const blocks = data?.contentfulPage?.blocks || []
  // const shopifyProduct = data?.allShopifyProduct?.edges[0]?.node || {}
  return (
    <Layout>
      {/* <MainBlock {...blocks[0]} product={shopifyProduct} /> */}
    </Layout>
  )
}

export default DashboardPage
