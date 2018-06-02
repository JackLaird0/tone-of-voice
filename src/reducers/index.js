import { newsReducer } from './news-reducer';
import { changeSelectedOutletReducer } from './change-selected-outlet-reducer';
import { selectArticleReducer } from './select-article-reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  news: newsReducer,
  selected: changeSelectedOutletReducer,
  article: selectArticleReducer
});