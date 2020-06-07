import React, { Component } from 'react'
import { News } from './news'
import { Chart } from './chart'
import { Pagination } from './pagination'
import './dashboard.css'

export class Dashboard extends Component {

  componentDidMount() {
    const {
      match,
      fetchNews,
    } = this.props

    const pageId = match.params.pageId
    fetchNews(pageId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pageId && this.props.pageId && this.props.pageId !== prevProps.pageId) {
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
        <Pagination pageId={pageId} />
        <Chart data={news} />
      </div>
    );
  }
}
