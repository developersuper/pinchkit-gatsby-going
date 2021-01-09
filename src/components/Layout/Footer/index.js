/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'

import ContactBlock from 'routes/Footer/ContactBlock'
import PageLinksBlock from 'routes/Footer/PageLinksBlock'
import AdditionalContactsBlock from 'routes/Footer/AdditionalContactsBlock'
import SubscribeBlock from 'routes/Footer/SubscribeBlock'
import TermsAndPoliciesBlock from 'routes/Footer/TermsAndPoliciesBlock'
import SocialLinksBlock from 'routes/Footer/SocialLinksBlock'
import LanguageSelectionBlock from 'routes/Footer/LanguageSelectionBlock'

import './index.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contentfulFooter(title: {eq: "Default"}) {
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
        <div className="footer-first-section" sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.2)',}}>
          <ContactBlock {...footerData} />
          <PageLinksBlock {...pageLinks} />
          <AdditionalContactsBlock {...additionalContacts} />
          <SubscribeBlock {...subscribe} />
        </div>
        <div className='footer-second-section'>
          <TermsAndPoliciesBlock {...termsAndPolicies} />
          <LanguageSelectionBlock />
          <SocialLinksBlock {...socialLinks} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
