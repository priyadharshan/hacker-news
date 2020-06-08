import React, { Component } from 'react'
import { Loader } from '../components/loader'
import { News } from './news'
import { Chart } from './chart'
import { Pagination } from './pagination'
import './dashboard.css'

export class Dashboard extends Component {

  hideItem = (newsId) => {
    this.props.hideNews(newsId)
  }

  upVote = (newsId) => {
    this.props.upVote(newsId)
  }

  componentDidMount() {
    const { fetchNews, pageId } = this.props
    if(!pageId) {
      const defaultId = "1"
      fetchNews(defaultId)
    }
  }

  componentDidUpdate() {
    const { pageId, fetchNews, match } = this.props
    const newsPageId =  parseInt(pageId)
    const routingId = parseInt(match.params.pageId)

    const canFetchNews = newsPageId && routingId && routingId !== newsPageId

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
            <News news={news} hideItem={this.hideItem} upVote={this.upVote} />
            <Pagination pageId={pageId} />
            <Chart data={news} />
          </div>
        }
      </div>
    );
  }
}
