import { apiKey } from './news-api-key';

export const fetchTrendingNews = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  const response = await fetch(url);
  const trendingNews = await response.json();
  return trendingNews
};