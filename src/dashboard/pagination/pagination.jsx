import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './pagination.css'

export const Pagination = memo(({ pageId }) => {
  return (
    <div className="pagination">
      { 
        pageId > 1 ? 
          <Link className="link" to={'/' + (parseInt(pageId) - 1)}>Prev</Link> :
          <Link className="disabled">Prev</Link>
      }
      <span className="seperator">|</span>
      <Link className="link" to={'/' + (parseInt(pageId) + 1)}>Next</Link>
    </div>
  )
})