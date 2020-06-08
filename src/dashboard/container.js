import { connect } from 'react-redux';
import { actions } from '../domain/news';
import { Dashboard } from './dashboard';

const mapStateToProps = state => ({
  news: state.news.model,
  loading: state.news.meta.loading,
  error: state.news.meta.error,
  pageId: state.news.meta.pageId,
});

const mapDispatchToProps = dispatch => ({
  fetchNews: (pageId) => dispatch(actions.fetchNews(pageId)),
  updateNews: (newsId) => dispatch(actions.updateNews(newsId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
