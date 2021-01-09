/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import orderActions from 'redux/actions/order'
import Layout from 'components/Layout'
import H1 from 'elements/H1'
import Button1 from 'elements/Button1'
import Text from 'elements/Text'
import Input from 'elements/Input'
import BackArrow from 'components/BackArrow'
import TestResultsTable from '../../routes/Dashboard/TestResultsTable'

import './index.scss'
import avatarTempSrc from '../../images/gatsby-astronaut.png'
import downloadIcon from '../../images/icon/downloadIcon.png'
import emailIcon from '../../images/icon/emailIcon.png'


const Paragraph = ({ text, ...rest }) => (
  <div style={{marginBottom: '32px'}} {...rest}>
    <Text
      size="small-plus"
      family="Inter"
      color="#637381"
    >
      {text}
    </Text>
  </div>
)

const TextBlock = ({ block, ...rest }) => (
  <div className="text-block" {...rest}>
    <H1 size="large-minus">{block.title}</H1>
    {
      block.subBlocks.map((subBlock, idx)=>(
        <Paragraph text={subBlock.description.description} key={idx} />
      ))
    }
  </div>
)

const SubTextBlock = ({ block, ...rest }) => (
  <div className="text-block" {...rest}>
    <div sx={{marginBottom: '16px'}}>
      <Text size="medium" color="black">{block.title}</Text>
    </div>
    {
      block.subBlocks.map((subBlock, idx)=>(
        <Paragraph text={subBlock.description.description} key={idx}/>
      ))
    }
  </div>
)

const  TestResults = () => {
  const data = useStaticQuery(graphql`
  query TestResultsQuery {
    contentfulPage(title: {eq: "TestResults"}) {
      blocks {
        title
        subBlocks {
          ... on ContentfulPageBlock {
            description {
              description
            }
            title
            subBlocks {
              ... on ContentfulPageBlock {
                id
                description {
                  description
                }
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
    <Layout >
      <div sx={{backgroundColor: '#f9f9f9', width: '100%'}}>
        <div className="test-results-back-arrow"><BackArrow to="" /></div>
        <div className="test-results-block">
          <div className="check-card">
            <div className="left-part">
              <div className="avatar-wrapper">
                <img src={avatarTempSrc} alt=""/>
              </div>
              <div className="avatar-desc">
                <H1 size="large-minus">Sam Jones</H1>
                <Text size="small" color="black" family="Inter">
                  <span sx={{color: '#5D6F88'}}>Test Date:</span> October 15th 2020
                </Text>
                <div className="btn-group">
                  <Button1 size="smallPlus" className="download-btn"><img src={downloadIcon} alt="" />Download</Button1>
                  <span className="email-btn"><img src={emailIcon} alt="" /></span>
                </div>
              </div>
            </div>
            <div className="right-part">
              <Text size="medium-minus" family="Inter" color="#1A202C">
                You tested<br/>
                <H1 size="large" color="primary" sx={{marginBottom: '8px'}}>Negative</H1>
                for a COVID-19 infection
              </Text>
            </div>
          </div>
          <TestResultsTable />
          <div className="text-part">
            <TextBlock block={blocks[0]} />
            <div className="text-block">
              <H1 size="large-minus">{blocks[1].title}</H1>
              {
                blocks[1].subBlocks.map((subBlock, idx)=>(
                  <SubTextBlock block={subBlock} key={idx}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TestResults