import { newsReducer } from './news-reducer';
import { changeSelectedOutletReducer } from './change-selected-outlet-reducer';
import { selectArticleReducer } from './select-article-reducer';
import { addToneDataReducer } from './add-tone-data-reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  news: newsReducer,
  selected: changeSelectedOutletReducer,
  article: selectArticleReducer,
  tone: addToneDataReducer
});