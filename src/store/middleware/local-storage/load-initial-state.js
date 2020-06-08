import { UPDATE_NEWS_KEY } from './storage-definitions';
import { loadState } from './load-state';

export const loadInitialState = () => {
  const initialState = {};
  const news = loadState({ storageKey: UPDATE_NEWS_KEY });

  if (news) {
    initialState.news = news
  }

  return initialState;
};
