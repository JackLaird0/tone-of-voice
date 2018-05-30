import { apiKey } from './news-api-key'

export const trendingNews = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

export const ABCNews = `https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=${apiKey}`;

export const BBCNews = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`;

export const CBSNews = `https://newsapi.org/v2/top-headlines?sources=cbs-news&apiKey=${apiKey}`;

export const CNNNews = `https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=${apiKey}`;

export const WashingtonPostNews = `https://newsapi.org/v2/top-headlines?sources=the-washington-post&apiKey=${apiKey}`;

export const FoxNews = `https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=${apiKey}`;