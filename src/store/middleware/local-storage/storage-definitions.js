import * as actionTypes from '../../../domain/news/action-types';

export const UPDATE_NEWS_KEY = `${actionTypes.UPDATE_NEWS}/store`

export const storageDefinitions = {
  [actionTypes.UPDATE_NEWS]: [
    ({ action, saveState }) => saveState({ state: action.payload.data.hits, storageKey: UPDATE_NEWS_KEY }),
  ],
};

