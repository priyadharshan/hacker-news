import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { News } from './news'
import './dashboard.css'

export class Dashboard extends Component {

  componentDidMount() {
    const {
      match,
      fetchNews,
    } = this.props

    const pageId = match.params.pageId
    fetchNews(pageId);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.pageId !== prevProps.pageId) {
      this.props.fetchNews(this.props.match.params.pageId);
    }
  }

  render() {
    const {
      news,
      pageId,
    } = this.props

    return (
      <div>
        <News news={news} />
        {pageId > 1 ? (
          <Link to={'/news/' + (parseInt(pageId) - 1)}>Prev</Link>
        ) : (
          <p>Prev</p>
        )}
        <Link to={'/news/' + (parseInt(pageId) + 1)}>Next</Link>
      </div>
    );
  }
}
