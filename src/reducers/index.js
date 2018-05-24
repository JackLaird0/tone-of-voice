import { trendingNewsReducer } from './trending-news-reducer';

export const rootReducer = () => ({
  trending: trendingNewsReducer
});