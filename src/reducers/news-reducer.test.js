import { newsReducer } from './news-reducer';

describe('news reducer', () => {
  let initialState;

  beforeEach(() => {
  
  initialState =
    {
      trending: [],
      abc: [],
      bbc: [],
      cbs: [],
      cnn: [],
      washPost: [],
      fox: []
    };
  }) 
  
  it('returns default state if the action type doesn\'t match', () => {
    
    expect(newsReducer(undefined, {})).toEqual(initialState);
  });

  it('returns state with trending data when called', () => {
    let news = [{title: 'trumpy trump trump'}];

    let outlet = 'trending'

    let addNewsAction = {
      type: 'ADD_NEWS',
      news, 
      outlet
    };

    let mockData = {
      trending: news,
      abc: [],
      bbc: [],
      cbs: [],
      cnn: [],
      washPost: [],
      fox: []
    };

    let newState = newsReducer(initialState, addNewsAction);

    expect(newState).toEqual(mockData);
  });
});