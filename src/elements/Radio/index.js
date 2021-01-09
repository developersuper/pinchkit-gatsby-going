/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'

import './index.scss'

const Radio = ({ color='black', sx, lists, handler, ...rest }) => {
  const [radio, setRadio] = useState(0)
  useEffect(() => {
    handler(lists[radio].label)
  }, [radio])
  const handleRadio = (idx) => {
    return (e) => {
      setRadio(idx)
    }
  }
  return (
    <div className="radioBox">
      {
        lists?.map((list, idx) => {
            return (
              <div key={idx}>
                <input 
                  type="radio" 
                  id={list.label}
                  name="radio-group"
                  value={list.label}
                  onChange={handleRadio(idx)}
                  checked={radio === idx}
                  />
                <label htmlFor={list.label}>{list.label}</label>
              </div>
            )
        })
      }
    </div>
  )
}

export default Radio