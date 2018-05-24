export const trendingNewsReducer = (state = [1, 2, 3], action) => {
  switch (action.type) {
    case 'ADD_TRENDING_NEWS': 
      return action.story;
    default:
      return state;
  }
}