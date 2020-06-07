import { connect } from 'react-redux';
import { actions } from '../domain/news';
import { Dashboard } from './dashboard';

const mapStateToProps = state => ({
  news: state.news.model,
  isLoading: state.news.meta.isLoading,
  error: state.news.meta.error,
});

const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(actions.fetchNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
