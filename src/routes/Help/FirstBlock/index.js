/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'
import React from 'react'
import { Link } from 'gatsby'

import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'
import QuestionBlock from './QuestionBlock'

const FirstBlock = ({ title, description, subBlocks, link, articles, sections }) => {
  const [tag, setTag] = useState(0)
  const [showId, setShowId] = useState(-1)
  
  const selected = {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'primary',
    fontSize: 'medium-minus'
  }
  const normal = {
    color: 'primary',
    fontWeight: 'normal',
    backgroundColor: 'unset',
    fontSize: 'medium-minus'
  }

  const handleShowId = (id) => (e) => setShowId(id === showId ? -1 : id)
  const handleTag = (idx) => {
    return (e) => {
      if(idx !== tag) setShowId(-1)
      setTag(idx);
    }
  }
  return (
    <div className="help-first-block">
      <H1 className="help-title" color="primary">{title}</H1>
      <Text color="black" family="Univers-LT-Std-45-Light" size="medium" className="help-contact-info">
        {description?.description}
        <Link to={link?.path} sx={{color:'primary', size:'medium', fontFamily: 'univers-lt-std-65-bold'}}>
          {link?.label}
        </Link>
      </Text>
      {
        (sections.length > 0 && articles.length > 0) &&
        <>
        <ul>
          {sections.map((section, idx) =>
            (<li 
              key={section.id}
              onClick={handleTag(idx)}
              onKeyDown={handleTag(idx)}
              sx={
                idx === tag ? selected : normal
              }
              >
            {section.name}
            </li>)
          )}
        </ul>
        <QuestionBlock 
          articles={articles.filter(article => article.section_id === sections[tag].id)}
          handleShowId={handleShowId}
          showId={showId}
        />
        </>
      }
    </div>
  )
}

export default FirstBlock