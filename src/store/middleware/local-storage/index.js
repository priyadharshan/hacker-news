import { hasLocalStorage } from './has-local-storage';
import { loadState } from './load-state';
import { saveState } from './save-state';

const emptyMiddleware = storageDefinitions => store => next => action => next(action);

const localCacheMiddleware = storageDefinitions => store => next => action => {
  const prevState = store.getState();
  const localCacheFunction = storageDefinitions[action.type];
  const result = next(action);
  const nextState = store.getState();

  if (localCacheFunction) {
    if (typeof localCacheFunction === 'function') {
      localCacheFunction({
        action,
        loadState,
        saveState,
        prevState,
        nextState,
        dispatch: store.dispatch,
      });
    } else if (Array.isArray(localCacheFunction)) {
      localCacheFunction.forEach(f =>
        f({
          action,
          loadState,
          saveState,
          prevState,
          nextState,
          dispatch: store.dispatch,
        }),
      );
    }
  }

  return result;
};

export const localCache = hasLocalStorage() ? localCacheMiddleware : emptyMiddleware;
