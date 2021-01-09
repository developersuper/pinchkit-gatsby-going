/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { useSelector } from 'react-redux'

import Layout from 'components/Layout'
import H1 from 'elements/H1'
import Button1 from 'elements/Button1'

import './index.scss'

const  Step7 = () => {
  const data = useStaticQuery(graphql`
    query OrderStep7Query {
      contentfulPage(title: {eq: "OrderStep7"}) {
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
          button {
            label
            path
          }
          link {
            label
            path
          }
        }
      }
    }
  `)

  const block = data?.contentfulPage?.blocks[0] || []
  const name = useSelector(state => state?.order?.firstName) || "Sam"
  return (
    <Layout isHome={true} noHeader noFooter>
      <div className="order-step7-block">
        <img src={block.image.file.url} alt="alt" className="step-mark" />
        <div className="step7-background">
          <div className="step7-inside">
            <H1 size="large-minus" className="step7-title">
              <span className="title-name">{name}</span>{block.title}
            </H1>
            <Button1 
              className="step7-first-btn"
              size="medium"
              sx={{color: 'white', marginBottom: '16px'}}
              to={block.button.path}
            >
              {block.button.label}
            </Button1>
            <H1 size="medium" className="step7-second-title">{block.description.description}</H1>
            <Button1 
              className="step7-second-btn"
              size="medium"
              sx={{color: 'black', backgroundColor: 'white', border: '1px solid #E6E6E6'}} 
              to={block.link.path}
            >
              {block.link.label}
            </Button1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Step7