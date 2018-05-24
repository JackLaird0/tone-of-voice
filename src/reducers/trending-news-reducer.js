export const trendingNewsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRENDING_NEWS': 
      return action.story;
    default:
      return state;
  }
}