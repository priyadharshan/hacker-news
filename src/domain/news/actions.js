import axios from 'axios';
import {
    GET_NEWS_REQUESTED,
    GET_NEWS_SUCCEEDED,
    GET_NEWS_ERROR,
} from './action-types'

const BASE_URL = 'https://hn.algolia.com/api/v1/search';
const QUERY = '?tags=front_page&hitsPerPage=50';

export const fetchNews = () => (dispatch) => {

    dispatch({ type: GET_NEWS_REQUESTED })
    
    return axios.get(`${BASE_URL}${QUERY}`)
        .then(response => {
            return dispatch({
                payload: response.data.hits,
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