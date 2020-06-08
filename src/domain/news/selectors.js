import { path } from 'ramda'

const news = state => path(['news'], state)

const meta = state => path(['meta'], news(state))

export const model = state => path(['model'], news(state))
export const loading = state => path(['loading'], meta(state))
export const pageId = state => path(['pageId'], meta(state))