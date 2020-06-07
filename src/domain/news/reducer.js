import {
    GET_NEWS_REQUESTED,
    GET_NEWS_SUCCEEDED,
    GET_NEWS_ERROR,
} from './action-types';

const initialState = {
    model: [],
    meta: {
        loading: false,
        loaded: false,
        error: null,
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS_REQUESTED:
            return {
                ...state,
                meta: {
                    loading: true,
                    loaded: false,
                    error: null,
                }
            };

        case GET_NEWS_SUCCEEDED:
            return {
                ...state,
                model: action.payload,
                meta: {
                    loading: false,
                    loaded: true,
                    error: null,
                }
            };

        case GET_NEWS_ERROR:
            return {
                ...state,
                model: [],
                meta: {
                    loading: false,
                    loaded: false,
                    error: action.payload,
                }
            };

        default:
            return state;
    }
}