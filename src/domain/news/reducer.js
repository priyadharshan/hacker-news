import {
    GET_NEWS_REQUESTED,
    GET_NEWS_SUCCEEDED,
    GET_NEWS_ERROR,
    HIDE_NEWS,
    UPVOTE,
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

        case HIDE_NEWS:
            const filteredModel = state.model.filter(news =>
                news.created_at_i !== action.payload
            );
            return {
                ...state,
                model: filteredModel,  
            }

        case UPVOTE:
            const updatedModel = state.model.map(news => {
                const points = news.points + 1
                const updatedVote = { ...news, points }
                return news.created_at_i === action.payload ? updatedVote : news
            })
            return {
                ...state,
                model: updatedModel,  
            }

        default:
            return state;
    }
}