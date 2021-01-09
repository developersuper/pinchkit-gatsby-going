/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'

import H1 from 'elements/H1'
import Text from 'elements/Text'
import SignUpForm from 'elements/SignUpForm'

import './index.scss'

const RequestInformationBlock = () => {
  const data = useStaticQuery(graphql`
    query RequestInformation {
      contentfulPageBlock(title: {eq: "Request Information"}) {
        title
        description {
          description
        }
        button {
          label
          path
        }
      }
    }`
  )
  const { title, description, button } = data.contentfulPageBlock;
  return (
    <div id="request-information-block" sx={{backgroundColor: '#F7F7F7'}}>
      <div className="about-fifth-block">
          <H1 className="about-5-title" color="primary">{title}</H1>
          <Text color="black" family="Univers-LT-Std-45-Light" className="about-5-desc" size="medium-minus">{description?.description}</Text>
          <SignUpForm path={button?.path} label={button?.label} />
      </div>
    </div>
  )
}

export default RequestInformationBlock