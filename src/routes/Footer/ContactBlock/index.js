/** @jsx jsx */
import { jsx } from 'theme-ui'
import Text from 'elements/Text'

import './index.scss'

const ContactBlock = ({ logo, phone, address }) => {
  return (
    <div className="contact-section">
      <img src={logo.file.url} className="contact-section-img" alt="" />
      <Text size="small-plus" color="white" family="OpenSans" className="contact-section-text">{phone}</Text>
      <Text size="small-plus" color="white" family="OpenSans" className="contact-section-text">{address}</Text>
    </div>
  )
}

export default ContactBlock