import { initialState, reducer } from './reducer'
import {
    GET_NEWS_REQUESTED,
    GET_NEWS_SUCCEEDED,
} from './action-types';

describe('reducers', () =>{
    it('should set state to is loading', () => {
        const result = reducer(initialState, {type: GET_NEWS_REQUESTED})
        expect(result.meta.loading).toBe(true)
    })

    it('should fetch news successfully', () => {
        const payload = {
            hits: [
                {id:1},
                {id:2}
            ],
            page: 1
        }
        
        const action = {
            type: GET_NEWS_SUCCEEDED,
            payload,
        }
        const result = reducer(initialState, action)

        expect(result.meta.loading).toBe(false)
        expect(result.meta.pageId).toBe(1)
        expect(result.model).toEqual([{id:1},{id:2}])
    })
})