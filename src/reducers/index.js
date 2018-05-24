import { trendingNewsReducer } from './trending-news-reducer';
import { combineReducers } from 'redux' 

export const rootReducer = combineReducers({
  trending: trendingNewsReducer
});