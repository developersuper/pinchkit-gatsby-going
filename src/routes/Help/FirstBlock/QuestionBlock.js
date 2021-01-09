/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import H1 from 'elements/H1'
import Text from 'elements/Text'

import './index.scss'

const QuestionBlock = ({ articles, handleShowId, showId }) => {
  return (
    <div className="questions">
      {
        articles.map((article, idx) => {
          return (
            <React.Fragment key={article.title}>
              <div key={article.id+idx} className={`each-question ${(showId === article.id ? 'each-question-active' : '')}`} 
              onClick={handleShowId(article.id)}
              onKeyDown={handleShowId(article.id)}
              >
                <div className="each-question-title">
                  <H1 size="medium-minus" color="primary" className="letter-spacing-half">{article?.title}</H1>
                  <span className={showId === article.id ? 'question-arrow-up' : 'question-arrow-down' }></span>
                </div>
                <Text 
                  size="small-plus" 
                  color="black" 
                  family="Univers-LT-Std-45-Light" 
                  className="letter-spacing-half" 
                  style={ showId === article.id ? {display: 'block'} : {display: 'none' }}
                >
                  <div dangerouslySetInnerHTML={{__html: article.body}}></div>
                </Text>
              </div>
              {(article.id !== showId && article.id !== showId - 1 && article.id !== articles.length - 1) && <hr key={idx} />}
            </React.Fragment>
          )
        })
      }
    </div>
  )
}

export default QuestionBlock

