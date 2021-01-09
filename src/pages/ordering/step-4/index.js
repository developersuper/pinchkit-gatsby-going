/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { useDispatch } from 'react-redux'

import orderActions from 'redux/actions/order'
import Layout from 'components/Layout'
import H1 from 'elements/H1'
import Button1 from 'elements/Button1'

import './index.scss'

const  Step4 = () => {
  const data = useStaticQuery(graphql`
    query OrderStep4Query {
      contentfulPage(title: {eq: "OrderStep4"}) {
        blocks {
          title
          image {
            file {
              url
            }
          }
        }
      }
    }
  `)
  const block = data?.contentfulPage?.blocks[0] || []
  const dispatch = useDispatch()
  
  const handleBtn = (data) => {
    return () => dispatch(orderActions.update({ firstTest: data }))
  }
  return (
    <Layout isHome={true} noHeader noFooter>
      <div className="order-step4-block">
        <img src={block.image.file.url} alt="alt" className="step-mark" />
        <div className="step4-background">
          <div className="step4-inside">
            <H1 size="large-minus" className="step4-title">{block.title}</H1>
            <div className="btn-group">
              <Button1 
                onClick={handleBtn('yes')}
                size="medium" 
                sx={{color: 'white', marginBottom: '16px'}} 
                to={'/ordering/step-5'}>Yes</Button1>
              <Button1 
                onClick={handleBtn('no')}
                size="medium" 
                sx={{color: 'black', backgroundColor: 'white', border: '1px solid #E6E6E6'}} 
                to={'/ordering/step-5'}>No</Button1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Step4