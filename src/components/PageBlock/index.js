import React from 'react'

import SimpleTop from './SimpleTop'
import './index.scss'

const PageBlock = ({ type, ...rest }) => {
  if (type === 'simple-top') {
    return (
      <SimpleTop
        {...rest}
      />
    )
  }
  return null
}

export default PageBlock