import { rootReducer } from './index';
import { createStore } from 'redux';
import { selectArticleReducer } from './select-article-reducer';
import { newsReducer } from './news-reducer';
import { changeSelectedOutletReducer } from './change-selected-outlet-reducer';

describe('Combine Reducers', () => {
  it('returns rootReducer when called', () => {
    let store = createStore(rootReducer)

    expect(store.getState().news).toEqual(newsReducer(undefined, {}))
    expect(store.getState().selected).toEqual(changeSelectedOutletReducer(undefined, {}))
    expect(store.getState().article).toEqual(selectArticleReducer(undefined, {}))
  });
})