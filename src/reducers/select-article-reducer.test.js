import { selectArticleReducer } from './select-article-reducer';

describe('select article reducer', () => {
  
  it('returns default state if the action type doesn\'t match', () => {
    let initialState = {};

    expect(selectArticleReducer(undefined, {})).toEqual(initialState);
  });

  it('returns state with article data when called', () => {
    let initialState = {};

    let article = {title: 'trumpy trump trump'}

    let selectArticleAction = {
      type: 'SELECT_ARTICLE',
      article
    };

    let newState = selectArticleReducer(initialState, selectArticleAction);

    expect(newState).toEqual(article);
  });
});