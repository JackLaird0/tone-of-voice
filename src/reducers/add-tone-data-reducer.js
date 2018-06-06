export const addToneDataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TONE_DATA':
      const newState = Object.assign({}, state, {[action.name]: action.tone});
      return newState;
    default:
      return state;
  }
};