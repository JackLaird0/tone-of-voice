import { apiKey } from './news-api-key';

export const fetchTrendingNews = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  const response = await fetch(url);
  const trendingNews = await response.json();
  return trendingNews;
};

export const fetchABCNews = async () => {
  const url = `https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=${apiKey}`;
  const response = await fetch(url);
  const ABCNews = await response.json();
  return ABCNews;
};

export const fetchBBCNews = async () => {
  const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`;
  const response = await fetch(url);
  const BBCNews = await response.json();
  return BBCNews;
};  

export const fetchCBSNews = async () => {
  const url = `https://newsapi.org/v2/top-headlines?sources=cbs-news&apiKey=${apiKey}`;
  const response = await fetch(url);
  const CBSNews = await response.json();
  return CBSNews;
};

export const fetchCNNNews = async () => {
  const url = `https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=${apiKey}`;
  const response = await fetch(url);
  const CNNNews = await response.json();
  return CNNNews;
};

export const fetchFoxNews = async () => {
  const url = `https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=${apiKey}`;
  const response = await fetch(url);
  const FoxNews = await response.json();
  return FoxNews;
};