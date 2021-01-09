/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { useState, useEffect } from 'react'

import H1 from 'elements/H1'
import Text from 'elements/Text'

import EachBox from './EachBox'
import './index.scss'

const WhatTheyAreSayingBlock = () => {

  const data = useStaticQuery(graphql`
    query WhatTheyAreSayingBlockQuery {
      contentfulPageBlock(title: {eq: "What they are saying."}) {
        title
        subBlocks {
          ... on ContentfulPageBlock {
            title
            description {
              description
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
      }
    }
  `)
  const { title, description, subBlocks } = data.contentfulPageBlock

  const [index, setIndex] = useState(0)
  let len = Math.round(subBlocks.length / 2)
  
  useEffect(() => {
    const interval = setInterval(() => setIndex(( index + 1 ) % len), 4000);
    return () => clearInterval(interval);
  }, [index, len]);

  return (
    <div className="home-sixth-block">
      <div className="six-left">
        <H1 size="large-plus" className="home6-title">{title}</H1>
        <Text size="medium-minus" color="black" className="home6-description">{description.description}</Text>
      </div>
      <div className="six-right">
        <div className="right-boxes">
          <EachBox {...subBlocks[2 * index]} />
          <EachBox {...subBlocks[(2 * index + 1) % subBlocks.length]} />
        </div>
        <div className="slider-symbol-wrapper">
          {
            subBlocks?.map((subBlock, idx) => {
              if(idx % 2 === 1) return ''
              return (
                <span
                  key={idx}
                  onClick={() => setIndex(idx / 2)} 
                  sx={{backgroundColor:`${index === (idx / 2) ? 'primary' : '#F1F1F1'}`}}
                ></span>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default WhatTheyAreSayingBlock