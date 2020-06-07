import React from 'react';
import { Link } from 'react-router-dom';

export const Pagination = ({ pageId }) => {
    return (
        <div>
          { pageId > 1 ? <Link to={'/news/' + (parseInt(pageId) - 1)}>Prev</Link> : <p>Prev</p> }
          <Link to={'/news/' + (parseInt(pageId) + 1)}>Next</Link>
        </div>
    )
}