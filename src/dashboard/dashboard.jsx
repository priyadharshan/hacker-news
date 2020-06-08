import React, { Component } from 'react'
import { Loader } from '../components/loader'
import { News } from './news'
import { Chart } from './chart'
import { Pagination } from './pagination'
import './dashboard.css'

export class Dashboard extends Component {

  componentDidMount() {
    const { match, fetchNews } = this.props
    const pageId = match.params.pageId
    fetchNews(pageId)
  }

  componentDidUpdate() {
    const { pageId, fetchNews, match } = this.props
    const newsPageId =  parseInt(pageId)
    const routingId = parseInt(match.params.pageId)

    const canFetchNews = newsPageId && routingId !== newsPageId

    if (canFetchNews) {
      fetchNews(this.props.match.params.pageId);
    }
  }

  render() {
    const { news, pageId, loading } = this.props

    return (
      <div>
        { loading ? <Loader loading={loading} /> :
          <div>
            <News news={news} />
            <Pagination pageId={pageId} />
            <Chart data={news} />
          </div>
        }
      </div>
    );
  }
}
