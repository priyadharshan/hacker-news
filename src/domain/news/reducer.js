import {
    GET_NEWS_REQUESTED,
    GET_NEWS_SUCCEEDED,
    GET_NEWS_ERROR,
} from './action-types';

const initialState = {
    model: [],
    meta: {
        loading: false,
        error: null,
        pageId: '',
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS_REQUESTED:
            return {
                ...state,
                meta: {
                    loading: true,
                    error: null,
                    pageId: '',
                }
            };

        case GET_NEWS_SUCCEEDED:
            return {
                ...state,
                model: action.payload.hits,
                meta: {
                    loading: false,
                    error: null,
                    pageId: action.payload.page,
                }
            };

        case GET_NEWS_ERROR:
            return {
                ...state,
                model: [],
                meta: {
                    loading: false,
                    error: action.payload,
                    pageId: '',
                }
            };

        default:
            return state;
    }
}