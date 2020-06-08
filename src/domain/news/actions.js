import axios from 'axios';
import {
    GET_NEWS_REQUESTED,
    GET_NEWS_SUCCEEDED,
    GET_NEWS_ERROR,
    UPVOTE,
    HIDE_NEWS,
} from './action-types'

const BASE_URL = 'https://hn.algolia.com/api/v1/search?tags=story&page=';

export const fetchNews = (pageId) => (dispatch) => {

    dispatch({ type: GET_NEWS_REQUESTED })
    
    return axios.get(`${BASE_URL}${pageId}`)
        .then(response => {
            return dispatch({
                payload: response.data,
                type: GET_NEWS_SUCCEEDED,
            })
        })
        .catch((error) => {
            return dispatch({
                payload: error,
                type: GET_NEWS_ERROR,
            })
        })
}

export const hideNews = (newsId) => (dispatch) => dispatch({
    payload: newsId,
    type: HIDE_NEWS,
})

export const upVote = (newsId) => (dispatch) => dispatch({
    payload: newsId,
    type: UPVOTE,
})