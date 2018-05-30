export const fetchNewsArticles = async (url) => {
  const response = await fetch(url);
  const articles = await response.json();
  return articles;
};
