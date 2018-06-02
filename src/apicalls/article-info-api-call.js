import { apiKey } from './article-info-api-key';

export const fetchArticleInfo = async (articleUrl) => {
  const url = `https://api.diffbot.com/v3/article?token=${apiKey}&url=${articleUrl}`
  const response = await fetch(url);
  const articleInfo = await response.json();
  return articleInfo;
};