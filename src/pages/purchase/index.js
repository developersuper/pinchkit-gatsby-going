import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import Layout from 'components/Layout'
import FirstBlock from 'routes/Purchase/FirstBlock'
import SecondBlock from 'routes/Purchase/SecondBlock'
import WhatTheyAreSayingBlock from 'components/WhatTheyAreSayingBlock'
import SymptomsBlock from 'components/SymptomsBlock'

import './index.scss'
// import SEO from 'components/seo'

const PurchasePage = () => {
  return (<div></div>)
  // const data = useStaticQuery(graphql`
  //   query PurchaseQuery {
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
  //     contentfulPage(title: {eq: "Purchase"}) {
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
  //         description {
  //           description
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
  // return (
  //   <Layout isHome={true}>
  //     <FirstBlock {...blocks[0]} product={shopifyProduct} />
  //     <SecondBlock {...blocks[1]} />
  //     <WhatTheyAreSayingBlock />
  //     <SymptomsBlock />
  //   </Layout>
  // )
}

export default PurchasePage
