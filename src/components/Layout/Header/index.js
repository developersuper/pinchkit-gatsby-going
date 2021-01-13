/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Location } from '@reach/router'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars
} from '@fortawesome/free-solid-svg-icons'


import Button from 'elements/Button'

import './index.scss'

const Header = ({isHome}) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      contentfulNavigation(title: { eq: "Default" }) {
        pageLinks {
          label
          path
          type
          highlighted
        }
        title
      }
    }
  `)
  const handleMobileIcon = () => {
    var x = document.getElementById("my-nav-body");
    if (x.className === "nav-body") {
      x.className += " responsive";
    } else {
      x.className = "nav-body";
    }
  } 
  return (
    <Location className='navbar'>
      {({ location }) => (
        <header>
          <div id="my-nav-body" className="nav-body">
            <div className={isHome ? "logo home" : 'logo'}>
              <Link to="/" >
                <div className="logo-image"></div>
              </Link>
              <div className="mobile-icon" onClick={handleMobileIcon} >
                <FontAwesomeIcon icon={faBars} color="#482d8d" size="lg" />
              </div>
            </div>
            {data?.contentfulNavigation?.pageLinks?.map(({ label, path, type, highlighted }) => {
              if (path === "purchase") return;
              const to = `/${path}`;
              if (type === 'Button') {
                if(isHome){
                  return (
                    <>         
                      <div className="home-auth">
                        <Link to="/sign-in"><span>Login</span></Link>
                        <Link to="/sign-up"><span>SignUp</span></Link>
                      </div>
                      <span className="cart-icon"></span>    
                    </>
                  )
                }
                return (
                  <Button to={to} key={label}>{label}</Button>
                )
              }
              return (
                <Link
                  key={label}
                  to={to}
                  sx={{
                    color: 'primary',
                    fontSize: 'small',
                    fontWeight: location?.pathname?.startsWith(to)  ? 700 : 'normal',
                    opacity: (location?.pathname?.startsWith(to) || highlighted) ? 1 : 0.9,
                  }}
                  className="nav-body-tag"
                >{label}</Link>
              )
            })}
          </div>
        </header>
      )}
    </Location>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
