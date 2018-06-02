export const selectArticleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_ARTICLE':
      return action.article
    default:
      return state;
  }
}