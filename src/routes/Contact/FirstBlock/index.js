/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhoneAlt
} from '@fortawesome/free-solid-svg-icons'


import H1 from 'elements/H1'
import Text from 'elements/Text'
import downArrow from 'images/icon/arrowPrimary.svg'
import ticketHttp from 'services/ticket'

import './index.scss'

const FirstBlock = ({ title, description, subBlocks, button }) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

    const onSubmit = async (e) => {
      e.preventDefault()
      await ticketHttp.postTicket(`FullName: ${fullName}, Email: ${email}, Message: ${msg}`)
    }
    return (
      <div sx={{backgroundColor:'#F7F7F7'}}>
        <div className="contact-first-block">
          <div className="contact-1-inner-wrapper">
            <div  className="contact-info">
              <H1 className="blog-fourth-title" color="primary">{title}</H1>
              <Text size="medium-minus" color="black" family="Univers-LT-Std-45-Light">{description?.description}</Text>
              <Link sx={{color: 'primary'}} to={subBlocks[0]?.path}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>{subBlocks[0]?.label}</span></Link>
              <Link sx={{color: 'primary'}} to={subBlocks[1]?.path}>
                <FontAwesomeIcon icon={faPhoneAlt} />
                <span>{subBlocks[1]?.label}</span></Link>
            </div>
            <div className="form-wrapper">
              <form action={button?.path} className="contact-form">
                <div className="contact-form-body">
                  <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required/>
                  <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                  <textarea type="text" placeholder="Tell us more" value={msg} onChange={(e) => setMsg(e.target.value)} style={{resize:'none'}} required/>
                </div>
                <button 
                  className="contact-1-submit-btn" 
                  type="submit" 
                  onClick={onSubmit}
                  sx={{
                    backgroundColor: 'primary',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: 'medium',
                    fontWeight: 'bold',
                    padding: '16px',
                    borderRadius: '16px',
                    minWidth: 'auto',
                    textAlign: 'center',
                    width: '100%',
                    outline: 'none',
                    fontFamily: 'Pangram',
                  }}
                >
                  Sign Up
                </button> 
              </form>
            </div>
            <a href="#second-block" className="down-arrow"><img src={downArrow} alt="" /></a>
          </div>
        </div>
      </div>
    )
  }

export default FirstBlock