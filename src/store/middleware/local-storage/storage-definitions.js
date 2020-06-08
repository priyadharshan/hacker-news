import * as actionTypes from '../../../domain/news/action-types';

export const UPDATE_NEWS_KEY = `${actionTypes.UPDATE_NEWS}/store`

export const storageDefinitions = {
  [actionTypes.UPDATE_NEWS]: [
    ({ action, saveState }) => {
      return saveState({ state: action.payload.news, storageKey: UPDATE_NEWS_KEY })
    }
  ],
};

