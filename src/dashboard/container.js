import { connect } from 'react-redux';
import { actions,selectors } from '../domain/news';
import { Dashboard } from './dashboard';

const mapStateToProps = state => ({
  news: selectors.model(state),
  loading: selectors.loading(state),
  pageId: selectors.pageId(state),
});

const mapDispatchToProps = dispatch => ({
  fetchNews: (pageId) => dispatch(actions.fetchNews(pageId)),
  hideNews: (newsId) => dispatch(actions.hideNews(newsId)),
  upVote: (newsId) => dispatch(actions.upVote(newsId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
