/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'

import LogoBlock from 'routes/Footer1/LogoBlock'
import NavigationBlock from 'routes/Footer1/NavigationBlock'
import ResourcesBlock from 'routes/Footer1/ResourcesBlock'
import SubscribeBlock from 'routes/Footer1/SubscribeBlock'
import TermsAndPoliciesBlock from 'routes/Footer1/TermsAndPoliciesBlock'
import SocialLinksBlock from 'routes/Footer1/SocialLinksBlock'

import './index.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query Footer1Query {
      contentfulFooter(title: {eq: "Default1"}) {
        phone
        logo {
          file {
            url
          }
        }
        address
        pageLinks {
          title
          subBlocks {
            ... on ContentfulPageLink {
              label
              path
            }
          }
        }
        additionalContacts {
          title
          subBlocks {
            ... on ContentfulPageLink {
              label
              path
            }
          }
          description {
            description
          }
        }
        subscribe {
          title
          description {
            description
          }
          input {
            placeholer
          }
        }
        termsAndPolicies {
          description {
            description
          }
          title
          subBlocks {
            ... on ContentfulPageLink {
              label
              path
            }
          }
        }
        socialLinks {
          title
          description {
            description
          }
          subBlocks {
            ... on ContentfulPageLink {
              label
              path
              icon {
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  const footerData = data?.contentfulFooter || []
  const pageLinks = footerData.pageLinks
  const additionalContacts = footerData.additionalContacts
  const subscribe = footerData.subscribe
  const termsAndPolicies = footerData.termsAndPolicies
  const socialLinks = footerData.socialLinks

  return (
    <footer sx={{ backgroundColor: 'primary', display:'flex', justifyContent:'center'}}>
      <div className="footer-body">
        <div className="footer-first-section" >
          <div className="first-section-first">
            <LogoBlock {...footerData} />
            <div style={{ display: 'flex', flexWrap: 'wrap', paddingLeft: 25}}>
              <NavigationBlock {...pageLinks} />
              <ResourcesBlock {...additionalContacts} />
            </div>
          </div>
          <div className="first-section-second">
            <SubscribeBlock {...subscribe} />
            <SocialLinksBlock {...socialLinks} />
          </div>
        </div>
        <hr />
        <div className='footer-second-section'>
          <TermsAndPoliciesBlock {...termsAndPolicies} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
