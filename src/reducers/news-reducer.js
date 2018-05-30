const defaultState = {
  trending: [],
  abc: [],
  bbc: [],
  cbs: [],
  cnn: [],
  washPost: [],
  fox: []
}

export const newsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_NEWS': 
      const newState = Object.assign({}, state, {[action.outlet]: action.news})
      return newState;
    default:
      return state;
  }
}