/** @jsx jsx */
import { jsx } from 'theme-ui'

import H1 from 'elements/H1'

import TopBlog from './TopBlog'
import './index.scss'

const SecondBlock = ({ title = 'title', subBlocks, blogs }) => {
  return (
    <div id="blog-second-block" className="blog-second-block">
      <H1 size="huge" color="primary" className="blog-second-title">{title}</H1>
      <div className="blog-second-board">
        <TopBlog {...blogs[0]} />
        <TopBlog {...blogs[1]} />
        <TopBlog {...blogs[2]} />
      </div>
    </div>
  )
}

export default SecondBlock