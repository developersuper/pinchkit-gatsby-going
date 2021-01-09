/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'

import H1 from 'elements/H1'

import './index.scss'

const SymptomsBlock = () => {
  const data = useStaticQuery(graphql`
    query SymptomsBlockQuery {
      contentfulPageBlock(title: {eq: "Related symptoms for COVID-19"}) {
        title
        subBlocks {
          ... on ContentfulPageBlock {
            id
            title
          }
        }
      }
    }
  `)
  const { title, subBlocks } = data.contentfulPageBlock
  return (
    <div sx={{backgroundColor:'#262626'}}>
      <div className="home-seventh-block">
        <H1 size="large-plus" color="white" className="title">{title}</H1>
        <div className="symptoms">
          {subBlocks.map((subBlock, idx) => {
            let customClass = "each-symptom"
            if(idx % 3 === 1) {
              customClass = customClass + " center"
            } else if (idx % 3 === 2) {
              customClass = customClass + " end"
            }
            return (
              <H1 key={idx} size="28px" color="white" className={customClass}>{subBlock.title}</H1>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SymptomsBlock